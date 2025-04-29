import React, { useState, useEffect } from 'react';
import "@/app/ui/styles/modal.css";
import { ProductModel } from '@/app/lib/definitions';
import { getShoppingLists } from '@/app/lib/api-shopping-lists';
import { addProductToList } from '@/app/lib/api-product';

export default function AddToListModal ({ isOpen, onClose, product, onReturn } : {isOpen: boolean, product: ProductModel})  {
  if (!isOpen) return null;

  const [shoppingLists, setShoppingLists] = useState([]);
  const handleReturn = (shoppingListId:number) => {
    onReturn(shoppingListId);
    onClose(); // Close after returning, optional
  }; 

  useEffect(() => {
    const fetchData  = async () => {
        try {
            const lists = await getShoppingLists();
            setShoppingLists(lists);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };
    fetchData();
  }, []);

  const [shoppingListId, setShoppingListId] = useState();
  const [quantity, setQuantity] = useState();
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  //useEffect(() => {validateForm(), [shoppingListId, quantity]});
    // const validateForm = () => {
    //     //let errors = {};
    //     if(!shoppingListId || shoppingListId === 0){
    //         errors.shoppingListId = 'Shopping List Is Required';
    //     } 
    //     if(!quantity || quantity === 0){
    //         errors.quantity = 'Quantity Is Required';
    //     }

    //     setErrors(errors);
    //     setIsFormValid(Object.keys(errors).length === 0);
    // };

  async function SubmitForm(event){
    console.log(isFormValid);
    event.preventDefault();
    if(isFormValid){
        //const shoppingListId = event.target.elements.shoppingList.value;
        //const quantity = event.target.elements.quantity.value;
    
        await addProductToList(shoppingListId, product.productId, quantity);
    
        handleReturn(shoppingListId);
    }
  }

  return (
    <div className="modal-overlay">
      <div className="relative flex flex-start justify-between p-4 border-b border-b-gray-300 max-w-3xl">
        <h3 className="text-2xl font-semibold">Add Product to Shopping List</h3>
        <button className="border-0 bg-white cursor-pointer" onClick={onClose}><span className="text-sm font-bold text-gray-500">x</span></button>
      </div>
      <div className="p-4">
          <h3 className="text-2xl font-semibold">{product?.name}</h3>
          <form onSubmit={SubmitForm}>
            <div className="relative flex flex-col min-w-0 mb-6">
              <div className="min-h-px p-5 basis-auto grow shrink">
                <div className="mb-4 flex flex-wrap -mr-3.5 -ml-3.5">
                  <label htmlFor="name" className="relative flex flex-grow-0 flex-shrink-0 basis-[33%] max-w-1/3 pr-3.5 pl-3.5 pt-1.5 pb-1.5 text-sm">
                      <span >Product</span>
                  </label>
                  <div className="relative flex flex-grow-0 flex-shrink-0 basis-[33%] max-w-1/3 pr-3.5 pl-3.5">
                    <input 
                        type="text"
                        readOnly
                        id="name"
                        name="name"
                        value={product?.name}
                        className="p-3 border border-gray-300 text-sm font-normal rounded-sm bg-gray-200 text-gray-500"
                      />
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap -mr-3.5 -ml-3.5">
                  <label htmlFor="shoppingList" className="relative flex flex-grow-0 flex-shrink-0 basis-[33%] max-w-1/3 pr-3.5 pl-3.5 pt-1.5 pb-1.5 text-sm">
                    <span >Shopping List</span>
                  </label>
                  <div className="relative flex flex-grow-0 flex-shrink-0 basis-[33%] max-w-1/3 pr-3.5 pl-3.5">
                    <select 
                        id="shoppingList"
                        name="shoppingList"
                        onChange={(e) => setShoppingListId(e.target.value)}
                        className="p-3 border border-gray-300 text-sm font-normal rounded-sm"
                        >
                        <option>Select...</option>
                          {shoppingLists.map((item) => 
                        <option key={item.shoppingListId} value={item.shoppingListId}>
                                    {item.name}
                        </option>
                        )}
                      </select>
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap -mr-3.5 -ml-3.5">
                  <label htmlFor="quantity" className="relative flex flex-grow-0 flex-shrink-0 basis-[33%] max-w-1/3 pr-3.5 pl-3.5 pt-1.5 pb-1.5 text-sm">
                    <span >Quantity</span>
                  </label>
                  <div className="relative flex flex-grow-0 flex-shrink-0 basis-[33%] max-w-1/3 pr-3.5 pl-3.5">
                    <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        onInput={(e) => setQuantity(e.target.value)}
                        className="p-3 border border-gray-300 text-sm font-normal rounded-sm"
                    />
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap -mr-3.5 -ml-3.5">
                  <label htmlFor="purchased" className="relative flex flex-grow-0 flex-shrink-0 basis-[33%] max-w-1/3 pr-3.5 pl-3.5 pt-1.5 pb-1.5 text-sm">
                  <span>Purchased</span></label>
                  <div className="relative flex flex-grow-0 flex-shrink-0 basis-[33%] max-w-1/3 pr-3.5 pl-3.5">
                    <input 
                      id="purchased" 
                      name="purchased" 
                      type="checkbox" 
                      className="p-3 border border-gray-300 text-sm font-normal rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mr-3.5 -ml-3.5">
              <button className="text-xs pt-1 pr-2.5 pb-2 pl-2.5 ml-4 min-w-20 inline-block font-normal text-center align-middle border rounded-sm text-white bg-blue-950 border-blue-950" type="submit">Add</button>
            </div>
            <div>
              <button className="text-xs pt-1 pr-2.5 pb-2 pl-2.5 ml-4 min-w-20 inline-block font-normal text-center align-middle border rounded-sm text-white bg-green-950 border-green-950" type="button" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

//export default AddToListModal;
