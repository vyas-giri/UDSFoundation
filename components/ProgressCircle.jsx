"use client";
import React, { useState } from "react";

// Import react-circular-progressbar module and styles
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "@/util/ProgressProvider";

export const ProgressCircle = ({value}) => {
  const [valueEnd, setValueEnd] = useState(value);
  return (
    <div className="p-1">
      <Example>
        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
          {(value) => (
            <CircularProgressbarWithChildren value={value} styles={buildStyles({
              pathColor: "red",
            })}>
              <div className="text-black font-bold">{value}%</div>
            </CircularProgressbarWithChildren>)}
        </ProgressProvider>
      </Example>
    </div>
  );
};

function Example(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="w-16">{props.children}</div>
      </div>
    </div>
  );
}
