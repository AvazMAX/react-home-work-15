import React, { useContext } from "react";
import { Modal } from "../modal/Modal";
import { BusketItem } from "./BusketItem";
import { TotalAmout } from "./TotalAmout";
import styled from "styled-components";
import { cartContext } from "../../store/cart-context";

export const Basket = React.memo(({ onToggle }) => {
  const { items } = useContext(cartContext);

  const totalPrice = items?.reduce(
    (sum, { price, amount }) => sum + price * amount,
    0
  );

  return (
    <Modal>
      <Content>
        {items?.length ? (
          <FixedWidthContainer>
            {items.map((item) => {
              if (item.amount > 0) {
                return (
                  <div key={item._id}>
                    <BusketItem
                      id={item._id}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                    ></BusketItem>
                  </div>
                );
              }
            })}
          </FixedWidthContainer>
        ) : null}
        <TotalAmout totalPrice={totalPrice} onClose={onToggle} />
      </Content>
    </Modal>
  );
});

const FixedWidthContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;
