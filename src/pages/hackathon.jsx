import Footer from '@/components/Footer';
import HeaderNav from '@/components/HeaderNav';
import React from 'react';

const hackathon = () => {
  return (
    <div>
      <img src="./images/hackthon-hero.png" alt="" />
      <div className='absolute top-0 w-full'>
        <HeaderNav />
        <section className="text-white text-center lg:h-[60vh] lg:p-32 p-6 sm:py-16">
          <p>Blockchain Week Hackathon: 2nd - 4th, May 2024</p>
          <p>Lagos Blockchain Week: 6th - 11th, May 2024</p>
          <div className="lg:flex justify-center mt-10">
            <button className="flex p-4 sm:w-full lg:mr-10 border justify-center rounded-md bg-white text-[#131313] px-10">
              <p className="mr-2 my-auto">Register for Hackathon</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-white border-b-4 px-10">
              <p className="mr-2 my-auto">Partner With Us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </div>
        </section>
      </div>

      <section className='lg:p-20 p-4'>
        <h3 className="font-bold mb-6 text-[30px]">The LBW Hackathon</h3>
        <div className='lg:flex justify-between rounded-md text-white p-6' id='hero'>
          <div>
            <p className='py-20 text-2xl'>Lagos Blockchain week <br />
              (LBW) Hackathon</p>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center text-[#131313] rounded-md border bg-white px-8">
              <p className="mr-2 my-auto">Register  </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </div>
          <img className='sm:mt-10' src="./images/hack.png" alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default hackathon;