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

  useEffect(() => {validateForm(), [shoppingListId, quantity]});
    const validateForm = () => {
        //let errors = {};
        if(!shoppingListId || shoppingListId === 0){
            errors.shoppingListId = 'Shopping List Is Required';
        } 
        if(!quantity || quantity === 0){
            errors.quantity = 'Quantity Is Required';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

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
      <div className="modal-content">
      <h3>Add Product to Shopping List</h3>
      <hr />
      <button className="rounded btn btn-secondary modal-close" onClick={onClose}>Close</button>
        <h2>{product?.name}</h2>
        <div>
            <form onSubmit={SubmitForm}>
                <div>
                    <div>
                        <div className="flex flex-row">
                            <label htmlFor="name">
                                <span >Product</span>
                            </label>
                            <div>
                                <input 
                                type="text"
                                readOnly
                                id="name"
                                name="name"
                                value={product?.name}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            {errors.shoppingListId && <p>{errors.shoppingListId}</p>}
                            <label htmlFor="shoppingList">
                                <span >Shopping List</span>
                            </label>
                            <div>
                                <select 
                                    id="shoppingList"
                                    name="shoppingList"
                                    onChange={(e) => setShoppingListId(e.target.value)}>
                                    <option>Select...</option>
                                    {shoppingLists.map((item) => 
                                        <option key={item.shoppingListId} value={item.shoppingListId}>
                                            {item.name}
                                        </option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row">
                        {errors.quantity && <p>{errors.quantity}</p>}
                        <label htmlFor="quantity">
                                <span >Quantity</span>
                            </label>
                            <div>
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                onInput={(e) => setQuantity(e.target.value)}
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="rounded btn btn-primary" type="submit">Add</button>
                </form>
        </div>
      </div>
    </div>
  );
};

//export default AddToListModal;
