import { productsData } from "./data";
import ProductEntry from './ProductEntry';

const styleImg = {
  width: '800px',
  height: '317px'
}

function Product() {
  return (
    <div id="product">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {productsData.map((product, index) => (
            <ProductEntry
              key={index}
              style={styleImg}
              imgSrc={product.img}
              alt={product.productTitle}
              category={product.category}
              productTitle={product.productTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Product;
