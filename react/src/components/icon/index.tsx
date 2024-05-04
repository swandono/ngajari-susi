import React from "react";

export function Icon() {
  return (
    <div className="flex flex-row mt-1">
      <div className="basis-2">
        <img
          src={require("../../image/reply.png")}
          alt="reply"
          className="size-5 ml-1.5 mx-10"
        />
      </div>
      <div className="basis-2">
        <img
          src={require("../../image/retweet.jpg")}
          alt="retweet"
          className="size-5 ml-1.5 mx-10"
        />
      </div>
      <div className="basis-2">
        <img
          src={require("../../image/like.png")}
          alt="like"
          className="size-5 ml-1.5 mx-10"
        />
      </div>
    </div>
  );
}
