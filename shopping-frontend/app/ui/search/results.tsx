import { ProductModel } from "@/app/lib/definitions";

export default function SearchResults({products} : {products : ProductModel[]}) {
  console.log(products);
  return (
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
                    {products.map((product) => (  
                      <tr key={product.productId}>
                        <td>{product.name}</td>
                        <td>
                          <div>
                            {product.shoppingListId ? <button>Remove</button> : null}
                            {!product.shoppingListId ? <button>Add to List</button> : null}
                            <button>Edit</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
              </div>
        </div>
    );
}