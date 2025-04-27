import { getCategories } from '@/app/lib/api-categories';
import { getAreas } from '@/app/lib/api-areas';
import Search from '@/app/ui/search/search'

export default async function Page(){
    const categories = await getCategories();
    const areas = await getAreas();
     return (
      <Search categories={categories} areas={areas} placeholder="Search products..." />
    );
}