import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-blue-700 text-white font-semibold text-xl justify-around items-center sticky top-0 px-4 py-2">
      <div>Navbar</div>
      <div>
        <div>
          <Link href="/employee">Employee</Link>
        </div>
        <div>
          <Link href={"/task"}>Task</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
