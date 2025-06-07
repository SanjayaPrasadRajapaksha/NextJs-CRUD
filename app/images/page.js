import React from 'react'
import image from "../../assets/image.jpeg"
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <h1>We will show the image here</h1>
      <Image src={image} alt='image'/>
    </div>
  )
}

export default page
