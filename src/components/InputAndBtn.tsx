import React, { useState } from "react";
import AddButton from "./AddButton";
import InputArea from "./InputArea";

export default function InputAndBtn() {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      {showInput && (
        <InputArea instat={() => setShowInput((state) => !state)} />
      )}
      {!showInput && (
        <AddButton instat={() => setShowInput((state) => !state)} />
      )}
    </div>
  );
}
