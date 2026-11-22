import { useGetProductsQuery } from '@react-nx26-nov/products-data-access';
import ProductsComponent from '../components/Products.component';
import { useGetCurrentUserQuery } from '@react-nx26-nov/http-client';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsAuthenticated } from '../../../../../auth/data-access/src';

const ProductsContainer = () => {
const { data: products = [], isLoading, isError } = useGetProductsQuery();
const {data: users = []} = useGetCurrentUserQuery('1');
const user = useSelector(selectCurrentUser)
const isAuthenticated = useSelector(selectIsAuthenticated)
 
  if(isLoading) return <div> Loading... </div>
  if(isError) return <div> Error occurred while fetching products. </div>
  return (
    <div>
      <p>currentUser: {user?.email}</p>
      <p>isAuthenticated: {isAuthenticated}</p>
    <div>{JSON.stringify(users)}</div>
    <ProductsComponent products={products}/>
    </div>
  )
}

export default ProductsContainer
