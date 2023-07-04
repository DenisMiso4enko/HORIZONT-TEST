import { categories } from "../../../data/data";
import { FC } from "react";
import "./index.scss";

interface SelectProps {
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}

const Select: FC<SelectProps> = ({
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <div className="filters">
      <p className="filters__title">Фильр по категориям: </p>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
