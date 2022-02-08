import React from 'react';
import Product from './Product';
import { popularProducts } from '../data';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
`

const Products = () => {
  return (
      <Container>
          {popularProducts.map((item)=>(
              <Product item={item} key={item.id}/>
          ))}
      </Container>
  );
};

export default Products;
