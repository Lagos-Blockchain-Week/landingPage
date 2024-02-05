import React, { Fragment } from 'react';
import HeaderNav from '@/components/HeaderNav';
import EventSchedule from '@/components/EventSchedule';

const schedule = () => {
  return (
    <Fragment>
      <title>Lagos BlockChain Week | Schedule</title>

      <img src="./images/schedule.png"  className='sm:h-[80vh] object-cover' alt="" />
      <div className='absolute top-0 w-full'>
        <HeaderNav />
        <section className="text-white text-center lg:h-[60vh]  lg:p-32 p-6 sm:py-16">
          <p>Held in the picturesque city of Lagos, LBW is a week-long <br /> blockchainextravaganza, made up of exhibitions, keynotes, workshops, <br /> networking events,and more. See the full schedule below.</p>
          <div className="lg:flex justify-center mt-10">
            <button className="flex p-4 sm:w-full lg:mr-10 border justify-center rounded-md bg-white text-[#131313] px-10">
{/*               <p className="mr-2 my-auto">Register </p> */}
              <p className="mr-2 my-auto"> Register for Hackathon <a href="https://forms.gle/H2ZcWVbeV2EbAbeG9"></a> </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
            <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md border border-white border-b-4 px-10">
              <p className="mr-2 my-auto">Partner With Us</p>
              <a href="https://forms.gle/Hz5RV1NCxZNfGbWQ6">Partner with us</a>
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </button>
          </div>
        </section>
      </div>
      <section>
        <EventSchedule />
      </section>
    </Fragment>
  );
};

export default schedule;
