import { IoMdArrowBack } from "react-icons/io";
import "./index.scss";

const GoBack = () => {
  return (
    <div className="crumbs">
      <button className="btn btn-back" onClick={() => window.history.back()}>
        <IoMdArrowBack />
      </button>
    </div>
  );
};

export default GoBack;
