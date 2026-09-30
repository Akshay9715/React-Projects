import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currID) => {
    setSelected(currID === selected ? null : currID);
  };

  function handleMultiSelection(currID) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currID);
    if (findIndexOfCurrentId == -1) cpyMultiple.push(currID);
    else cpyMultiple = cpyMultiple.filter((ele) => ele != currID);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="flex flex-col gap-2 h-screen w-screen justify-center items-center">
      <button
        className="p-2 bg-black text-white font-serif font-bold"
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          setMultiple([]);
        }}
      >
        {" "}
        {enableMultiSelection
          ? `Dissable Multi Selection`
          : `Enable Multi Selection`}
      </button>
      <div className="w-1/2">
        {!data && data.length == 0 ? (
          <div> No data found!</div>
        ) : (
          data.map((dataItem) => (
            <div className="m-2">
              <div className="bg-amber-800 flex justify-between p-2 font-bold text-white">
                <h3>{dataItem.question}</h3>
                <span
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="text-2xl font-bold p-2"
                >
                  {dataItem.id === selected ? `-` : `+`}
                </span>
              </div>
              {selected == dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="bg-sky-400 p-2">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Accordian;
