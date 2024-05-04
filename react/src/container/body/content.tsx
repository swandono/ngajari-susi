import React from "react";
import { Icon } from "../../components/icon";
import Card from "../card";

let contentData = [
  {
    title: "susilawatibudiu",
    description: "Ikan hiu makan tomat, I love you so much",
    picture: require("./../../image/ikanhiu.jpg"),
  },
  {
    title: "badmintonlover",
    description: "Dua tiga bulu tangkis, Sudah kalah jangan nangis",
    picture: require("./../../image/Jarjit.jpg"),
  },
  {
    title: "akunsiapani",
    description: "Happy Eid Mubarak 1445 H",
    picture: require("./../../image/865.jpg"),
  },
];

export function Content() {
  return (
    <div className="flex-col container mx-auto p-3 m-5 border rounded-xl text-lg bg-sky-950 border-neutral-200 text-sky-400 font-bold">
      Content
      {contentData.map((content) => {
        return (
          <div className="text-lg">
            <Card
              title={content.title}
              description={content.description}
              picture={content.picture}
            />
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
