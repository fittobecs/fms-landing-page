"use client"

import { Transition } from "@headlessui/react"
import Link from "next/link"
import React, { useState } from "react"
import { HiBars3, HiOutlineXMark } from "react-icons/hi2"

import { menuItems } from "@/data/menuItems"
import Image from "next/image"
import Container from "./Container"

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-[rgb(88,88,88)] fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-[rgb(88,88,88)] mx-auto flex justify-between items-center py-2 px-5 md:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/FMS_systems_logo.png"
              alt="fms system logo"
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.fittobe.ac/main/page.jsp?code=test_12121&ln=FMS_main"
                target="_blank"
                className="text-black bg-white border-4 border-red-600 hover:bg-gray-300 px-8 py-3 rounded-full transition-colors"
              >
                FMS 신청
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          id="mobile-menu"
          className="md:hidden bg-[rgb(88,88,88)] shadow-lg"
        >
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.fittobe.ac/main/page.jsp?code=test_12121&ln=FMS_main"
                target="_blank"
                className="text-black bg-white border-4 border-red-600 hover:bg-gray-300 px-8 py-3 rounded-full transition-colors"
                onClick={toggleMenu}
              >
                FMS 신청
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  )
}

export default Header
