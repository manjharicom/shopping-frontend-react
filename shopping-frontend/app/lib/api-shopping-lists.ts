"use server"
import { ShoppingListModel } from "./definitions";

export async function getShoppingLists(query?: string) {
    const baseShoppingListUrl: string = `${process.env.REACT_APP_API_ROOT_URL}ShoppingList/`;
    var url: string = `${baseShoppingListUrl}`;
    if (query !== undefined){
      url += query;
    }
    const res = await fetch(url!, {
        headers:{
            "Content-Type": "application/json"
        }
    });
    return res.json() as Promise<ShoppingListModel[]>;
}
