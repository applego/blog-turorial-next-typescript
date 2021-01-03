import { GetStaticProps } from "next";

export default function Home() {
  return (
    <div>
      <main>Welcome</main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
