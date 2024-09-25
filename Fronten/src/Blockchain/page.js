import { ethers } from "ethers";
import { useState } from "react";

const connectWallet = async () => {
  try {
    if (typeof window.ethereum === "undefined") {
      alert("Pls install Metamask");
    } else {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Connected", accounts[0]);
    }
  } catch (error) {
    console.log(error);
  }
};


export { connectWallet};