import Image from "next/image";
import Link from "next/link";

function PostItem({ post, loading = "lazy", priority = false }) {
  return (
    <li>
      <article className="overflow-hidden rounded-xl bg-gray-900">
        <Image
          src={post.thumbnail}
          width={416}
          height={234}
          alt={post.title}
          className="w-full object-cover"
          loading={loading}
          priority={priority}
        />
        <div className="p-5">
          <h3 className="mb-5 text-[22px] font-bold xl:text-[28px]">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h3>

          <p className="text-[17px] xl:text-xl min-h-[84px]">{post.excerpt}</p>
        </div>
      </article>
    </li>
  );
}

export default PostItem;
