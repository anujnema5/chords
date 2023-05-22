import { POSTS_PER_PAGE } from "./data";

String.prototype.capitalizedString = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export const dynamicPagination = async (params, posts) => {
  const pageNumber = parseInt(params.slug);

  const initialDisplayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1), POSTS_PER_PAGE * pageNumber);

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  }

  return {
    initialDisplayPosts,
    pagination,
    posts
  }
}


export const initPagination = async (posts) => {
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)

  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  }

  return {
    posts,
    initialDisplayPosts,
    pagination
  }
}