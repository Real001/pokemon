import agent from '../agent';
import { Ability } from '../types/ability';

const getAbility = (name: string) => agent.GET<Ability>(`ability/${name}`);

export default getAbility;
