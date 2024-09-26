// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Memoverse {
    IERC20 public memoToken;

    struct Post {
        address author;
        string title;
        string tagline;
        string content;
        string uri;
        uint256 likeCount;
        uint256 followCount;
        uint256 timestamp;
        Comment[] comments;
    }
    mapping(uint256 => Post) public posts;
    mapping(address => uint256[]) public userPosts;

    struct Comment {
        address author;
        string content;
        uint256 timestamp;
        uint256 reward;
    }

    struct Profile {
        string name;
        string bio;
        string uri;
    }
    mapping(address => Profile) public userProfiles;

    
    mapping(uint256 => mapping(address => bool)) public postLikes;
    mapping(uint256 => mapping(address => bool)) public postFollows;
    

    uint256 public nextPostID;

    event PostCreated(uint256 indexed postID, address indexed author);
    event PostLiked(uint256 indexed postID, address indexed liker);
    event PostFollowed(uint256 indexed postID, address indexed follower);
    event CommentAdded(uint256 indexed postID, address indexed commenter, uint256 reward);
    event ProfileCreated(address indexed user);
    event PostUpdated(uint256 indexed postID, address indexed author);
    event PostDeleted(uint256 indexed postID, address indexed author);


    constructor(address _memoTokenAddress) {
        memoToken = IERC20(_memoTokenAddress);
    }

    function createPost(string memory _title, string memory _tagline, string memory _content, string memory _uri) external {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_content).length > 0, "Content cannot be empty");

        uint256 postID = nextPostID++;
        Post storage newPost = posts[postID];
        newPost.author = msg.sender;
        newPost.title = _title;
        newPost.tagline = _tagline;
        newPost.content = _content;
        newPost.uri = _uri;
        newPost.timestamp = block.timestamp;

        userPosts[msg.sender].push(postID);

        emit PostCreated(postID, msg.sender);
    }

    function getPosts() external view returns (uint256[] memory) {
        uint256[] memory allPosts = new uint256[](nextPostID);
        for (uint256 i = 0; i < nextPostID; i++) {
            allPosts[i] = i;
        }
        return allPosts;
    }

    function getPost(uint256 _postID) external view returns (address, string memory, string memory, string memory, string memory, uint256, uint256, uint256, uint256) {
        require(_postID < nextPostID, "Post does not exist");
        require(posts[_postID].author != address(0), "Post has been deleted or does not exist");
        
        Post storage post = posts[_postID];
        return (post.author, post.title, post.tagline, post.content, post.uri, post.likeCount, post.followCount, post.timestamp, post.comments.length);
    }

    function likePost(uint256 _postID) external {
        require(_postID < nextPostID, "Post does not exist");
        require(!postLikes[_postID][msg.sender], "Already liked this post");

        Post storage post = posts[_postID];
        post.likeCount++;
        postLikes[_postID][msg.sender] = true;

        emit PostLiked(_postID, msg.sender);
    }

    function followPost(uint256 _postID) external {
        require(_postID < nextPostID, "Post does not exist");
        require(!postFollows[_postID][msg.sender], "Already following this post");

        Post storage post = posts[_postID];
        post.followCount++;
        postFollows[_postID][msg.sender] = true;

        emit PostFollowed(_postID, msg.sender);
    }

    function commentOnPost(uint256 _postID, string memory _content, uint256 _rewardAmount) external {
        require(_postID < nextPostID, "Post does not exist");
        require(bytes(_content).length > 0, "Comment cannot be empty");
        require(memoToken.balanceOf(msg.sender) >= _rewardAmount, "Insufficient MEMO token balance");

        Post storage post = posts[_postID];
        Comment memory newComment = Comment({
            author: msg.sender,
            content: _content,
            timestamp: block.timestamp,
            reward: _rewardAmount
        });

        post.comments.push(newComment);

        // Transfer the reward to the post author
        require(memoToken.transferFrom(msg.sender, post.author, _rewardAmount), "MEMO token transfer failed");

        emit CommentAdded(_postID, msg.sender, _rewardAmount);
    }

    function getComments(uint256 _postID) external view returns (Comment[] memory) {
        require(_postID < nextPostID, "Post does not exist");
        return posts[_postID].comments;
    }

    function createProfile(string memory _name, string memory _bio, string memory _uri) external {
        require(bytes(_name).length > 0, "Name cannot be empty");
        
        userProfiles[msg.sender] = Profile({
            name: _name,
            bio: _bio,
            uri: _uri
        });

        emit ProfileCreated(msg.sender);
    }

    function updatePost(uint256 _postID, string memory _title, string memory _tagline, string memory _content, string memory _uri) external {
        require(_postID < nextPostID, "Post does not exist");
        Post storage post = posts[_postID];
        require(post.author == msg.sender, "Only the author can update the post");
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_content).length > 0, "Content cannot be empty");

        post.title = _title;
        post.tagline = _tagline;
        post.content = _content;
        post.uri = _uri;

        emit PostUpdated(_postID, msg.sender);
    }


    function deletePost(uint256 _postID) external {
        require(_postID < nextPostID, "Post does not exist");
        Post storage post = posts[_postID];
        require(post.author == msg.sender, "Only the author can delete the post");
        require(post.author != address(0), "Post already deleted");

        // Remove post from userPosts array
        uint256[] storage userPostsList = userPosts[msg.sender];
        for (uint i = 0; i < userPostsList.length; i++) {
            if (userPostsList[i] == _postID) {
                userPostsList[i] = userPostsList[userPostsList.length - 1];
                userPostsList.pop();
                break;
            }
        }

        // Clear post data
        delete posts[_postID];

        emit PostDeleted(_postID, msg.sender);
    }


    function getProfile(address _user) external view returns (string memory, string memory, string memory) {
        Profile storage profile = userProfiles[_user];
        return (profile.name, profile.bio, profile.uri);
    }

    function getUserPosts(address _user) external view returns (uint256[] memory) {
        return userPosts[_user];
    }
}