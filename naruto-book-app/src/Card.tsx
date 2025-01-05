import { FC } from "react";
import "./App.css";

type Props = {
  images: string[];
};

export const Card: FC<Props> = ({ images }) => {
  return (
    <div className="card">
      <img
        src={images[0] || "/dummy.png"}
        alt="Character"
        className="card-image"
      />
    </div>
  );
};
