import type { Product } from '@react-nx26-nov/products-data-access';

const ProductsComponent = ({products}: {products: Product[]}) => {
   return( <div>
         {
            products.map(prod => <div>{prod.id}</div>)
         }
    </div>)
}

export default ProductsComponent