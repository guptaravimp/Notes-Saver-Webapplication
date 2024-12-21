import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ViewPaste() {
  const {id}=useParams();
  const allpastes=useSelector((state)=>state.paste.pastes);
  const paste=allpastes.filter((p)=>p._id===id)[0];
  console.log("Final paste si ",paste)
  return (
    <div className='flex justify-center items-center'><div className=''>
    <div className='mt-3 flex gap-4 justify-between'>
        <input 
            className='p-2 rounded-xl w-[300px] text-black mt-2 place-content-evenly' 
            type="text" 
            placeholder='Enter title Here'
            disabled
            value={paste.title}
        />
       
    </div>
    <div className='mt-5'>
        <textarea 
            className='border-2 p-5 text-white border-white bg-black rounded-xl' 
            cols={70} 
            rows={20} 
            disabled
            value={paste.content}
            
        ></textarea>
    </div>
</div></div>
    
  )
}

export default ViewPaste
