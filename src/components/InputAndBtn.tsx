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
          inStat={() => setShowInput((state) => !state)}
          addData={props.addData}
        />
      )}
      {!showInput && (
        <AddButton inStat={() => setShowInput((state) => !state)} />
      )}
    </div>
  );
}
