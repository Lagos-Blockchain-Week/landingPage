import React from "react";

function HeaderNav() {
  return (
    <header className="mt-[40px] flex justify-center  bg-black text-white">
  
     
      <div className="p-5 flex items-center gap-x-10 border-solid rounded border-white border-[1px]">
      <p className="mr-[64px]">Blockchain Week</p>
      <p>Schedule</p>
      <p>Speaker</p>
      <p>Sponsors</p>
      <p>Volunteer</p>
      <p className="ml-[64px] py-5 px-12 text-black text-xl font-bold  bg-white rounded">Sponsor Us</p>
      </div>
    </header>
  );
}

export default HeaderNav;
