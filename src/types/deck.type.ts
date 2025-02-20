import type {IUser} from "./user.type.ts";
import type {IPokemonCard} from "./pokemon.types.ts";

export interface IDeck {
    id: string;
    name: string;
    cards: IPokemonCard[];
    owner: IUser;
}