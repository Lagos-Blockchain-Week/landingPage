import React from 'react';

const Partners = () => {
  return (
    <div id="footer" className="lg:p-20 p-6 mt-[100px] text-white flex flex-col">
      <p className="text-[30px] font-bold">Our Partners</p>

      <div className="mt-6 lg:flex justify-between lg:w-[70%]">
        <img className="h-12 sm:my-3" src="./images/sponsors icon/black/img1 (1).png" alt="" />
        <img className="h-12 sm:my-3" src="./images/sponsors icon/black/img1 (2).png" alt="" />
        <img className="h-12 sm:my-3" src="./images/sponsors icon/black/img1 (3).png" alt="" />
      </div>

      <div className="lg:mt-8 lg:flex justify-between lg:w-[80%]">
        <img className="h-12 sm:my-3" src="./images/sponsors icon/black/img1 (4).png" alt="" />
        <img className="h-12 sm:my-3" src="./images/sponsors icon/black/img1 (5).png" alt="" />
        <img className="h-12 sm:my-3" src="./images/sponsors icon/black/img1 (6).png" alt="" />
      </div>
      <div className="flex justify-center mt-8">
        <button className="flex p-4 sm:w-full sm:mt-4 justify-center rounded-md bg-text bg-[#131313] px-10">
          <p className="mr-2 my-auto">Become a Patner</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Partners;