import Image from 'next/image'
import React from 'react'
import image from '../../../public/vercel.svg'

const page = () => {
      // console.log(image);
      return (
            <div>
                  <h1>Show Image </h1>
                  <Image
                        src={image}
                  />

            </div>
      )
}

export default page