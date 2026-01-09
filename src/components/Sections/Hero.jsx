import React from 'react'

const Hero = () => {
  return (
      <div className='h-screen w-screen bg-[#1A1C21] flex justify-center items-center'>
        <div className='flex w-full max-w-6xl h-3/4 gap-6 '>
          {/* left section */}
          
        <div className='flex-1 items-center justify-center bg-amber-400'>
          <div className='pl-12'>
          <h1 className='text-6xl  font-bold'>"AI</h1>
           <h1 className='text-6xl  font-bold'>that</h1>
            <h1 className='text-6xl  font-bold'>Understands</h1>
             <h1 className='text-6xl gap-0.5 font-bold'> Your</h1>
              <h1 className='text-6xl gap-0.5 font-bold'>Career"</h1>
              </div>
        </div>
        {/* right section */}
        <div className='flex-1 bg-amber-950'></div>
        </div>
      </div>
  )
}

export default Hero
