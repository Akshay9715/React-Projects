import { useState } from "react";

export default function RandomColour() {
  const [hexchoose, setHexChoose] = useState(true);
  const [colour, setColour] = useState("#000000");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColour() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColour = "#";
    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }
    setColour(hexColour);
  }

  function generateRGBColour() {
    const r = randomColourUtility(256);
    const g = randomColourUtility(256);
    const b = randomColourUtility(256);

    setColour(`rgb(${r},${g},${b})`);
  }

  return (
    <>
      <div className="min-h-screen">
        <div className=" flex justify-center gap-1">
          <button
            className={`p-1 m-2 border-2 rounded-xs text-xl font-bold ${
              hexchoose ? "bg-sky-400" : ""
            }`}
            onClick={() => setHexChoose(true)}
          >
            Hex Colour
          </button>
          <button
            className={`p-1 m-2 border-2 rounded-xs text-xl font-bold ${
              !hexchoose ? "bg-sky-400" : ""
            }`}
            onClick={() => setHexChoose(false)}
          >
            RGB Colour
          </button>
          <button
            className="p-1 m-2 border-2 rounded-xs text-xl font-bold"
            onClick={() =>
              hexchoose ? generateHexColour() : generateRGBColour()
            }
          >
            Generate Colour
          </button>
        </div>
        <div
          style={{ backgroundColor: colour }}
          className="h-30 mx-2 rounded-2xl"
        ></div>
        <div className={`text-center text-2xl font-medium`}>
          {hexchoose ? `HexColour : ${colour}` : `RGB Colour : ${colour}`}
        </div>
      </div>
    </>
  );
}
