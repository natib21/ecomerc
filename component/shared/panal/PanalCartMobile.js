import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeItem } from "../../../store/cart/action";
import Link from "next/link";

const PanelCartMobile = () => {
  const dispatch = useDispatch();
  const { amount, cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleRemoveCartItem = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <div className="ps-panel--wrapper">
      <div className="ps-panel__header">
        <h3>Shopping Cart</h3>
      </div>
      <div className="ps-panel__content">
        <div className="ps-cart--mobile">
          <div className="ps-cart__content">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((product) => (
                <div className="ps-product--cart-mobile" key={product.id}>
                  <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                      <a>
                        <img src={product.thumbnail} alt="martfury" />
                      </a>
                    </Link>
                  </div>
                  <div className="ps-product__content">
                    <a
                      className="ps-product__remove"
                      onClick={() => handleRemoveCartItem(product)}
                    >
                      <i className="icon-cross"></i>
                    </a>
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                      <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <p>
                      <strong>Sold by:</strong> {product.vendor}
                    </p>
                    <small>
                      {product.quantity} x ${product.price}
                    </small>
                  </div>
                </div>
              ))
            ) : (
              <div className="ps-cart__items">
                <span>No products in cart</span>
              </div>
            )}
          </div>
          <div className="ps-cart__footer">
            <h3>
              Sub Total:<strong>${amount}</strong>
            </h3>
            <figure>
              <Link href="/account/shopping-cart">
                <a className="ps-btn">View Cart</a>
              </Link>
              <Link href="/account/shopping-cart">
                <a className="ps-btn">Checkout</a>
              </Link>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelCartMobile;
