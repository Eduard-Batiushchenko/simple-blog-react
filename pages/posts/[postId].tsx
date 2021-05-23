/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import MainLayout from '../../layouts';
import SinglePost from '../../components/SinglePost/SinglePost';
import { getCurrentPost } from '../../redux/selectors/posts-selectors';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { wrapper, NextThunkDispatch } from '../../redux/store';
import { handleSinglePostOperator } from '../../redux/operators/postsOperations';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Post() {
  const post = useTypedSelector(getCurrentPost);
  return (
    <MainLayout headTitle={post.title}>
      <SinglePost post={post} />
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    const id: string = params.postId as string;
    await dispatch(await handleSinglePostOperator(id));
  },
);
