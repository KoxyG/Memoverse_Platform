// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Users can create a post

contract Momoverse {

    struct Post {
        string title;
        string tagline;
        string content;
        string uri;
        mapping(uint => bool) likes;
        mapping(uint => bool) follow;
        Comment[] comments;
    }
    mapping(address => uint) publish;


    struct Comment {
        address author;
        string content;
        uint256 timestamp;
    }

    struct Profile {
        string name;
        string bio;
        string uri;
    }
    mapping(address => uint) userProfile;


    uint256 nextPostID;



    function CreatePost(string memory _title, string memory _tagline, string memory _content, string memory _uri) external payable{

    }

    function GetPosts() external view returns(string memory, string memory, string memory, string memory) {
       
    }

    function GetPost(uint _postID) external view returns(string memory, string memory, string memory, string memory) {
        
    }

    function LikePost(uint _postID) external {
        
    }

    function CreateProfile(string memory name, string memory bio, string memory uri) external {}
   
}
