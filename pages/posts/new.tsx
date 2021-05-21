import CreateNewPost from '../../components/CreateNewPost/CreateNewPost';
import MainLayout from '../../layouts';

export default function New() {
  return (
    <MainLayout headTitle="Create Post">
      <CreateNewPost />
    </MainLayout>
  );
}
