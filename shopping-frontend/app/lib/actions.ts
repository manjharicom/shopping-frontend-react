'use server'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { searchProducts } from '@/app/lib/api-product'

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

export async function search(formData: FormData){
    const formFields = {
      product: formData.get('product') ?? '',
      category: formData.get('categoryId') ?? '',
      area: formData.get('areaId') ?? '',
  };
  var query = `?searchText=${formFields.product}&categoryId=${formFields.category}&areaId=${formFields.area}`;
  const results = await searchProducts(query);
  console.log(results);
  return results;
  }