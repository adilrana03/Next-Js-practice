import React from 'react'
import getusers from '../../../services/users'
import Link from 'next/link';
import Navbar from '../navbar/Navbar';

const page = async () => {
  const getUserList = getusers();
  const users = await getUserList;
  return (
    <div>
      <Navbar />
      <h1>User List</h1>
      {
        users.map((e) =>
          <h2>
            <Link href={`/dynamicpage/${e.id}`}>{e.name}</Link>
          </h2>
        )
      }
    </div>
  )
}

export default page