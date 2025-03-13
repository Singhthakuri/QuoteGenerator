import { useEffect, useState } from 'react'
import './App.css'
import { TiTick } from "react-icons/ti";
function App() {

  const [quoteData,setquoteData]=useState([{content:"Learn to be a good soul",author:"Gajendra"}])
  const [copy,setcopy]=useState(false)
  const clickHandler = async() =>{
     const url="https://api.quotable.io/quotes/random";
      await fetch(url)
      .then((val)=> val.json())
       .then((final)=> setquoteData(final))
  }

    const  copyHandler= async()=>{
        const copygenerator=document.getElementById('generator')
         const copiedTxt=navigator.clipboard.writeText(copygenerator.textContent)
         setcopy(true)
          setTimeout(() => {
              setcopy(false)
          }, 1000);
    }
          
  return (
    <>  <h1 className='text-3xl font-bold '>Quote Generator</h1>
       <div  id='generator' className=' flex min-w-[60px] min-h[50px] mx-auto justify-center items-center gap-10 bg-neutral-400 mt-3 rounded-lg'> 
         
        <div className='w-full mt-6 h-16'> <h1>{`"${quoteData[0]?.content}"`}</h1></div>
        
        <div className='w-40 h-auto'>  <span>{`-${quoteData[0]?.author}`}</span></div>
       </div>
      <div className='flex gap-x-5 justify-center items-center'>
          <button onClick={clickHandler} className='bg-green-300 mt-4 px-2 py-1 rounded-md'>
             Generate
          </button>
          <div className='relative flex'> 
          <button className='ml-6 bg-slate-300 rounded-md px-2 py-1 mt-4' onClick={copyHandler}>
            {
              !copy && "copy"
            }
            {
              copy && <span className='flex gap-x-1 items-center justify-center'>copied <TiTick className='bg-green-500 rounded-full text-white'/></span>
            }
            
          </button>
           </div>
          </div>
    </>
  )
}

export default App
