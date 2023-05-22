import PostList from '@/components/PostList';
import { getChords, getCurrentPost } from '@/sanity/lib/client';
import { initPagination } from '@/utils/helper';

const page = async () => {
  const posts = await getChords();
  const data = await initPagination(posts);

  return (
    <PostList params="chords"title={"All Guitar/Ukulele Posts"} paginationData={data} />
  )
}

export default page