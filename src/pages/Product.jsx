import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import BreadCrums from "../components/BreadCrums/BreadCrums";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import './CSS/Product.css'
import Descriptions from "../components/Descriptions/Descriptions";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
 
  const product = allProduct.find((e) => e.id === Number(productId));
 
  return (
    <div className="productDisplay-conatiner">
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <Descriptions/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
