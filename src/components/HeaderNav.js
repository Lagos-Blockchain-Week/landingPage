import React from "react";

function HeaderNav() {
  return (
    <header className="mt-[40px] flex justify-center   bg-black text-white">
  
  {/* items-center justify-between edit this */}
      <div className="p-5 flex items-center justify-between w-[80%]  border-solid rounded border-white border-[1px]">
      <p className="mr-[64px]">Blockchain Week</p>
      <div className="lg:flex hidden items-center gap-x-10">
      <p>Schedule</p>
      <p>Speaker</p>
      <p>Sponsors</p>
      <p>Volunteer</p>
      <p className="ml-[64px] py-5 px-12 text-black text-xl font-bold  bg-white rounded">Sponsor Us</p>
      </div>
      <img  src="./images/icons/icons8-hamburger.svg"
            className="bg-white w-6  cursor-pointer lg:hidden block my-auto"
            alt=""
          />
      </div>
    </header>
  );
}

export default HeaderNav;
