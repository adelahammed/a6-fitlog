import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="container mx-auto footer sm:footer-horizontal text-neutral-content justify-between max-sm:justify-center items-center p-4">
      <aside className="grid-flow-col max-sm:justify-center items-center max-sm:mx-auto">
        <Image alt="footer-logo" src={logo} />
      </aside>
      <aside>
        <p className="text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
