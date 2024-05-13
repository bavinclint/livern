const Navbar = () => {
  return (
    <nav className="relative navbar-default mx-auto px-4">
      {/* Flex container */}
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <div className="">
            {/* <img src="img/logo.png" alt="" /> */}
            <a
              className="font-lora text-black text-[1.5rem] hover:text-gray-700 font-semibold"
              href="index.html"
            >
              Livern
            </a>
          </div>
        </div>
        {/* Menu Items */}
        <div className="hidden font-lora pr-28 tracking-[0.04em] text-[1rem] text-black font-semibold space-x-6 xl:flex">
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
          <div>
            <a
              className="nav-link relative inline-block text-left"
              href="index.html"
            >
              Development
            </a>
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
          <a className="nav-link" href="index.html">
            Contact
          </a>
          <a className="nav-link" href="index.html">
            Add Property
          </a>
        </div>
        {/* Notification */}
        <div className="hidden lg:block">
          <div className="flex items-center">
            <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
              <i className="fa-brands fa-google text-white mr-2" />
              <span>Login or Register</span>
            </button>
          </div>
        </div>
        {/* Hamburger Icon */}
        {/* <button
    id="menu-btn"
    class="block hamburger lg:hidden focus:outline-none"
  >
    <span class="hamburger-top"></span>
    <span class="hamburger-middle"></span>
    <span class="hamburger-bottom"></span>
  </button> */}
      </div>
      {/* Mobile Menu */}
      {/* <div class="md:hidden">
  <div
    id="menu"
    class="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
  >
    <a href="#">Pricing</a>
    <a href="#">Product</a>
    <a href="#">About Us</a>
    <a href="#">Careers</a>
    <a href="#">Community</a>
  </div>
</div> */}
    </nav>
  );
};
export default Navbar;
