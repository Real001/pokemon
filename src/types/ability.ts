import { BaseItem } from './entitiesBase';

interface Names {
  name: string;
  language: BaseItem;
}

interface EffectEntrie {
  effect: string;
  shot__effect?: string;
  language: BaseItem;
}

interface EffectChange {
  version_group: BaseItem;
  effect_entries: EffectEntrie[];
}

interface FlavorTextEntrie {
  flavor_text: string;
  language: BaseItem;
  version_group: BaseItem;
}

interface ShotPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: BaseItem;
}

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: BaseItem;
  names: Names[];
  effect_entries: EffectEntrie[];
  effect_changes: EffectChange[];
  flavor_text_entries: FlavorTextEntrie[];
  pokemon: ShotPokemon[];
}
