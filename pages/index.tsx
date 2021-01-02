import Head from "next/head";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Blog</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/mountain_26f0-fe0f.png"
        />
      </Head>
      <main>Welcome</main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
