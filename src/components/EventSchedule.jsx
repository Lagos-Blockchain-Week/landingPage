

import React from 'react'

function EventSchedule() {
  return (
    <div id='hero' className='lg:p-20 p-6 text-white mt-[100px] flex flex-col'>
      <p className='text-[30px] '>Event Schedule</p>
      <div className='mt-6 border border-[#FFFCE1] rounded-md p-3'>
        <div className='flex justify-between border-b border-[#414141] p-3 sm:text-sm'>
          <div className='w-[20%]'>
            <p className='font-bold'>DAY</p>
          </div>
          <div className='border-r border-[#414141]'></div>
          <div className='w-[48%]'>
            <p className='font-bold'>TOPIC</p>
          </div>
          <div className='border-r border-[#414141]'></div>
          <div className='w-[25%]'>
            <p className='font-bold'>SPEAKER</p>
          </div>
        </div>

        <div className='flex text-sm justify-between border-b border-[#414141] p-3 sm:text-xs'>
          <div className='w-[20%]'>
            <p className=''>4TH APRIL</p>
          </div>
          <div className='border-r border-[#414141]'></div>
          <div className='w-[48%]'>
            <p className=''>Morning Session/Registration</p>
          </div>
          <div className='border-r border-[#414141]'></div>
          <div className='w-[25%]'>
            <p className=''></p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <button className="flex p-4 sm:w-full lg:mr-10 border justify-center rounded-md bg-white text-[#131313] px-10">
          <p className="mr-2 my-auto">Add to calender</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default EventSchedule