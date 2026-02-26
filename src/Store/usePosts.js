import { create } from "zustand";

const usePosts = create((set) => ({
  posts: [],

  fetchPosts: async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json(); // 👈 must await

      set({ posts: result }); // 👈 correct key name
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
}));

export default usePosts;
