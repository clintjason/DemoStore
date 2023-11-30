import { useQuery, gql } from '@apollo/client';
import Product from './Product';

const GET_ALL_PRODUCTS = gql`
  query {
    getAllProducts {
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
`;

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

interface Data {
  getAllProducts: ProductType[]
}

const ProductList = () => {
  //const { loading, error, data } : {loading: boolean, error?: any, data?: Data } = useQuery<Data>(GET_DATA);
  const { loading, error, data } : {loading: boolean, error?: any, data?: Data }= useQuery(GET_ALL_PRODUCTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Access the data returned by the GraphQL query here and render your component accordingly
  return (
    <div className='product__wrapper'>
      {data?.getAllProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;