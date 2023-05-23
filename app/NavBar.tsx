'use client'
import Link from "next/link"
import { Oswald } from "next/font/google"
import {
  DevicePhoneMobileIcon,
  CubeTransparentIcon
} from "@heroicons/react/24/outline"

const oswald = Oswald({ weight: ['600'], subsets: ['latin'] })

const NavBar = () => {
  return (
    <nav className="w-11/12 mx-auto fixed top-0 left-0 right-0 flex justify-between p-4 text-blue-500 bg-white border-b-gray-700 border-b-2 z-10">
        <h2 className={`text-2xl cursor-pointer ${oswald.className} text-light-blue-400`}>{"</David's Blog>"}</h2>

        <div className="flex items-center gap-3">
            <Link href={'/proyectos'} className="flex gap-2 items-center hover:text-deep-purple-700 transition-colors">
              <CubeTransparentIcon className="w-6 h-6" />
              Proyectos</Link>
            <Link href={'/blog'} className="flex gap-2 items-center hover:text-deep-purple-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              Posts</Link>
            <Link href={'/acerca-de-mi'} className="flex gap-2 items-center hover:text-deep-purple-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
              Acerca de Mi</Link>
            <Link href={'/contacto'} className="flex gap-2 items-center hover:text-deep-purple-700 transition-colors">
              <DevicePhoneMobileIcon className="w-6 h-6" />
              Contáctame</Link>
        </div>        
    </nav>
  )
}

export default NavBar