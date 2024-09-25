import React from 'react'

const Button = ({type, title, classname}) => {

    const style = `bg-gold py-2 px-4 + ${classname}`
  return (
    <button type={"button" || type} className={style}>{title}</button>
  )
}

export default Button