import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";
import dropdown from "@/assets/images/dropdown.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full navbar-default mx-auto px-4 bg-opacity-50">
      {/* Flex container */}
      <div className="flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
          {/* Mobile menu button*/}
          <button
            type="button"
            id="mobile-dropdown-button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* Logo */}
        <div className="flex flex-1 items-center justify-center xl:items-stretch xl:justify-start">
          <div className="flex flex-shrink-0 items-center">
            {/* <img src="img/logo.png" alt="" /> */}
            <a
              className="font-lora text-gray-800 text-[1.8rem] hover:text-orangeMain font-medium"
              href="index.html"
            >
              Livern
            </a>
          </div>
        </div>
        {/* Menu Items */}
        <div className="hidden font-lora pr-28 tracking-[0.04em] text-[1rem] text-gray-800  space-x-6 xl:flex font-semibold">
          <a className="nav-link active" href="index.html">
            Home
          </a>
          <a className="nav-link" href="index.html">
            About
          </a>
          <a className="nav-link" href="index.html">
            Services
          </a>
          <a className="nav-link" href="index.html">
            Property
          </a>
          <a className="nav-link" href="index.html">
            Blog
          </a>
          <div className="nav-link flex">
            <a href="">Development </a>
            <Image className="w-6" src={dropdown} alt="" />
          </div>
          <a className="nav-link" href="index.html">
            Contact
          </a>
          <a className="nav-link" href="index.html">
            Add Property
          </a>
        </div>
        {/* Right Side Menu (Logged Out) */}
        <div className="hidden xl:block">
          <div className="flex items-center">
            <button className="flex items-center font-lora font-semibold tracking-[0.04em] text-white bg-orangeMain hover:bg-orangeMinor hover:text-gray-800 rounded-md px-2 py-1">
              <i className="fa-brands fa-google text-white mr-2" />
              <span>Login or Register</span>
            </button>
          </div>
        </div>
        {/* Right Side Menu (Logged In) */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
          <a href="messages.html" className="relative group">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              2{/* Replace with the actual number of notifications */}
            </span>
          </a>
          {/* Profile dropdown button */}
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  src={profileDefault}
                  alt=""
                />
              </button>
            </div>
            {/* Profile dropdown */}
            <div
              id="user-menu"
              className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex={-1}
            >
              <a
                href="/profile.html"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="saved-properties.html"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-2"
              >
                Saved Properties
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-2"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/index.html"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="/properties.html"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Properties
          </a>
          <a
            href="/add-property.html"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Add Property
          </a>
          <button className="flex items-center text-white bg-orangeMain hover:bg-orangeMinor hover:text-white rounded-md px-3 py-2 my-4">
            <i className="fa-brands fa-google mr-2" />
            <span>Login or Register</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
