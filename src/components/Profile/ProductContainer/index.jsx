import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listProducts } from "../../../actions/productActions";
import {
  ProductSection,
  ProductContainer,
  ProductCardList,
  ProductTitle,
} from "./index.style";
import ProductCard from "../ProductCard";

function Product() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <ProductSection>
      <ProductContainer>
        <ProductTitle>판매 중인 상품</ProductTitle>
        <ProductCardList>
          {products &&
            products.map(product => {
              return (
                <ProductCard
                  key={product.id}
                  productText={product.itemName}
                  productPrice={product.price}
                  img={product.itemImage}
                  // onClick={() => isProductDialog(product.id)}
                />
              );
            })}
        </ProductCardList>
      </ProductContainer>
    </ProductSection>
  );
}

export default Product;
