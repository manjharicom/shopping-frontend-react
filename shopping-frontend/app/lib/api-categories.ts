"use server"
import { EditItemModel, NewItemModel } from '@/app/lib/definitions';
const baseCategoryUrl: string = `${process.env.REACT_APP_API_ROOT_URL}category/`;
export async function getCategories(includeProds?: boolean, query?: string){
    var url = baseCategoryUrl;

    if (query !== undefined){
        url += query;
    }

    if(includeProds !== undefined){
        if (query !== undefined){
          url += '&includeProducts='+includeProds;
        }
        else{
          url += '?includeProducts='+includeProds;
        }
      }
    const res = await fetch(url!);
    return res.json();
}


export async function getCategory(categoryId: number){
    var url = `${baseCategoryUrl}c${categoryId}`;
    const res = await fetch(url!);
    return res.json();
}

 export async function  addCategory(category: NewItemModel){
    var url = `${process.env.API_ROOT_URL}category/`;
    const res =  await fetch(url!, {
        method: 'POST',
        body: JSON.stringify(category),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();
  }

  export async function updateCategory(category: EditItemModel){
    var url = `${process.env.API_ROOT_URL}category/`;
    const res =  await fetch(url!, {
        method: 'PUT',
        body: JSON.stringify(category),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();

}
