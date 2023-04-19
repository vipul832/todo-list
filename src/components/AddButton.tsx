import React from "react";

type PropsBtn = {
  inStat: () => void;
};

export default function AddButton({ inStat }: PropsBtn) {
  return (
    <div>
      <button className="add-btn position-absolute" onClick={() => inStat()}>
        +
      </button>
    </div>
  );
}
