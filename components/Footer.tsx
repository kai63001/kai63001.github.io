import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  library.add(fab, fas);

  return (
    <footer className="bg-main2 mt-20 ">
      <div className="max-w-screen-xl mx-auto px-2 xs:px-0 flex justify-between py-10 text-white h-full">
        <div className="h-full">
          <h2 className="text-3xl">Supanat Konprom</h2>
          <p className="text-sm mt-3">
            © All rights are reserved 2022 Made with 💖
          </p>
        </div>
        <div className="bg-main2 bg-opacity-0 flex">
          <div className="my-auto space-x-4 flex">
            <Link href={"https://github.com/kai63001"}>
              <a target="_blank">
                <FontAwesomeIcon className="outline rounded-full p-1" size="2x" icon={["fab", "github"]} />
              </a>
            </Link>
            <Link href={"mailto:supanat0245@gmail.com"}>
              <a target="_blank">
                <FontAwesomeIcon className="outline rounded-full p-1" size="2x" icon={["fas", "envelope"]} />
              </a>
            </Link>
            <Link href={"tel:+66936652528"}>
              <a target="_blank">
                <FontAwesomeIcon className="outline rounded-full p-1 " size="2x" icon={["fas", "phone"]} />
              </a>
            </Link>
            <Link href={"https://hackerone.com/romeo1?type=user"}>
              <a target="_blank" className="block mt-1">
                <span className="border-4  rounded-full px-3 py-2 hover:bg-gray-200 hover:text-black duration-200">HACKER ONE</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
