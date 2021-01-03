import { GetStaticProps } from "next";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <H2>Home</H2>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Container = styled.div`
  width: 100vw;
  max-width: 60rem;
  align-items: center;
`;

const H2 = styled.h2`
  text-align: center;
  text-decoration: underline;
`;
