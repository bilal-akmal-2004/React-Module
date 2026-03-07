import { useState } from "react";

const categories = ["All", "Chicken", "Beef", "Seafood", "Dessert"];

type Props = {
  onSelectCategory: (category: string) => void;

  initialCategory?: string;
};

const CategoryFilter = ({
  onSelectCategory,
  initialCategory = "All",
}: Props) => {
  const [selected, setSelected] = useState(initialCategory);

  const handleChange = (category: string) => {
    setSelected(category);
    onSelectCategory(category);
  };

  return (
    <div className="category-filter">
      <select value={selected} onChange={(e) => handleChange(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
