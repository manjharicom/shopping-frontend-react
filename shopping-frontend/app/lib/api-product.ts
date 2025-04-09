"use server"

import { NewProductModel, EditProductModel, ProductModel } from "./definitions";

const baseProductUrl: string = `${process.env.REACT_APP_API_ROOT_URL}product/`;

export async function searchProducts(query?: string) {
    var url: string = `${baseProductUrl}search/`;
    if (query !== undefined){
      url += query;
    }
    //console.log(url);
    const res = await fetch(url!);
    return res.json() as Promise<ProductModel[]>;
}

export async function getShoppingListProducts(query?: string) {
    var url: string = `${baseProductUrl}ShoppingList/`;
    if (query !== undefined){
      url += query;
    }
    const res = await fetch(url!);
    return res.json();
}

export async function addProduct(product: NewProductModel){
    const url = `${baseProductUrl}Add`;
    
    const res =  await fetch(url!, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();
}

export async function addProductToList(shoppingListId:number, productId: number, quantity: number, purchased?: boolean){
    let p = purchased == undefined || purchased == null ? 'false' : purchased;
    const url = `${baseProductUrl}Add/${shoppingListId}/${productId}/${quantity}/${p}`;
    
    const res =  await fetch(url!, {
        method: 'POST',
        body: null,
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();
}

 export async function removeProductFromList(shoppingListId:number, productId: number){
    const url = `${baseProductUrl}Delete/${shoppingListId}/${productId}`;
    
    const res =  await fetch(url!, {
        method: 'DELETE',
        body: null,
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();
}

 export async function updateProduct(product: EditProductModel){
    const url = `${baseProductUrl}Update`;
    
    const res =  await fetch(url!, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();
}

 export async function updateProductQuantity(productId: number, quantity: number, shoppingListId?: number){
    const url = `${baseProductUrl}Update/${shoppingListId}/${productId}/${quantity}`;
    
    const res =  await fetch(url!, {
        method: 'PUT',
        body: null,
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();
}

export async function getProducts(orderBy: number, query?: string){
    let url = `${baseProductUrl}GetProducts`;
    if (query !== undefined && query != ''){
        url += query + '&orderBy='+orderBy;
      }
      else{
        url += '?orderBy='+orderBy;
      }
      const res =  await fetch(url!);
      return res.json();
} 

export async function getProduct(productId: number){
    var url = `${baseProductUrl}GetProduct?productId=${productId}`;
    const res =  await fetch(url!);
    return res.json();
}
