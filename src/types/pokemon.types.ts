export interface IPokemonType {
    id: string;
    name: string;
}

export interface IAttack {
    id: number;
    name: string;
    damages: number;
    type: IPokemonType
}

export interface IPokemonCard {
    id: number;
    name: string;
    type: IPokemonType;
    imageUrl: string;
    lifePoints: number;
    weakness: IPokemonType;
    pokedexId: number;
    attack: IAttack
    height: number;
    weight: number;
}