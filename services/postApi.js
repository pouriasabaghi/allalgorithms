import http from "@/utils/http";

export const getPosts = async () => {
  try {
    const posts = await http.get("/api/v1/posts");
    return posts.data;
  } catch (error) {
    console.error(error);
  }
};
