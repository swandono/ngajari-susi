import React from "react";

export function Description(props: any) {
  return (
    <div className="font-light text-left mx-auto text-neutral-200 text-lg m-5">
      {props.description}
    </div>
  );
}
