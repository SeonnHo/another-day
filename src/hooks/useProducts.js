import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProductList, addNewProduct } from '../api/firebase';

export default function useProducts(userId) {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ['product list'],
    queryFn: () => getProductList(),
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation({
    mutationFn: ({ productInfo, url }) => addNewProduct(productInfo, url),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  });

  return { productsQuery, addProduct };
}
