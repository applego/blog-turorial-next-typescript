import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({ title }: { title: string }) {
  return (
    <>
      <h1>Title:{title}</h1>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          title: "投稿1",
        },
      },
      {
        params: {
          title: "投稿2",
        },
      },
      {
        params: {
          title: "投稿3",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { title } }) => {
  return {
    props: { title },
  };
};
