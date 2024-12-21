import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
import { RWebShare } from "react-web-share";
import { NavLink } from 'react-router-dom';
function Paste() {
  // paste is the name of our created slice 
  const pastes=useSelector((state)=>state.paste.pastes)
  const dispatch=useDispatch();
  const [searchTerm,setsearchTerm]=useState('');
  // searching filter 

  const filteredData=pastes.filter((paste)=>paste.title.toLowerCase()
  .includes(searchTerm.toLowerCase()))
  function handledelete(pasteId){
    dispatch(removeFromPaste(pasteId))

  }
  return (
    <div className='flex flex-col  justify-center items-center w-[100%]'>
    
    <div className='mt-10   w-[60%] flex justify-center items-center'> <input className=' p-3 text-black text-xl rounded-xl w-[100%] border-2 border-black' 
        type="search"  placeholder='search here '
         value={searchTerm}
          onChange={(e)=>setsearchTerm(e.target.value)}/>
    </div>
    <div className='mt-10 border-2 rounded-xl  w-[60%] justify-center items-center gap-4'>
       <div className='border-2 rounded-ss-xl rounded-se-xl p-2 text-2xl font-medium'><h1>All Pastes</h1></div>
        

        







    {/* ///outer div  */}
         <div className='flex flex-col   p-6 w-[100%] gap-5 '>
              {filteredData.length>0 && filteredData.map((paste)=>
              { 
                return(
                  
                  <div className='content-container   flex flex-col  p-4 justify-between items-center  rounded-xl '>
                    <div className='flex justify-between  w-[100%]  '> <div className='text-2xl p-2 flex flex-wrap w-[60%]  break-words overflow-hidden'>
                    {paste.title}
                    </div>
                    <div className='flex w-[25%]  flex-wrap justify-between items-center'>
                    <button className='border  rounded-md   p-2'>
                    <a href={`/?pasteId=${paste?._id}`}> <i class="fa-solid fa-pen-to-square"></i></a>
                    </button>
                    <button   className='  border rounded-md p-2'>
                      <NavLink to={`/pastes/${paste?._id}`}><i class="fa-regular fa-eye"></i></NavLink>
                      {/* <a href={}></a> */}
                    </button>
                    <button onClick={()=>handledelete(paste?._id)} className='  border rounded-md p-2'>
                    <i class="fa-solid fa-trash"></i>

                    </button>
                    <button onClick={()=>{
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("copied to clipboard")

                    }} className='  border rounded-md p-2'>
                      
                       <i class="fa-regular fa-copy"></i>
                    </button>
                    <button  className='  border rounded-md p-2'>
                    <RWebShare
                data={{
                    text: "Web Share - GfG",
                    url: "http://localhost:3000",
                    title: "GfG",
                }}
                onClick={() =>
                    console.log("shared successfully!")
                }
            >
                <button><i class="fa-solid fa-share-from-square"></i></button>
            </RWebShare>
                    </button>


                    </div>
                  </div>
                 



                  <div className='flex justify-between  w-[100%]  gap-4'> 


                  <div className='text-sm   p-2 break-words overflow-hidden w-[60%] '>
                    {paste.content}
                  </div>
                   <div>

                   <div className='mt-3  '><i class="fa-solid fa-calendar-days"></i> {paste?.createdAt}</div>
                   </div>


                  </div>

                   





































                 


     
                  </div>
                  
                )
            }
              )}
         </div>
    </div>
    
    
    </div>
    
  )
}

export default Paste
