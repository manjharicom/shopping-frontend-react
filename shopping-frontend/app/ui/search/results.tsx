import { removeProductFromList } from "@/app/lib/api-product";
import { ProductModel } from "@/app/lib/definitions";
import AddToListModal from '@/app/ui/modals/addToListModal';
import React, { useState } from 'react';

export default function SearchResults({products} : {products : ProductModel[]}) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  
  function handleAdd(prod : ProductModel){
    setProduct(prod);
    setIsOpen(true);
  }

  async function handleRemove(prod : ProductModel){
    await removeProductFromList(prod.shoppingListId, prod.productId);
    prod.shoppingListId = undefined;
    setProduct({});
  }

  return (
    <>
        <div className="inline-block min-w-full align-middle">
              <div
                  className="mb-2 w-full rounded-md bg-white p-4">
                  <table>
                    <thead>
                      <tr>
                      <th>
                        Product Name
                      </th>
                      <th>
                        Options
                      </th>
                      </tr>
                    </thead>
                    <tbody>
                    {products.map((prod) => (  
                      <tr key={prod.productId}>
                        <td>{prod.name}</td>
                        <td>
                          <div className="relative flex flex-row p-2 items-center">
                            {prod.shoppingListId ? <button onClick={() => handleRemove(prod)} className="cursor-pointer rounded-md p-2 md:p-4 btn btn-secondary">Remove</button> : null}
                            {!prod.shoppingListId ? <button onClick={() => handleAdd(prod)} className="cursor-pointer rounded-md p-2 md:p-4 btn btn-primary">Add to List</button> : null}
                            <div className="relative flex flex-row p-2 items-center">
                              <button className="cursor-pointer rounded-md p-2 md:p-4 btn btn-secondary">Edit</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
              </div>
        </div>
          <AddToListModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={product} onReturn={(id) => product.shoppingListId = id} />
        </>
    );
}