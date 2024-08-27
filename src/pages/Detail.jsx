import React from "react";
import MOCK_DATA from "../Mock";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const pokemons = MOCK_DATA;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");

  const targetPokemon = pokemons.find((pokemon) => pokemon.id === Number(id));

  if (!targetPokemon) {
    return <div>"포켓몬을 찾을 수 없습니다!"</div>;
  }

  return (
    <DetailContainer>
      <PokemonImg src={targetPokemon.img_url} alt={targetPokemon.korean_name} />
      <PokemonName>{targetPokemon.korean_name}</PokemonName>
      <p>{`타입: ${targetPokemon.types.join(", ")}`}</p>
      <p>{targetPokemon.description}</p>
      <BackButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </BackButton>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const PokemonName = styled.h1`
  font-size: 1.5em;
  color: red;
`;

const PokemonImg = styled.img`
  width: 200px;
`;

const BackButton = styled.button`
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
