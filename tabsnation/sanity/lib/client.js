import { createClient } from 'next-sanity'
import { groq } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env'
import { allPost, categories, chords, currentPost, homePost, tags, authors } from '../groq';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

// RETURNING AN ARRAY OF ALL THE POST
export const getAllPost = async () => {
  if (client) {
    return (await client.fetch(allPost)) || [];
  }

  return [];
}

export const getPostHome = async () => {
  if (client) {
    return (await client.fetch(homePost)) || [];
  }

  return [];
}

export const getTags = async () => {
  if (client) {
    return (await client.fetch(tags))
  }
}

export const getChords = async () => {
  if (client) {
    return (await client.fetch(chords))
  }

  return [];
}

export const getPostByTags = async (query) => {
  const queryString = groq`*['${query}' in tags] {
    title,
    body,
    slug,
    mainImage,
    tags
  }`

  if (client) {
    return (await client.fetch(queryString));
  }

  return [];
}

export const getCurrentPost = async (slug) => {
  const query = groq`*[_type == "post" && slug.current == '${slug}']`
  if (client) {
    return (await client.fetch(query))[0] || {};
  }
  return {};
}

export const getCategories = async () => {
  if (client) {
    return (await client.fetch(categories))
  }

  return [];
}

export const getAuthorForPost = async (id) => {
  const query = `*[_type == "author" && _id == "${id}"] {
    image,
    name, 
    slug,
    bio
  }`
  if (client) {
    return (await client.fetch(query))[0] || {};
  }

  return {}
}

export const getAuthors = async () => {
  if (client) {
    return (await client.fetch(authors)) || []
  } return [];
}

export const getPostByCategories = async (query) => {
  const queryString = groq`*[count((categories[]->slug.current)[@ in ["${query}"]]) > 0] {
    title,
    body,
    slug,
    mainImage,
    tags
  }`

  if (client) {
    return (await client.fetch(queryString))
  }

  return [];
}

export const getPostByAuthorsSlug = async (slug) => {
  console.log(slug);
  const query = groq`*[_type == "author" && slug.current == "${slug}"]{
  "posts": *[_type == "post" && author._ref in *[_type=="author" && name == name ]._id ]
}`

  if (client) {
    return (await client.fetch(query)) || [];
  }

  return [];
}