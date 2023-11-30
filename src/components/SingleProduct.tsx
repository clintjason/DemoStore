import { useQuery, gql } from '@apollo/client';
import Product from './Product';
import { useParams } from 'react-router-dom';

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
  getProduct: ProductType
}

const SingleProduct = () => {
  const { id } = useParams();
  console.log("The product ID IS " + id)
  const productId = parseInt(id as string);
  console.log("The typeof product ID IS ", typeof productId)

  const GET_A_PRODUCT = gql`
  query ($productId: Int!) {
    getProduct (id: $productId) {
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

  //const { loading, error, data } : {loading: boolean, error?: any, data?: Data } = useQuery<Data>(GET_DATA);
  const { loading, error, data } : {loading: boolean, error?: any, data?: Data }= useQuery(GET_A_PRODUCT, {
    variables: { productId },
  });

  console.log("The data in a product: ", data)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Access the data returned by the GraphQL query here and render your component accordingly
  return (
    <div className='product__wrapper'>
      {data?.getProduct ? (
        <Product key={data?.getProduct.id} product={data?.getProduct} />
      ) : (
        <div>No product found.</div>
      )}

    </div>
  );
};

export default SingleProduct;