import React from 'react'
import { productslist } from '../page'
import Image from 'next/image';

const page = async (props) => {
      const data = await productslist();
      const id = props.params.singleProduct - 1;
      const product = data[`${id}`];
      console.log(product.title);
      return (
            <div>
                  <h1>{product.title}</h1>

            </div>
      )
}

export default page