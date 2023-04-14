import React from "react";

type PropsBtn = {
  instat: () => void;
};

export default function AddButton({ instat }: PropsBtn) {
  return (
    <div>
      <button className="add-btn position-absolute" onClick={() => instat()}>
        +
      </button>
    </div>
  );
}
