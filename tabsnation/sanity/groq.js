import { groq } from "next-sanity";

const allPost = groq`*[_type == "post"] | order(_createdAt desc)`
const homePost = groq`*[_type == "post"] | order(_createdAt desc)[0...6]`
const chords = groq `*[_type == "post" && categories[0]._ref == '5396c64c-e787-4a58-a571-7d650b70ab88']`
export {allPost, homePost, chords}

