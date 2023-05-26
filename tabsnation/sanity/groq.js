import { groq } from "next-sanity";

const allPost = groq`*[_type == "post"] | order(_createdAt desc) {
    title,
    body,
    slug,
    mainImage,
    tags
  }`
const homePost = groq`*[_type == "post"] | order(_createdAt desc)[0...6] {
    title,
    body,
    slug,
    mainImage,
    tags
  }`
const chords = groq`*[_type == "post" && categories[0]._ref == '5396c64c-e787-4a58-a571-7d650b70ab88'] {
    title,
    body,
    slug,
    mainImage,
    tags
  }`
const tags = groq`*[_type == 'post'].tags[]`
const categories = groq`*[_type == "category"] {title, slug, description,mainImage}`
const authors = groq`*[_type == "author"]`

export { allPost, homePost, chords, tags, categories, authors }

