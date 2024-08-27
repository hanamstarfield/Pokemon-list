import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FamilyContext } from "../context/FamilyContext";

const PokemonCard = ({ pokemon, isSelected }) => {
  const { addPokemon, removePokemon } = useContext(FamilyContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail?id=${pokemon.id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // stopPropagation -> Card의 이벤트를 Button으로 전이되는걸 막아준다
    if (isSelected) {
      removePokemon(pokemon);
    } else {
      addPokemon(pokemon);
    }
  };

  return (
    <Card onClick={handleCardClick}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <span>{pokemon.korean_name}</span>
      <p>{`No.${pokemon.id}`}</p>
      {isSelected ? (
        <SelectButton onClick={handleButtonClick}>삭제</SelectButton>
      ) : (
        <SelectButton onClick={handleButtonClick}>추가</SelectButton>
      )}
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 6px gray;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  span {
    margin: 5px 0;
    font-weight: bold;
    text-align: center;
  }

  p {
    color: gray;
  }
`;

const SelectButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.1s ease, transform 0.2s ease;

  &:hover {
    background-color: #bb0505;
  }
`;
