import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-emerald-500/20 flex items-center text-white justify-center p-5">
      <Image
        width={50}
        height={50}
        className="filter rounded-full"
        src="/logo.svg"
        alt=""
      />
      <p className="text-xs text-white-900 pl-5">
        DISCLAIMER: If you are gambling online utilizing this DApp, you are
        doing so completely and totally at your own risk. We are not liable for
        any losses that are incurred or problems that arise at web3 casinos or
        elsewhere.
      </p>
    </footer>
  );
}

export default Footer;
