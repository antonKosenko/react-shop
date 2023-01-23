import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import { CategoryPreviewCotnainer, Title, Preview } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewCotnainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products
                        .filter((_, index) => index < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPreviewCotnainer>
    );
};

export default CategoryPreview;