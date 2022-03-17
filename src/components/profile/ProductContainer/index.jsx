import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listProducts } from "../../../actions/productActions";
import {
  getWhichUserStatus,
  getWhichUserAccountName,
} from "../../../util/getWhichUser";
import {
  Modal,
  ModalListBtn,
  ModalAlertBtn,
} from "../../../components/common/Modal";
import { Alert, AlertBtn } from "../../../components/common/Alert";
import { Link } from "react-router-dom";
import {
  ProductSection,
  ProductWrapper,
  ProductCardList,
  ProductTitle,
} from "./index.style";
import ProductCard from "../ProductCard";

function ProductContainer() {
  const dispatch = useDispatch();

  const accountnameFromParams = getWhichUserAccountName();

  const { products } = useSelector(state => state.productList);

  const [productDialog, setProductDialog] = useState(false);

  const [productAlert, setProductAlert] = useState(false);

  const [productId, setProductId] = useState("");

  const isProductDialog = productId => {
    setProductDialog(!productDialog);
    setProductId(productId);
  };

  const isProductAlert = productId => {
    setProductAlert(!productAlert);
    if (typeof productId === "string") {
      dispatch(deleteProduct(productId));
    }
  };

  useEffect(() => {
    dispatch(listProducts(accountnameFromParams));
  }, [dispatch, accountnameFromParams]);

  return (
    <>
      <ProductSection>
        <ProductWrapper>
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
                    onClick={() => isProductDialog(product.id)}
                  />
                );
              })}
          </ProductCardList>
        </ProductWrapper>
      </ProductSection>
      {getWhichUserStatus() === "my" ? (
        <>
          <Modal visible={productDialog} close={() => setProductDialog(false)}>
            <ModalAlertBtn isAlert={isProductAlert}>삭제</ModalAlertBtn>
            <ModalListBtn isDialog={isProductDialog}>
              <Link to={`/product/${productId}/update`}>수정 </Link>
            </ModalListBtn>
            <ModalListBtn isDialog={isProductDialog}>
              웹사이트에서 상품 보기
            </ModalListBtn>
          </Modal>
          <Alert visible={productAlert} messageText="상품을 삭제할까요?">
            <AlertBtn isAlert={isProductAlert}>취소</AlertBtn>
            <AlertBtn isAlert={() => isProductAlert(productId && productId)}>
              삭제
            </AlertBtn>
          </Alert>
        </>
      ) : (
        <>
          <Modal visible={productDialog} close={() => setProductDialog(false)}>
            <ModalListBtn isDialog={isProductDialog}>
              웹사이트에서 상품 보기
            </ModalListBtn>
          </Modal>
        </>
      )}
    </>
  );
}

export default ProductContainer;
