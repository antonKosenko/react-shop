import CategoryItem from "../category-item/category-item.component";

import "./categories-menu.stiles.scss"

const CategoriesMenu = ({categories}) => {
    return (
        <div className="categories-container">
      {categories.map((category) => (
       <CategoryItem key={category.id} category={category} />
      ))}
    </div>
    );
}

export default CategoriesMenu