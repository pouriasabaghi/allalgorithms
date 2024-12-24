import http from "@/utils/http";

export const getPosts = async () => {
  try {
    const posts = await http.get("/api/v1/posts");
    return posts.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async (postId) => {
  try {
    if (postId === undefined) throw new Error("postId is undefined");

    const posts = await http.get(`/api/v1/posts/${postId}`);
    return posts.data;
  } catch (error) {
    console.error(error);
  }
};
