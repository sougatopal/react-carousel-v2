import React from "react";

export default function Arrow(props) {
  return (
    <div className={`arrow-${props.direction}`} onClick={props.onClick}>
      {props.glyph}
    </div>
  );
}
