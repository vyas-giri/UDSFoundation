"use client";
import React, { useState } from "react";

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "@/util/ProgressProvider";

export const ProgressCircle = () => {
  const [valueEnd, setValueEnd] = useState(40);
  return (
    <div style={{ padding: "10px 10px 10px 10px", margin: "auto" }}>
      <Example>
        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
          {value => <CircularProgressbar value={value} text={`${value}`} />}
        </ProgressProvider>
      </Example>
    </div>
  );
};

function Example(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: 120 }}>{props.children}</div>
        <div style={{ marginLeft: 30 }}>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
