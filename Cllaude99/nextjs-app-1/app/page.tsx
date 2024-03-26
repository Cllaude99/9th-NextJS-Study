'use client';

import styled from 'styled-components';

export default function Home() {
  return <Container>hello</Container>;
}

const Container = styled.div`
  color: ${(props) => props.theme.black.darker};
`;
