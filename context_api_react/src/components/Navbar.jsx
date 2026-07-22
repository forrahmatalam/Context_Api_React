import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className=" rounded-xl flex justify-between items-center bg-black p-4">
      <div>Logo</div>
      <div className='flex gap-4'>
<p onClick={()=>setToggle(false)}>Home</p>
<p onClick={()=>setToggle(true)}>Cart</p>

      </div>
      <button></button>
    </div>
  )
}

export default Navbar
