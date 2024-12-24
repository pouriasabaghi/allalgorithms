import { Geist, Geist_Mono } from "next/font/google";
import PostsList from "@/features/posts/PostsList";
import { getPosts } from "@/services/postApi";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function Home({ posts }) {
  return (
    <>
    <Head>
      <title>AllAlgorithms | All Programming Principles </title>
      <meta name="description" content="Discover proven programming principles like DRY, KISS, and more with AllAlgorithms. Simplify your coding process and optimize your software development practices." />
    </Head>
      <main
        className={`${geistSans.variable} _container font-[family-name:var(--font-geist-sans)]`}
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
