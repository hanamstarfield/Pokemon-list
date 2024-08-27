import React, { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { FamilyContext } from "../context/FamilyContext";

const Dashboard = () => {
  const { selectedPokemon } = useContext(FamilyContext);

  return (
    <DashBox>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <PokemonList>
          {selectedPokemon.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                isSelected={true}
              />
            );
          })}
        </PokemonList>
      )}
    </DashBox>
  );
};

export default Dashboard;

const DashBox = styled.div`
  width: 100%;
  max-width: 1450px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    color: red;
  }

  p {
    text-align: center;
  }
`;

const PokemonList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 83px;
`;
