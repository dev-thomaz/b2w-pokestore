import { iPokemon_Product } from "./Pokemon";

export interface iOrder{
    items: iPokemon_Product[];
    amount: number;
}