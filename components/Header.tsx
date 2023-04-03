import Image from "next/image";
import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

function Header() {
  const address = useAddress();
  // console.log(address);
  const disconnect = useDisconnect();
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <a href="https://www.arbet.casino/" target="_blank" rel="noreferrer">
          <Image
            src="/logo.svg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        </a>
      </div>
      <div className="hidden md:col-span-3 md:flex items-center justify-center rounded-md">
        <div className="bg-[transparent] p-4 space-x-2">
          <NavButton title="Buy Tickets" isActive />
          <NavButton title="Logout" onClick={disconnect} />
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-emerald-500 flex flex-col ml-auto text-right">
          User: {address?.substring(0, 5)}...
          {address?.substring(address.length, address.length - 5)}
        </p>
      </div>
    </header>
  );
}

export default Header;
