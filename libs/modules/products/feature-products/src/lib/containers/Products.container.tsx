import { useGetProductsQuery } from '@react-nx26-nov/products-data-access';
import ProductsComponent from '../components/Products.component';
import { useGetCurrentUserQuery } from '@react-nx26-nov/http-client';

const ProductsContainer = () => {
const { data: products = [], isLoading, isError } = useGetProductsQuery();
const {data: users = []} = useGetCurrentUserQuery('1');
  if(isLoading) return <div> Loading... </div>
  if(isError) return <div> Error occurred while fetching products. </div>
  return (
    <div>
    <div>{JSON.stringify(users)}</div>
    <ProductsComponent products={products}/>
    </div>
  )
}

export default ProductsContainer
