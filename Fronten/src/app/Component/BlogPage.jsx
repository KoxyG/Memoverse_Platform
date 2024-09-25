"use client"


import { useDropzone } from "react-dropzone";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Modal from "./Modal";


export default function BlogPage() {
  const [modal, SetModal] = useState(false)
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [content, setContent] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState("");
  const [setImgBase64] = useState("");

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (readerEvent) => {
          const base64 = readerEvent.target.result;
          setImgBase64(base64);
          setFileUrl(file);
        };

        reader.readAsDataURL(file);
      }
    },
  });

  const handleChange = (event) => {
    switch (event.target.name) {
      case "title":
        setTitle(event.target.value);
        break;
      case "tagline":
        setTagline(event.target.value);
        break;
      case "content":
        setContent(event.target.value);
        break;
      case "picture":
        if (event.target.files && event.target.files.length > 0) {
          setFileUrl(event.target.files[0]);
          console.log(event.target.files[0]);
        }
        break;
      default:
        break;
    }
  };

  //files to select

  const Files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const resetForm = () => {
    setTitle("");
    setTagline("");
    setContent("");
    setFileUrl("");
  };

  const handlrBundlrUpload = async (fileUrl) => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const bundlr = await getBundlr();

    try {
      console.log(fileUrl);
      const dataStream = FileReader(fileUrl);
      const Price = await bundlr.getPrice(fileUrl.size);
      console.log("price:", Price);
      const balance = await bundlr.getLoadedBalance();
      console.log("balance:", balance);
      if (Price.isGreaterThanOrEqualTo(balance)) {
        console.log("Funding node.");

        await bundlr.fund(Price);
        console.log("funded");
      } else {
        console.log("Funding not needed, balance sufficient.");
      }

      //const fileType = "image/png";

      const signedBundlrTransaction = await Othent.signTransactionBundlr({
        othentFunction: "uploadData",
        data: dataStream,
        tags: [{ name: "Test", value: "Tag" }],
      });
      console.log(signedBundlrTransaction);

      const transaction = await Othent.sendTransactionBundlr(
        signedBundlrTransaction
      );

      console.log(transaction);

      //const response = await bundlr.upload(dataStream, {
      //tags: [{ name: "Content-Type", value: fileType }],
      // });
      //console.log("bundlr uploaded file:", response.id);

      console.log("Content ID successfully saved to local storage.");

      console.log(
        `Upload success content URI= https://arweave.net/${transaction.id}`
      );
      return `https://arweave.net/${transaction.id}`;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handlrBundlrUpload(fileUrl);

    if (!title || !tagline || !content || !fileUrl) {
      console.log(title);
      console.log(tagline);
      console.log(content);
      console.log(fileUrl);

      toast.error("Please fill all required fields");
    } else {
      setLoading({ show: true, msg: "Nft..." });

      try {
        // Do something with the form data
        setLoading(true);

        setLoading(false);
        resetForm();
        SetModal(true)

        toast.success("Nft successfully minted!");
      } catch (error) {
        console.log(error);
        toast.error("An error occurred while trying to publish");
      }
    }
  };

  return (
    <div>
      {modal && <div className="h-screen ">
        <Modal/>
        </div>}
      <Header />
      <div className="bg-stone-950">
        <div className="justify-center align-center">
          {/* headers */}
          <div className="pb-3">
            <h1 className="text-white text-[27px] sm:text-[37px] text-center  pt-[66px] font-bold leading-10">
              CREATE A BLOG POST
            </h1>
            <p
              className="text-gray-50 text-[13px] 
            sm:text-[18px] pb-[10px] text-center font-normal leading-7"
            >
              Unleash Your Creative Odyssey
            </p>
          </div>

          <div
            className="w-full  items-center 
          justify-center flex flex-col pb-5 "
          >
            <form
              onSubmit={handleSubmit}
              className="shadow-md rounded-lg px-8  pb-[50px] flex flex-col "
            >
              {/* title input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="title"
                >
                  Title of your Blog post
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Enter the title of your blog post"
                />
              </div>

              {/* Tagline input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="tagline"
                >
                  Tagline of your Blog post Enter a tagline of your blog post if
                  any
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="tagline"
                  type="text"
                  name="tagline"
                  value={tagline}
                  onChange={handleChange}
                  placeholder="Enter a tagline of your blog post if any"
                />
              </div>

              {/* content input */}
              <div className="pb-6 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="description"
                >
                  Content of your blog post
                </label>
                <textarea
                  rows="9"
                  cols="70"
                  className="
                border rounded w-full md:w-[600px] 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="content"
                  type="text"
                  name="content"
                  value={content}
                  onChange={handleChange}
                  placeholder="Enter the content of your blog post"
                />
              </div>

              {/* picture / add nft input */}
              <div
                {...getRootProps({ className: "dropzone" })}
                className="pb-5 appearance-none"
              >
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="picture"
                >
                  Add a header pictures picture
                </label>
              </div>

              {/* dropzone section for the image */}
              <div className="bg-white rounded-md flex flex-col  ">
                <input
                  name="picture"
                  value=""
                  id="picture"
                  onChange={handleChange}
                  type="file"
                  accept="image/png"
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  {...getInputProps()}
                />
                {/*  
                <div
                  className=" sm:pt-[50px] 
                w-[22px] sm:w-[50px] h-[50px]"
                >
                  <img src="./images/addNft.png" alt="addNfts" />
                </div>
                */}

                <p
                  className="pt-[20px] text-center text-gray-700 
                text-opacity-50"
                >
                  Drag and drop or Select files here <br /> Pictures (in jpeg or
                  png format only)
                </p>
                <button
                  className="text-violet-500 pb-[50px] flex justify-center align-center"
                  type="button"
                  onClick={open}
                >
                  Select file
                </button>
              </div>

              <aside className="text-white">
                <ul>{Files}</ul>
              </aside>

              <div
                className="bg-gradient-to-r mt-[50px] from-orange-400 px-5 py-2.5 
                to-orange-400  px-5 py-2.5 
                 rounded-lg 
              border justify-center 
              items-center gap-2 inline-flex "
              >
                <button
                  type="submit"
                  className="text-white 
                cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Publishing..pls wait" : "Publish"}
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
