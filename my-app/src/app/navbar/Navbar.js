import React from 'react'

const Navbar = () => {
      return (
            <div>
                  <ul className='flex bg-blue-400 text-white justify-between p-2 mb-10'>
                        <div className='ml-4 p-1 '>
                              <h2>Next JS</h2>
                        </div>
                        <div className='justify-end'>
                              <li className='mr-5 p-1 '>
                                    <a className='mr-5 p-1' href="/">Home</a>
                                    <a className='mr-5 p-1' href="/">About</a>
                                    <a className='mr-5 p-1' href="/">Contact</a>
                              </li>
                        </div>
                  </ul>
            </div>
      )
}

export default Navbar