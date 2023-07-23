import Link from 'next/link';
import Navbar from '../navbar/Navbar';


export const productslist = async () => {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      return data.products;

}
const Page = async () => {
      console.log(process.env.SERVER_PASSWORD);

      let products = await productslist();

      return (
            <div>
                  <Navbar />
                  <div className='justify-center flex flex-wrap'>
                        {
                              products.map((e) => (

                                    <Link href={`/products-serverside/${e.id}`} className='p-8 '>
                                          <ul key={e.id} className='shadow-emerald-200 bg-slate-400 block p-4 rounded-md'>
                                                <div className='h-[300px] w-[300px] p-2 rounded-lg'>
                                                      <img src={e.thumbnail} className='h-full' alt="" />
                                                </div>
                                                <div>
                                                      <li>Name - {e.title}</li>
                                                      <li>Price - {e.price}</li>
                                                      <li>Rating - {e.rating}</li>
                                                </div>
                                          </ul>
                                    </Link>
                              ))
                        }
                  </div >
            </div>
      )
}

export default Page