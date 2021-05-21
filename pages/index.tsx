import MainLayout from '../layouts';
import PostsList from '../components/PostsList/PostsList';
import { NextThunkDispatch, wrapper } from '../redux/store';
import { handleAllPostsOperator } from '../redux/operators/postsOperations';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getAllPosts } from '../redux/selectors/posts-selectors';

export default function Home() {
  const posts = useTypedSelector(getAllPosts);

  return (
    <MainLayout headTitle="Home">
      <PostsList posts={posts} />
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await handleAllPostsOperator());
  },
);
