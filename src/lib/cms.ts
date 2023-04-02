import { Post } from '@/types';
import { sleep } from './sleep';

export const getAllPosts = async (): Promise<Post[]> => {
  await sleep(3000);

  return new Array(10).fill(0).map((_, i) => ({
    id: i,
    title: `Post ${i}`,
    body: `This is post ${i}`,
    slug: `post-${i}`,
  }));
};
