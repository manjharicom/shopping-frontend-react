'use client'
import { AreaModel, CategoryProduct } from '@/app/lib/definitions';
import { search } from '@/app/lib/actions'

export default function Form({ categories, areas }: {categories : CategoryProduct[], areas : AreaModel[] }){
    return (
        <form className="mx-auto bg-white"action={search}>
            <div className="flex flex-row items-center">
                <div className="rounded-md bg-gray-50 p-4 md:p-6">
                    <div className="mb-4">
                        <label htmlFor="product" className="mb-2 block text-sm font-medium">Product</label>
                    </div>
                    <div className="relative">
                        <input 
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            type="text" id="product" name="product"/>
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
            </div>
            <button className="cursor-pointer rounded-md bg-white p-4 md:p-6" type="submit">Submit</button>
        </form>
    );
}
