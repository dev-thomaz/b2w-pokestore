export interface iType{
    name: string;
}

export interface iTypes{
    type: iType[]
}

export interface iStat{
    name:string;
}

export interface iStats{
    base_stat:number;
    stat:iStat;
}
export interface iMove{
    name:string;
    url:string;
    type:string;
}
export interface iMoves{
 move:iMove
}

export interface iAbility{
name:string;
url:string;
}

export interface iPokemon{
    abilities: iAbility[];
    name:string;
    base_experience:number;
    height: number;
    id: number;
    number: string;
    moves:iMoves[];
    stats:iStats[]
    weight:number;
    url: string;
    imgUrl: string;
    price: number;
    pokemon: iPokemon;
    types:iTypes[];
}

export interface iPokemon_Product{
    pokemon: iPokemon;
    quantity: number;
}
export interface iPokemon_Favorite{
    pokemon: iPokemon;
}