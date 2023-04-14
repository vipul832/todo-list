import React from "react";

type propsBtn = {
  instat: () => void;
};

export default function AddButton({ instat }: propsBtn) {
  return (
    <div>
      <button className="add-btn position-absolute" onClick={() => instat()}>
        +
      </button>
    </div>
  );
}
