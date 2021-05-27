export interface IPokemons {
  total: number,
  pokemons: PokemonsRequest[]
}

let PokemonsData = {
  "name_clean": "charizard",
  "abilities": [
    "blaze",
    "solar-power"
  ],
  "stats": {
    "hp": 78,
    "attack": 84,
    "defense": 78,
    "special-attack": 109,
    "special-defense": 85,
    "speed": 100
  },
  "types": [
    "fire",
    "flying"
  ],
  "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  "name": "charizard",
  "base_experience": 240,
  "height": 17,
  "id": 6,
  "is_default": true,
  "order": 7,
  "weight": 905
}

export type PokemonsRequest = typeof PokemonsData