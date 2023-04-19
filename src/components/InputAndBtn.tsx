import React, { useState } from "react";
import AddButton from "./AddButton";
import InputArea from "./InputArea";

type Props = {
  addData: Function;
};

export default function InputAndBtn(props: Props) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      {showInput && (
        <InputArea
          instat={() => setShowInput((state) => !state)}
          addData={props.addData}
        />
      )}
      {!showInput && (
        <AddButton instat={() => setShowInput((state) => !state)} />
      )}
    </div>
  );
}
