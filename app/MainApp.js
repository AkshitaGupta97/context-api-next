
import Header from '@/Component/Header'
import { MyContext } from '@/ContextHelper/Context'
import React, { useContext } from 'react'

function MainApp() {
    const user = useContext(MyContext);
  return (
    <div>
        <h2>Home Page</h2>
        <h3>User Name is : {user}</h3>
        <Header />
    </div>
  )
}

export default MainApp