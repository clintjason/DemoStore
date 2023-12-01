import SingleProduct from "../components/SingleProduct";
import { useMutation, gql } from '@apollo/client';
import { useState, useEffect } from "react";
import Product from "../components/Product";
import Message from "../components/Message";
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

const ProductLayout = () => {
  const [loader, setLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [createStatus, setCreateStatus] = useState(0);
  const [deleteStatus, setDeleteStatus] = useState(0);
  const [errors, setErrors] = useState<any>();
  const [deleteError, setDeleteError] = useState<any>();
  const [product, setProduct] = useState<ProductType>();
  const [deletedProduct, setDeletedProduct] = useState<ProductType>();
  const { id } = useParams();
  const productId = parseInt(id as string);


  const DELETE_PRODUCT = gql`
    mutation ($id: Int!) {
      removeProduct(id: $id) {
        id
        name
      }
    }
  `;

  const ADD_PRODUCTS = gql`
    mutation ($count: Int!) {
      createMultipleProducts (count: $count) {
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

  const  [createMultipleProducts, {loading, error} ] = useMutation(ADD_PRODUCTS);

  const [deleteProduct, { loading: deletLoader, error: deletError }] = useMutation(DELETE_PRODUCT);

  const handleCreateProduct = async (event: any) => {
    console.log('Create Product ', event);
    setCreateStatus(status => status + 1);

    try {
      const { data } = await createMultipleProducts({
        variables: {
          count: 1,
        },
      });
      // Handle the response data
      console.log("The data for createProduct is ", data.createMultipleProducts[0]);
      setProduct(data.createMultipleProducts[0]);
      setLoader(loading);
      setErrors(error);
    } catch (error) {
      // Handle the response data
      console.error(error);
      throw error;
    }
  }

  const handleDeleteProduct = async () => {
    console.log('Delete Product ', productId);

    try {
      setDeleteStatus(deleteStatus + 1)
      const { data } = await deleteProduct({
        variables: {
          id: productId,
        },
      });
      console.log('Product deleted data: ', data);
      // Handle the response data
      console.log("Deleted product ID:", data.removeProduct.id);
      setDeletedProduct(data.removeProduct)
      setDeleteError(deletError)
      setDeleteLoader(deletLoader)
    } catch (error) {
      // Handle the error
      console.error(error)
      throw error;
    }
  }

  useEffect(() => {
    setLoader(loading);
    setErrors(error);
  }, [createStatus]);

  useEffect(() => {
    setDeleteLoader(deletLoader);
    setDeleteError(deletError);
  }, [deleteStatus]);

  return (
    <section id="cta" className="main special">
      <header className="major">
        <h2>Product Details</h2>
        <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
        posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
      </header>
      <SingleProduct />
      <footer className="major">
        {deletedProduct && <Message content="New post deleted successfully." type="warning" />}
        <ul className="actions special">
          <li><a onClick={handleCreateProduct} className="button add" style={{ color: 'white !important'}}>Create</a></li>
          <li><a href="#" className="button edit" style={{ color: 'white !important'}}>Edit</a></li>
          {deleteLoader ? (<div className="sp">loading...</div>) :
            deleteError ? (<div className="sp make_red">Error: {deleteError?.message}</div>) : (
            <li><a onClick={handleDeleteProduct} className="button danger" style={{ color: 'white !important'}}>Delete</a></li>
          )}
        </ul>
      </footer>
      {loader && <div className="sp">Loading...</div>}
      {errors && <div className="sp make_red">Error: {errors?.message}</div>}
      {product && (
        <div className="product__wrap">
          <Message content="New post created successfully." type="info" />
          <Product key={product.id} product={product} />
        </div>
      )}
    </section>
  )
}

export default ProductLayout;