import { FC } from "react";
import "./App.css";
import { Character } from "./App";

type Props = {
  character: Character;
};

export const Card: FC<Props> = ({ character }) => {
  return (
    <div className="card">
      <img
        src={character.images[0] || "/dummy.png"}
        alt="Character"
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-scription">{character.debut?.appersIn ?? "なし"}</p>
        <div className="card-footer">
          <div className="affiliation">
            {character.personal?.affiliation ?? "なし"}
          </div>
        </div>
      </div>
    </div>
  );
};
