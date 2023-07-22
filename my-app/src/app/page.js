import Link from 'next/link';
import { Roboto } from 'next/font/google';
import Navbar from './navbar/Navbar';
const rototo = Roboto({
  weight: "300",
  subsets: ['latin']
})

export default function Home() {
  return (
    <div className='text-center'>
      <Navbar />
      <div>
        <h1 className='text-5xl'>Welcome Home</h1>
        <Link href='./products-clientside'> click to go to products page client side rending</Link>
        <br />
        <Link href='./products-serverside'> click to go to products page server side rendering</Link>
        <br />
        <Link href='./modulecss'> click to go to css part</Link>
        <br />
        <Link className={rototo.className} href='./image' >click to go image</Link>
        <br />
        <Link href='./dynamicpage'> click to go to Dynamic page</Link>
      </div>
      <br />
    </div>
  )
}
