import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { FamilyContext } from "../context/FamilyContext";

const PokemonList = () => {
  const { pokemons } = useContext(FamilyContext);

  return (
    <ListContainer>
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={false} />
        );
      })}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
