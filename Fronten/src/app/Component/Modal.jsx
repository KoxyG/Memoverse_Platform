import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Button from './Button'
import ModalImage from "../../../public/modal.png"

const Modal = () => {
  return (
    <div className="text-center bg-darkBrown border-[1px] border-white rounded-md">
      <p>Congratulations!</p>
      <Image src={ModalImage} alt="modal Image" className="" />
      <p>Congratulations! You have successfully created a blog post 😊</p>
      <Button title="view blog post" classname=""/>
    </div>
  );
}

export default Modal