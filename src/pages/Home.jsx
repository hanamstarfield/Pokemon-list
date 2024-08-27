import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mainlogo from "../assets/pokemon-logo.png";

const Home = () => {
  // useNavigate 다른 페이지로 이동할 때 사용하자. Link도 사용할 수 있다.
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Logo src={mainlogo} />
      <StartButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬도감 시작하기
      </StartButton>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  text-align: center;
`;

const Logo = styled.img`
  width: 720px;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease, transform 0.2s ease;

  &:hover {
    background-color: #bb0505;
  }
`;
