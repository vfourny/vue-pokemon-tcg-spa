export interface IPokemonType {
    id: string;
    name: string;
}

export interface IAttack {
    id: string;
    name: string;
    damage: number;
    type: IPokemonType
}

export interface IPokemonCard {
    id: string;
    name: string;
    type: IPokemonType;
    imageUrl: string;
    lifePoints: number;
    weakness: IPokemonType;
    pokedexId: number;
    attack: IAttack
}