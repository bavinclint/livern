import { Libre_Bodoni } from "next/font/google";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <footer className="text-sm">
        <div className="p-10 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="mb-5">
                <h3 className="text-2xl pb-4 leading-none font-medium tracking-[1px] uppercase text-white ">
                  Livern
                </h3>
                <p className="text-sm leading-6 text-[#b4aca8] mb-0">
                  Infinity Place Solem Street <br />
                  P.O Box 53502 - 00100
                  <br />
                  Nairobi, Kenya <br />
                  <br />
                  <strong>Phone:</strong> +254 700 000 000
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>

              <div className="mb-5">
                <h4 className="text-base font-medium text-white pb-4">
                  Useful Links
                </h4>
                <ul className="text-[#b4aca8]">
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />{" "}
                    <a className="hover:text-main px-1" href="#">
                      Home
                    </a>
                  </li>
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />{" "}
                    <a className="hover:text-main px-1" href="#">
                      About us
                    </a>
                  </li>
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />{" "}
                    <a className="hover:text-main px-1" href="#">
                      Services
                    </a>
                  </li>
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />
                    <a className="hover:text-main px-1" href="#">
                      Terms of service
                    </a>
                  </li>
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />
                    <a className="hover:text-main px-1" href="#">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="text-base font-medium text-white pb-4">
                  Our Services
                </h4>
                <ul className="text-[#b4aca8]">
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />
                    <a className="hover:text-main px-1" href="#">
                      Rent Property
                    </a>
                  </li>
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />
                    <a className="hover:text-main px-1" href="#">
                      Buy Property
                    </a>
                  </li>
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />
                    <a className="hover:text-main px-1" href="#">
                      Development
                    </a>
                  </li>
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />{" "}
                    <a className="hover:text-main px-1" href="#">
                      Marketing
                    </a>
                  </li>
                  <li className="pb-4 flex">
                    <FaChevronRight className="text-main" />
                    <a className="hover:text-main px-1" href="#">
                      Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="pb-4 text-base text-white font-medium">
                  Join Our Newsletter
                </h4>
                <p className="pb-4 text-[#b4aca8]">
                  Receive exclusive content, industry insights and special
                  offers
                </p>
                <form
                  className="flex flex-row flex-wrap"
                  action=""
                  method="post"
                >
                  <input
                    className="text-[#b4aca8] rounded-l-lg w-2/3 p-2 focus:border-main"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                  />
                  <button className="p-2 rounded-r-lg w-1/3 bg-main text-[#b4aca8] hover:bg-minor">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-footerbgMain text-[#b4aca8] px-10">
          <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
            <div className="text-center">
              <div>
                © Copyright{" "}
                <strong>
                  <span>Livern</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="">
                Designed by{" "}
                <a className="text-main" href="https://orxbit.com/">
                  Orxbit
                </a>
              </div>
            </div>

            <div className=" text-xl text-white mb-2">
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1">
                <FaXTwitter className="hover:text-minor w-6 h-6" />
              </a>
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1">
                <FaFacebookF className="hover:text-minor w-6 h-6" />
              </a>
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1">
                <FaInstagram className="hover:text-minor w-6 h-6" />
              </a>
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1">
                <FaTiktok className="hover:text-minor w-6 h-6" />
              </a>
              <a href="#" className="w-10 h-10 mx-1 inline-block pt-1">
                <FaLinkedinIn className="hover:text-minor w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
};
export default Footer;
