import React from 'react';
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';

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

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({product}) => {
  const { id, name, description, imageUrl, currency, amount, updatedAt } = product;
  
  const result = parseFloat(amount) / 0.8;
  const initialPrice = Number(result.toFixed(2));

  dayjs.extend(relativeTime);
  const displayDate = dayjs().to(dayjs(updatedAt));

  return (
    <Link className="product-card" to={`/product/${id}`}>
      <div className="badge">posted {displayDate}</div>
      <div className="product-tumb">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-details">
        <span className="product-catagory">Generaal, nature</span>
        <h4><a href="">{name}</a></h4>
        <p>{description}</p>
        <div className="product-bottom-details">
          <div className="product-price"><small>{initialPrice}</small>{amount} {currency}</div>
          <div className="product-links">
            <a href="#"><i className="fa fa-heart"></i></a>
            <a href="#"><i className="fa fa-shopping-cart"></i></a>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product;