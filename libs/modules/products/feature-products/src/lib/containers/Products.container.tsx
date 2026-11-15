import { useGetProductsQuery } from '@react-nx26-nov/products-data-access';
import ProductsComponent from '../components/Products.component';

const ProductsContainer = () => {
const { data: products = [], isLoading, isError } = useGetProductsQuery();
  if(isLoading) return <div> Loading... </div>
  if(isError) return <div> Error occurred while fetching products. </div>
  return (
    <ProductsComponent products={products}/>
  )
}

export default ProductsContainer
