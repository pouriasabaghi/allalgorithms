import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <nav className="_container  bg-[#060f13] py-4">
          <Link href="/" className="text-lg font-bold text-red-700">
            AA
          </Link>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
