"use client";
import BrandName from "./BrandName";
import Routes from "./Routes";
import Switch from "./Switch";

function Navbar() {
  return (
    <div className="flex w-full justify-between px-20 py-6">
      <div>
        <BrandName />
      </div>
      <div className="flex gap-12">
        <Routes />
        <Switch />
      </div>
    </div>
  );
}

export default Navbar;
