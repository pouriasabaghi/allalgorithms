import PostsList from "@/features/posts/PostsList";
import { getPosts } from "@/services/postApi";
import http from "@/utils/http";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ posts }) {
  return (
    <>
      <main
        className={`${geistSans.variable} ${geistMono.variable} _container font-[family-name:var(--font-geist-sans)]`}
      >
        <section className="md:pt-10">
          <h1 className="mb-2 text-3xl font-bold">
            Master Programming Principles with AllAlgorithms
          </h1>
          <h2 className="mb-10 text-xl">
            Discover Essential Programming Algorithms and Rules
          </h2>
          <PostsList posts={posts} />
        </section>
      </main>
      <footer className="_container py-10 text-xs text-gray-400">
        © 2024 AllAlgorithms. Built with passion, shared with developers
        worldwide &nbsp;|&nbsp;
        <a className="text-blue-600" href="mailto:pouriasabaghi@gmail.com">
          contact
        </a>
      </footer>
    </>
  );
}

export async function getStaticProps(context) {
  const posts = await getPosts();

  return {
    props: {
      posts: posts,
    },
    revalidate: 60,
  };
}
