import FilterableProductTable from '../Components/Product/FilterableProductTable.jsx'
import { useSelector } from 'react-redux';

const Product = () => {
    const dataProduct = useSelector((state) => state.product.dataProduct);

    return (
        <>
            <p>Component Product</p>
            <FilterableProductTable products={dataProduct} />
        </>
    );
}


export default Product;