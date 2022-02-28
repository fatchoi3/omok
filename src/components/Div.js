import React,{ useState } from "react";

import styled from 'styled-components';

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as omockCreators } from "../redux/modules/omock";

const Div = ({ x, y, order }) => {
  const dispatch = useDispatch();
  const [stone, setStone] = useState("");

  const Click = () => {
    if (stone) {
      console.log("돌아가");
      console.log(stone);
      return;
    }
    dispatch(omockCreators.order(order));
    console.log("x :", x, "y :", y);
    setStone(order);
    console.log(stone);
  };

  return (
    <DDiv onClick={Click}>
      {stone === "1" ? <WhiteStone></WhiteStone> : <div></div>}
      {stone === "2" ? <BlackStone></BlackStone> : <div></div>}
    </DDiv>
  );
};

const DDiv = styled.div`
    margin: 1px 0 0 1px;
    height: 34px;
    width: 34px;
    border-radius: 17px;
    -webkit-border-radius: 17px;
    display: block;
`;


const WhiteStone = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    background-color: white;
`;
const BlackStone = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    background-color: black;
`;
export default Div;