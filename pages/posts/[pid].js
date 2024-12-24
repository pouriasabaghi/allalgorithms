import { Geist, Geist_Mono } from "next/font/google";
import { getPost, getPosts } from "@/services/postApi";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function SinglePost({ post }) {
  return (
    <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <main
      className={`${geistSans.variable} ${geistMono.variable} _container font-[family-name:var(--font-geist-sans)]`}
      >
      <div
        className="content mt-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.desc }}
      ></div>
    </main>
        </>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: {
      pid: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const {
    params: { pid },
  } = context;

  const post = await getPost(pid);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default SinglePost;
