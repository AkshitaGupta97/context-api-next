
import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/ContextHelper/Context'

function Header() {
    const user = useContext(MyContext);
  return (
    <div className='text-3xl font-bold underline bg-teal-800 text-white p-3 m-3'>
        Header
        <h3>User Name is : {user}</h3>
        <Nav />
    </div>
  )
}

export default Header