import Link from 'next/link'
import React from 'react'

function ProgramTrack() {
  return (
    <div className=' lg:mx-[50px] mx-4 my-20'>
      <h3 className="font-bold text-[30px]">Major Events</h3>
      <div className='my-6 lg:flex justify- p-6 rounded-md' id='hero'>
        <img src="./images/hackathon.png" className='lg:h-52 sm:w-full object-cover' alt="" />
        <div className='text-white lg:ml-4 sm:mt-3 lg:w-[35%]'>
          <p className='text-2xl'>Lagos Blockchain week <br />
            (LBW) Hackathon</p>
          <p>2nd - 4th, May 2024</p>
          <div className='lg:flex mt-10 justify-between'>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center text-[#131313] rounded-md border bg-white px-8">
              <p className="mr-2 my-auto">Register  </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
            <Link href={"/hackathon"}>
              <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-white border-b-4 px-8">
                <p className="mr-2 my-auto">Learn More</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className='border-r border-[#8D8D8D] w-10'></div>
        <div className='text-white lg:ml-20 p-5'>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>Connected Web3, Innovation</p>
          </div>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>Pan-African Collaboration</p>
          </div>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>BuiDLing</p>
          </div>
        </div>
      </div>
      <div className=' lg:flex justify-between'>
        <div className='lg:w-[47%] my-6 border border-[#0A1821] lg:flex p-6 rounded-md'>
          <img src="./images/crypto-conf.png" className='sm:w-full' alt="" />
          <div className='text-[#131313] lg:ml-4 sm:mt-2'>
            <p className='text-2xl'>Crypto 101 Conference</p>
            <p className='my-2'>6th May, 2024</p>
            <p className='text-xs'>Introduction to Bitcoin and Blockchain</p>
            <div className='mt-10'>
              <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-[#131313] border-b-4 px-8">
                <p className="mr-2 my-auto">Register  </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='lg:w-[47%] my-6 border border-[#0A1821] lg:flex p-6 rounded-md'>
          <img src="./images/expo.png" className='sm:w-full' alt="" />
          <div className='text-[#131313] lg:ml-4 sm:mt-2'>
            <p className='text-2xl'>Creator Convergence Expo</p>
            <p className='my-2'>7th May, 2024</p>
            <p className='text-xs'>Virtual reality (VR) creation workshop</p>
            <div className='mt-10'>
              <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-[#131313] border-b-4 px-8">
                <p className="mr-2 my-auto">Register  </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='my-6 lg:flex justify- p-6 rounded-md' id='hero'>
        <img src="./images/expo.png" className='lg:h-52 sm:w-full object-cover' alt="" />
        <div className='text-white lg:ml-4 lg:w-[35%] sm:mt-2'>
          <p className='text-2xl'>Innovation Across Borders (Pitch/VC Fund Day)</p>
          <p>8th, May 2024</p>
          <div className='lg:flex lg:mt-10 justify-between'>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center text-[#131313] rounded-md border bg-white px-8">
              <p className="mr-2 my-auto">Register  </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-white border-b-4 px-8">
              <p className="mr-2 my-auto">Learn More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </div>
        </div>
        <div className='border-r border-[#8D8D8D] w-10'></div>
        <div className='text-white lg:ml-20 p-5'>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>Creative entrepreneurship workshop</p>
          </div>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>Understanding blockchain privacy with Aztec protocol</p>
          </div>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>Pitch/VC Fund</p>
          </div>
        </div>
      </div>

      <div className='lg:flex justify-between'>
        <div className='lg:w-[47%] my-6  border border-[#0A1821] lg:flex p-6 rounded-md'>
          <img src="./images/storage.png" className='sm:w-full' alt="" />
          <div className='text-[#131313] lg:ml-4'>
            <p className='text-2xl'>DWeb Storage Expo</p>
            <p className='my-2'>9th May, 2024</p>
            <p className='text-xs'>Practical exercises on using Decentralized storage and retrieval</p>
            <div className='mt-10'>
              <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-[#131313] border-b-4 px-8">
                <p className="mr-2 my-auto">Register  </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='lg:w-[47%] my-6  border border-[#0A1821] lg:flex p-6 rounded-md'>
          <img src="./images/builders.png" className='sm:w-full' alt="" />
          <div className='text-[#131313] sm:mt-2 lg:ml-4'>
            <p className='text-2xl'>Web3 BuiDLers Workshop</p>
            <p className='my-2'>10th May, 2024</p>
            <p className='text-xs'>Developing dApps on virtual machine</p>
            <div className='mt-10'>
              <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-[#131313] border-b-4 px-8">
                <p className="mr-2 my-auto">Register  </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='my-6 lg:flex justify- p-6 rounded-md' id='hero'>
        <img src="./images/expo.png" className='lg:h-52 sm:w-full object-cover' alt="" />
        <div className='text-white lg:ml-4 lg:w-[35%] sm:mt-2'>
          <p className='text-2xl'>Web3 BuiDLers Submit</p>
          <p>11th, May 2024</p>
          <div className='lg:flex mt-10 justify-between'>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center text-[#131313] rounded-md border bg-white px-8">
              <p className="mr-2 my-auto">Register  </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-white border-b-4 px-8">
              <p className="mr-2 my-auto">Learn More</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </div>
        </div>
        <div className='border-r border-[#8D8D8D] w-10'></div>
        <div className='text-white lg:ml-20 p-5'>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>Blockchain Interoperability</p>
          </div>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>Advanced smart contract development </p>
          </div>
          <div className='flex my-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
            </svg>
            <p className='text-sm ml-4'>Staking and validator node setup </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProgramTrack