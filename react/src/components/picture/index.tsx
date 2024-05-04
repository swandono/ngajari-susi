import React from "react";

export function Picture(props: any) {
  return (
    <div className="size-fit mx-auto m-5 items-center">
      <img src={props.picture} alt="" />
    </div>
  );
}
