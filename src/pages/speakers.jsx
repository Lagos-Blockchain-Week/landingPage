import React, { Fragment } from 'react';
import HeaderNav from '@/components/HeaderNav';
import Sponsor from '@/components/Sponsor';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import Join from '@/components/Join';

const speakers = () => {
  return (
    <Fragment>
      <title>Lagos BlockChain Week | Speakers</title>

      <img src="./images/speakers-hero.png" className='sm:h-[80vh] object-cover' alt="" />
      <div className='absolute top-0 w-full'>
        <HeaderNav />
        <section className="text-white text-center lg:h-[60vh] lg:p-32 p-6 sm:py-16">
          <p>Blockchain Week Hackathon: 2nd - 4th, May 2024</p>
          <p>Lagos Blockchain Week: 6th - 11th, May 2024</p>
          <div className="lg:flex justify-center mt-10">
            <button className="flex p-4 sm:w-full lg:mr-10 border justify-center rounded-md bg-white text-[#131313] px-10">
{/*               <p className="mr-2 my-auto">Become a Speaker</p> */}
              <p className="mr-2 my-auto">
              <a href="https://forms.gle/NmaWNsfp1n1deTGx9">Become a Speaker</a>
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-white border-b-4 px-10">
{/*               <p className="mr-2 my-auto">Partner With Us</p> */}
              <p className="mr-2 my-auto">
              <a href="https://forms.gle/UFC69AChcwCKAdCv7">Partner With Us</a>
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </div>
        </section>
      </div>
      {/* <div className='-mt-32'>
        <Sponsor />
      </div> */}
      {/* <section className='p-10'>
        <h3 className="font-bold mb-6 text-[30px]">Meet Our Speakers</h3>
        <div className='flex flex-wrap justify-between'>
          <div className='rounded-md bg-[#061620] p-4 w-[23%]'>
            <img src="./images/img_pexelsphotoby_232x232.png" alt="" />
            <div className='text-white my-2'>
              <p className='font-bold'>Joana Melborne</p>
              <p className='text-sm'>Smart Contract Developer</p>
            </div>
          </div>
          <div className='rounded-md bg-[#061620] p-4 w-[23%]'>
            <img src="./images/img_pexelsphotoby_232x232.png" alt="" />
            <div className='text-white my-2'>
              <p className='font-bold'>Joana Melborne</p>
              <p className='text-sm'>Smart Contract Developer</p>
            </div>
          </div>
          <div className='rounded-md bg-[#061620] p-4 w-[23%]'>
            <img src="./images/img_pexelsphotoby_232x232.png" alt="" />
            <div className='text-white my-2'>
              <p className='font-bold'>Joana Melborne</p>
              <p className='text-sm'>Smart Contract Developer</p>
            </div>
          </div>
          <div className='rounded-md bg-[#061620] p-4 w-[23%]'>
            <img src="./images/img_pexelsphotoby_232x232.png" alt="" />
            <div className='text-white my-2'>
              <p className='font-bold'>Joana Melborne</p>
              <p className='text-sm'>Smart Contract Developer</p>
            </div>
          </div>
        </div>
        <div className='my-6 flex justify-center'>
          <button className="flex p-4 sm:w-full lg:mr-10 border justify-center rounded-md bg-[#131313] text-white px-10">
            <p className="mr-2 my-auto">Become A Speaker</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          </button>
        </div>
      </section>
      <Partners /> */}

      <Join />
      <Footer />
    </Fragment>
  );
};

export default speakers;
