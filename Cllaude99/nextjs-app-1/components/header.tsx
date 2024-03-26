'use client';

import Link from 'next/link';
import styled from 'styled-components';

export default function Header() {
  return (
    <Nav>
      <Col>
        <Items>
          <Link href={`/`}>
            <Item>홈</Item>
          </Link>
          <Link href={`/list`}>
            <Item>List</Item>
          </Link>
        </Items>
      </Col>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.white.lighter};
  color: ${(props) => props.theme.black.darker};
  height: 50px;
`;
const Col = styled.div``;
const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin: 0px 10px;
`;
