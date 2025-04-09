import { getCategories } from '@/app/lib/api-categories';
import { getAreas } from '@/app/lib/api-areas';
//import Form from '@/app/ui/search/search-form'
import Search from '@/app/ui/search/search'
import SearchResultsTable  from '@/app/ui/search/results'

export default async function Page(props: {
    searchParams?: Promise<{
      page?: string;
      product?: string;
      categoryId?:string;
      areaId?:string;
    }>;
  }){
    const categories = await getCategories();
    const areas = await getAreas();
    const searchParams = await props.searchParams;
    const currentPage = Number(searchParams?.page) || 1;
    const product = searchParams?.product || '';
    const categoryId = searchParams?.categoryId || '';
    const areaId = searchParams?.areaId || '';
    console.log(categoryId);
     return (
        <>
        <div className="flex flex-row items-center">
            <Search categories={categories} areas={areas} placeholder="Search products..." />
        </div>
        <SearchResultsTable product={product} categoryId={categoryId} areaId={areaId} currentPage={currentPage}/>
        </>
    );
}