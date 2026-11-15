import { useGetProductByIdQuery } from "@react-nx26-nov/products-data-access";
import { Product } from "@react-nx26-nov/shared-types"
import {useParams, useNavigate} from 'react-router-dom'

const ProductDetailsComponent = () => {
    const {productId} = useParams<{productId: string}>();
    const navigate = useNavigate();
   
    const { data: product, isLoading, isError } = useGetProductByIdQuery(productId ?? '', {
    skip: !productId,
  });

   return <div>
        <div>{product?.id}
            <img src={product?.images[0]} alt={product?.id} />
        </div>
    </div>
}

export default ProductDetailsComponent