'use client';
import { AreaModel, CategoryProduct, ProductModel } from '@/app/lib/definitions';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { searchProducts } from '@/app/lib/api-product'
import SearchResults  from '@/app/ui/search/results'
import { useState } from 'react';

export default function Search({ categories, areas, placeholder }: { categories : CategoryProduct[], areas : AreaModel[], placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [products, setProducts] = useState<ProductModel[]>([]); //ProductModel[] = [];
  
    async function handleSearch(){
      const params = new URLSearchParams(searchParams);
      const product = document.getElementById('product') as HTMLInputElement;
      const category = document.getElementById('categoryId') as HTMLSelectElement;
      const area = document.getElementById('areaId') as HTMLSelectElement;
      params.set('page', '1');
      if (product) {
        params.set('product', product.value);
      } else {
        params.delete('product');
      }
      if (category) {
        params.set('categoryId', category.value);
      } else {
        params.delete('categoryId');
      }
      if (area) {
        params.set('areaId', area.value);
      } else {
        params.delete('areaId');
      }
      replace(`${pathname}?${params.toString()}`);
      var query = `?searchText=${product.value}&categoryId=${category.value}&areaId=${area.value}`;
      var prods = await searchProducts(query);
      setProducts(prods);
    };

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleSearch();
          }
    }
    
    return (
        <>
            <div className="relative flex flex-row bg-gray-50 items-center">
                <div className="rounded-md p-4 md:p-6">
                    <div className="mb-4">
                        <label htmlFor="product" className="mb-2 block text-sm font-medium">Product</label>
                    </div>
                    <div className="relative">
                        <input 
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            placeholder={placeholder}
                            defaultValue={searchParams.get('product')?.toString()}
                            type="text" 
                            id="product" 
                            name="product"
                            onKeyDown={handleKeyDown}
                            />
                    </div>
                </div>
                <div className="rounded-md p-4 md:p-6">
                    <div className="mb-4">
                        <label htmlFor="category" className="mb-2 block text-sm font-medium">Category</label>
                    </div>
                    <div className="relative">
                        <select
                            id="categoryId"
                            name="categoryId"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            aria-describedby="category-error">
                                <option value="" disabled>
                                    Select a category
                                </option>
                                {categories.map((category) => (
                                    <option key={category.categoryId} value={category.categoryId}>
                                    {category.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className="rounded-md p-4 md:p-6">
                    <div className="mb-4">
                        <label htmlFor="area" className="mb-2 block text-sm font-medium">Storage Area</label>
                    </div>
                    <div className="relative">
                        <select
                            id="areaId"
                            name="areaId"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
                            aria-describedby="area-error">
                                <option value="" disabled>
                                    Select an area
                                </option>
                                {areas.map((area) => (
                                    <option key={area.areaId} value={area.areaId}>
                                    {area.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-row bg-gray-50 p-2 items-center">
                <button 
                    className="cursor-pointer rounded-md p-4 md:p-6 btn btn-primary" 
                    onClick={() => {handleSearch()}}
                    type="button">Search
                </button>
            </div>
        <SearchResults products={products} />
        </>
    );
  }