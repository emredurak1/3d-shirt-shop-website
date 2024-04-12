import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#7EB5D6",
          "#A3C78A",
          "#E63946",
          "#F9C74F",
          "#8D6E63",
          "#FFA07A",
          "#9B5DE5",
          "#B19CD9",
          "#98FF98",
          "#FF69B4",
          "#008080",
          "#FFD700",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
