import { BaseItem } from './entitiesBase';

export interface PokemonList {
  results: BaseItem[];
  next: string | null;
  previous: string | null;
  count: number;
}

interface Abilitie {
  ability: BaseItem;
  is_hidden: boolean;
  slot: null;
}

interface GameIndice {
  game_index: number;
  version: BaseItem;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: BaseItem;
  version_group: BaseItem;
}

interface Move {
  move: BaseItem;
  version_group_details: VersionGroupDetail;
}

interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: BaseItem;
}

interface Type {
  slot: number;
  type: BaseItem;
}

export interface PokemonInfo {
  id: number;
  abilities: Abilitie[];
  base_experience: number;
  forms: BaseItem[];
  game_indices: GameIndice[];
  height: number;
  is_default: boolean;
  location_area_encounters: boolean;
  moves: Move[];
  name: string;
  order: number;
  species: BaseItem;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;

}
