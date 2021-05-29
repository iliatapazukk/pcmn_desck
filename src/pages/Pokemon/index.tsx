import React from 'react'

export interface IPokemonProps {
  id: number | string
}

const Pokemon: React.FC<IPokemonProps> = ({id}) => {
  return (
    <div>
      Poke ID: {id}
    </div>
  );
};

export default Pokemon;