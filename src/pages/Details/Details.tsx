import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "../../../data/data";
import ImageCard from "../../components/ImageCard/ImageCard";
import GoBack from "../../components/GoBack/GoBack";
import "./index.scss";

interface IImage {
  id: string;
  title: string;
  url: string;
  desc: string;
}

const Details = () => {
  const [info, setInfo] = useState<null | IImage>();
  const { id } = useParams();
  useEffect(() => {
    const item = data.find((item) => item.id === id);
    setInfo(item);
  }, [id]);

  return (
    <>
      <GoBack />
      {info && <ImageCard key={id} {...info} full={true} />}
    </>
  );
};

export default Details;
