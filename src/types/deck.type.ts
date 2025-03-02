import type {IUser} from "./user.type.ts";
import type {IPokemonCard} from "./pokemon.types.ts";

export interface IDeck {
    id: number;
    name: string;
    cards: IPokemonCard[];
    owner: IUser;
}

export interface IDeckPayload {
    name: string;
    cards: number[];
}