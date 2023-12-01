import { useQuery, gql } from '@apollo/client';
import Product from './Product';
import React, { useEffect } from 'react';

interface ProductType {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  currency: string;
  amount: string;
  createdAt: string;
  updatedAt: string;
}

interface getAllProductsProps {
  totalCount: number;
  products: ProductType[];

}
interface Data {
  getAllProducts: getAllProductsProps;
}

interface Props {
  page: number;
  limit: number;
}

const ProductList: React.FC<Props> = ({page, limit}) => {


const GET_ALL_PRODUCTS = gql`
  query ($page: Int, $limit: Int) {
    getAllProducts (page: $page, limit: $limit) {
      totalCount
      products {
        id
        name
        description
        imageUrl
        amount
        currency
        createdAt
        updatedAt
      }
    }
  }
`;
  //const { loading, error, data } : {loading: boolean, error?: any, data?: Data } = useQuery<Data>(GET_DATA);
  const { loading, error, data, refetch } : {loading: boolean, error?: any, data?: Data, refetch: any} = useQuery(GET_ALL_PRODUCTS, {
    variables: { page, limit },
  });

  const products = data?.getAllProducts?.products;

  useEffect(() => {
    console.log("USE EFFECT PRODUCT LIST")
    console.log("new page: " + page + " limit: " + limit)
    refetch();
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if(products?.length == 0) {
    return <div>No Product List.</div>
  }
  // Access the data returned by the GraphQL query here and render your component accordingly
  return (
    <div className='product__wrapper'>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;