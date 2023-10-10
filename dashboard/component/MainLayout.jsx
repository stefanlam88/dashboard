import React from "react";
import MainHeader from "./MainHeader";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-700 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-white rounded-lg w-60 p-4">
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome />
              <Link href="/">Home</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
