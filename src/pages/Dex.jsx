import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import MOCK_DATA from "../Mock";
import { FamilyContext } from "../context/FamilyContext";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (addpokemon) => {
    const duplicateCheck = selectedPokemon.some(
      (pokemon) => pokemon.id === addpokemon.id
    );

    if (duplicateCheck) {
      alert("이미 선택한 포켓몬입니다!");
      return;
    }
    if (selectedPokemon.length >= 6) {
      alert("더 이상 추가할 수 없습니다!");
      return;
    }
    setSelectedPokemon([...selectedPokemon, addpokemon]);
  };

  const removePokemon = (removePokemon) => {
    setSelectedPokemon(
      selectedPokemon.filter((pokemon) => pokemon.id !== removePokemon.id)
    );
  };

  return (
    <FamilyContext.Provider
      value={{
        addPokemon,
        selectedPokemon,
        removePokemon,
        pokemons: MOCK_DATA,
      }}
    >
      <Container>
        <DashBox>
          <Dashboard />
        </DashBox>
        <ListBox>
          <PokemonList />
        </ListBox>
      </Container>
    </FamilyContext.Provider>
  );
};

export default Dex;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`;

const DashBox = styled.div`
  border-radius: 10px;
  width: 1500px;

  margin-top: 20px;
`;

const ListBox = styled.div`
  width: 1500px;
  border-radius: 10px;

  background-color: #ebe9e9;
  margin-top: 20px;
`;
