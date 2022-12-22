import React, { useState } from "react";
import Link from "next/link";
import LinkTo from "./navlink";
import { burger, close, user, message } from "./icons";

function Navbar() {
  const [display, setDisplay] = useState("hidden");

  function clickHandler() {
    if (display == "hidden") setDisplay("block");
    else setDisplay("hidden");
  }

  return (
    <div className=" fixed w-full h-14 border-b px-4 flex items-center justify-between bg-white">
      <Link href="/"><h1 className="font-semibold text-lg md:text-base">TRIALSHOPPY</h1></Link>

      <button
        onClick={clickHandler}
        data-collapse-toggle="navbar-multi-level"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
      {burger}
      </button>

      <div className={`h-screen w-3/5 p-4 bg-orange-300 fixed top-0 right-0 items-center justify-between ${display} md:h-full md:flex md:static md:w-1/2 md:bg-white`}>
        <div className="md:hidden" onClick={clickHandler}>{close} </div>
        <LinkTo linkTo="employee" />
        <LinkTo linkTo="department" />
        <LinkTo linkTo="attendance" />
        <LinkTo linkTo="tasks" />
        <LinkTo linkTo="meeting" />
        <LinkTo linkTo="leave" />
      </div>

      <div className="w-20 justify-between hidden md:flex">
        <Link href="/">{user}</Link>
        <Link href="/">{message}</Link>
      </div>
    </div>
  );
}

export default Navbar;
