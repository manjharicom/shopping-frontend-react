import { NewItemModel, EditItemModel } from "./definitions";

const baseAreaUrl: string = `${process.env.REACT_APP_API_ROOT_URL}area/`;

export async function getAreas(includeProds?: boolean, query?: string){
    var url = baseAreaUrl;

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

export async function getArea(areaId: number){
    var url = `${baseAreaUrl}${areaId}`;
    const res =  await fetch(url!);
    return res.json();
}

export async function addArea(area: NewItemModel){
    const url = baseAreaUrl;
    const res =  await fetch(url!, {
        method: 'POST',
        body: JSON.stringify(area),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();
}

export async function updateArea(area: EditItemModel){
    const url = baseAreaUrl;
    const res =  await fetch(url!, {
        method: 'PUT',
        body: JSON.stringify(area),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return res.json();
}
