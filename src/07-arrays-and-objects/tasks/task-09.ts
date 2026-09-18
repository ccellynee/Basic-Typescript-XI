/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

// 1. Find post that containing "typescript"!
const typescriptPosts = posts.filter(
  (post) =>
    post.hashtags.includes("typescript") ||
    post.content.toLowerCase().includes("typescript")
);

console.log("Posts Containing 'typescript'");
console.dir(typescriptPosts, { depth: null });

// 2. Find post that containing "nestjs"!
const nestjsPosts = posts.filter(
  (post) =>
    post.hashtags.includes("nestjs") ||
    post.content.toLowerCase().includes("nestjs")
);

console.log("\nPosts Containing 'nestjs'");
console.dir(nestjsPosts, { depth: null });

// 3. Find the post with highest number of likes!
const highestLikesPost = posts.reduce((max, post) =>
  post.likes > max.likes ? post : max
);

console.log("\nPost with Highest Likes");
console.dir(highestLikesPost, { depth: null });

// 4. Calculate the total of likes!
const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

console.log("\nTotal Likes");
console.log(`Total Likes: ${totalLikes}`);

