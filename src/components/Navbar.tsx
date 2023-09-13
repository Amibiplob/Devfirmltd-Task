import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-5 bg-white rounded-2xl">
      <div>
        <input
          className="border border-zinc-400 rounded-full py-3 px-14"
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
      </div>
    </div>
  );
};

export default Navbar;
