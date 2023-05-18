import { groq } from "next-sanity";

const allPost = groq`*[_type == "post"] | order(_createdAt asc)`
export {allPost}

