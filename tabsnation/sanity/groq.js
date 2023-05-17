import { groq } from "next-sanity";

export const getAllPost = groq`*[_type == "post"]`