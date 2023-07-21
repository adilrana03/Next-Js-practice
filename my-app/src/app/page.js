import Link from 'next/link';

export default function Home() {
  return (
    <div className='text-center'>
      <div>
        <h1 className='text-5xl'>Welcom,  Home</h1>
        <Link href='./products-clientside'> click to go to products page client side rending</Link>
        <br />
        <br />
        <Link href='./products-serverside'> click to go to products page server side rendering</Link>


      </div>
    </div>
  )
}
