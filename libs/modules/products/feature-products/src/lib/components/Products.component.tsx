// import type { Product } from '@react-nx26-nov/products-data-access';

import { Product } from "@react-nx26-nov/shared-types"
import { useNavigate } from "react-router-dom"
import "./products.scss"

const ProductsComponent = ({products}: {products: Product[]}) => {
   const navigate = useNavigate()
   return( <div>
         {
            products.map(prod => (
            <div className="products-container">
               <div>{prod.title}</div>
               {
                  prod.images.length > 0 && prod.images.map(img => 
                     <div className="product-card">
                     <div className="product-image" onClick={() => navigate(`/products/${prod.id}`)}>
                     <img src={img} alt={prod.title}/>
                      </div>
                      </div>
                     )
               }
            </div>
         )

            )
         }
    </div>)
}

export default ProductsComponent