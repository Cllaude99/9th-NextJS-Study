'use client';

import { useState } from 'react';
import styled from 'styled-components';

const products = [
  { id: 1, name: '상품1', pay: 40 },
  { id: 2, name: '상품2', pay: 40 },
];

export default function List() {
  return (
    <Container>
      <Title>상품목록</Title>
      <ItemList>
        {products.map((item) => (
          <Item key={item.id}>
            {item.name} ${item.pay}
          </Item>
        ))}
      </ItemList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h4`
  margin: 50px 0px;
`;
const ItemList = styled.ul``;
const Item = styled.li`
  width: 200px;
  background-color: white;
  color: black;
  margin: 10px;
  border-radius: 5px;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
