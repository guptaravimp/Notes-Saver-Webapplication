import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPaste } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
const Home=() =>{
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const copyToClipboard = () => {
        navigator.clipboard.writeText(value);
        toast.success("Copied to clipboard!");
      };
    const dispatch = useDispatch();
      const allpaste=useSelector((state)=>state.paste.pastes)
      useEffect(()=>{
        if(pasteId){
            const paste=allpaste.find((p)=>p._id===pasteId);
            setTitle(paste.title);
            setValue(paste.content)
        }
          
      },[pasteId])
    const createPaste=()=> {
      const paste = {
        title: title,
        content: value,
        _id:
          pasteId ||
          Date.now().toString(36) + Math.random().toString(36).substring(2),
        createdAt: new Date().toISOString(),
      };
      
        if (pasteId) {
            dispatch(updateToPaste(paste));
        } else {
            dispatch(addToPastes(paste));
        }

        // Resetting state
        setTitle('');
        setValue('');
        setSearchParams({});
    };

    return (
        <div className=' mt-10 flex flex-col justify-center items-center   main-container'>
             <div className=' max-w-[100%]'>
        <div className='   flex justify-between items-center  mt-5   '>
            <input 
                
                type="text" 
                placeholder='Enter title Here'
                onChange={(e) => setTitle(e.target.value)} 
                value={title} 
                className=" border-2 border-black h-11 w-[60%] rounded-md p-2 text-xl text-black"
            />
            <button 
                onClick={createPaste} 
                className="bg-green-800  w-[30%] text-xl p-2 rounded-xl">
                {pasteId ? "Update Paste" : "Create My Paste"}
            </button>
        </div>
        <div className='mt-5  '>
            <div className='mt-0 rounded-ss-xl rounded-se-xl flex justify-between items-center p-2   border border-black'>
            <div className='text-xl  text-black font-medium   '><h1>Write Your content</h1></div>
            <div>            <button
            onClick={copyToClipboard}
            className="border border-black text-black rounded-md p-2 flex items-center gap-1"
          >
            <i className="fa-regular fa-copy"></i> Copy Content
          </button></div>


            </div>
        
            <textarea  
                className=' p-5 border border-black text-black rounded-es-xl rounded-ee-xl  ' 
                cols={70} 
                rows={20} 
                value={value}
                placeholder='Enter content here.....' 
                onChange={(e) => setValue(e.target.value)}
            >


                
            </textarea>
        </div>
    </div>               </div>
        
    );
}

export default Home;
