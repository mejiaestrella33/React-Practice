import CategoryItem from "../category-item/categroy-item.component.jsx";
import "./category-selection.styles.scss";

const CategorySelection = ({ categories }) => {
  return (
    <div className="categories-selection">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default CategorySelection;
