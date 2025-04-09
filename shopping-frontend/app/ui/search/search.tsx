'use client';
import { AreaModel, CategoryProduct } from '@/app/lib/definitions';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ categories, areas, placeholder }: { categories : CategoryProduct[], areas : AreaModel[], placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
  
    const handleSearch = useDebouncedCallback(() => {
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
    }, 500);
    
    return (
    <>
      <div className="relative flex flex-row items-center">
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
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
                    />
            </div>
        </div>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
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
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
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
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <button 
        className="cursor-pointer rounded-md bg-white p-4 md:p-6" 
        onClick={() => {handleSearch()}}
        type="submit">Search</button>
    </>
        );
  }