import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/aa-logo.svg";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="_container bg-[#060f13] py-4">
        <Link href="/" className="text-lg font-bold text-red-700">
          <Image src={Logo} width={50} height={50} alt="all algorithms logo" />
        </Link>
      </nav>
      <Component {...pageProps} />
      <footer className="_container py-10 text-xs text-gray-400">
        © 2024 AllAlgorithms. Built with passion, shared with developers
        worldwide &nbsp;|&nbsp;
        <a className="text-blue-600 align-middle" target="_blank" rel="nofollow" href="https://www.linkedin.com/in/pouria-sabaghi-ba052730b/">
          LinkedIn
        </a>
        &nbsp;|&nbsp;
        <a className="text-blue-600 align-middle" rel="nofollow" href="mailto:pouriasabaghi@gmail.com">
          Contact
        </a>
      </footer>
    </>
  );
}
