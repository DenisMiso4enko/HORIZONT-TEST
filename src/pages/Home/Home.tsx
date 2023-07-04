import { data } from "../../../data/data";
import ImageCard from "../../components/ImageCard/ImageCard";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Select from "../../components/Select/Select";
import "./index.scss";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredImages =
    selectedCategory === "All"
      ? data
      : data.filter((image) => image.category === selectedCategory);

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.floor(filteredImages.length / itemsPerPage);

  const onPageChange = (page: number) => setCurrentPage(page);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const itemsToDisplay = filteredImages.slice(startIndex, endIndex);
  return (
    <>
      <h1 className="title">Главная страница</h1>
      <Select
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="images-list">
        {itemsToDisplay.map((item) => (
          <ImageCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Home;
