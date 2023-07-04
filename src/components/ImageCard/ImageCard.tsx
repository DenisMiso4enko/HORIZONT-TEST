import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.scss";

interface ImageCardProps {
  id: string;
  title: string;
  url: string;
  desc: string;
  full?: boolean;
}
const ImageCard: FC<ImageCardProps> = ({
  id,
  url,
  desc,
  title,
  full = false,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`card ${full ? "card--full" : ""}`}
      onClick={() => navigate(`/image/${id}`)}
    >
      <div className="card__poster-block">
        <LazyLoadImage
          src={url}
          alt={title}
          effect="blur"
          className="card__image"
        />
      </div>

      <h2 className="card__title">{title}</h2>
      {full && <p className="card__desc">{desc}</p>}
    </div>
  );
};

export default ImageCard;
