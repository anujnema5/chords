import { groq } from "next-sanity";

const allPost = groq`*[_type == "post"] | order(_createdAt desc)`
const homePost = groq`*[_type == "post"] | order(_createdAt desc)[0...6]`
export {allPost, homePost}

