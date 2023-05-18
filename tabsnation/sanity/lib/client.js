import { createClient } from 'next-sanity'
import { groq } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env'
import { allPost, currentPost } from '../groq';

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

export const getCurrentPost = async (slug) => {
  const query = groq`*[_type == "post" && slug.current == '${slug}']`
  if (client) {
    return (await client.fetch(query))[0] || [];
  }
  return [];
}

