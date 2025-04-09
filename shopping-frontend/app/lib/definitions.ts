export type User = {
    userId: number;
    name: string;
    email: string;
    password: string;
};

export type Category = {
  categoryId: number;
  name: string;
  isShippeed: boolean;
};

export type CategoryProduct = {
  categoryId: number;
  name: string;
  isShippeed: boolean;
  products: []
}
export type AreaModel = {
  areaId: number;
  name: string;
  hasProducts: boolean;
  isShipped: boolean;
}

export type NewItemModel = {
  name: string;
}

export type EditItemModel = {
  id?: number;
  name: string;
}

export type NewProductModel = {
  name: string;
  categoryId: number;
  areaId: number;
  uomId: number;
  priceUomId: number;
}
export type EditProductModel = {
  productId?: number;
  name: string;
  categoryId?: number;
  areaId?: number;
  uomId: number;
  priceUomId: number;
}

export type ProductModel = {
  productId: number;
  name: string;
  aisleLabel: string;
  sequence: number;
  quantity: number;
  isShipped: boolean;
  shoppingListId?: number;
  uomId?: number;
  uom: string;
  priceUomId?: number;
  priceUom: string;
  displayName?:string;
  allowDecimalQuantity:boolean; 
}