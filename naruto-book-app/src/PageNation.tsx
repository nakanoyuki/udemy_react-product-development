import { FC } from "react";

type Props = {
  handlePrev: () => void;
  handleNext: () => void;
  page: number;
  characterLength: number;
};

export const PageNation: FC<Props> = ({
  handlePrev,
  handleNext,
  page,
  characterLength,
}) => {
  const limit = 20;

  return (
    <div className="pager">
      <button disabled={page === 1} className="prev" onClick={handlePrev}>
        Prev
      </button>
      <span className="page-number">{page}</span>
      <button
        disabled={limit > characterLength}
        className="next"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
