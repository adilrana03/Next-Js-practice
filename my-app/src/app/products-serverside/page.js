

const productslist = async () => {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      return data.products;

}
const Page = async () => {

      let products = await productslist();
      console.log(products);



      return (
            <div className='justify-center flex flex-wrap'>
                  {
                        products.map((e) => (

                              <div className='p-8 '>
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
                              </div>
                        ))
                  }
            </div >
      )
}

export default Page