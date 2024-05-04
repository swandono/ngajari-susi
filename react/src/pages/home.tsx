import { NavLink } from "react-router-dom";
import { Body } from "../container/body";
import Card from "../container/card";
import { useEffect, useState } from "react";

type Title = {
  id: number;
  title: string;
  slug: string;
};

export function Home() {
  const [title, setTitle] = useState<Title[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/posts/title")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => setTitle(json));
  }, []);

  return (
    <div>
      <div className="bg-sky-950">
        <div className="text-xl">
          <Card title="Twitter" />
        </div>
        <div>
          <NavLink
            className="text-xl hover:text-red-400 text-white"
            to="/profile"
          >
            <button className="bg-red-400 text-white p-2 rounded-lg">
              Profile
            </button>
          </NavLink>
          {title.map((t) => {
            return (
              <div key={t.id}>
                <NavLink
                  className="text-xl hover:text-red-400 text-white"
                  to={`/post/${t.slug}`}
                >
                  <button className="bg-red-400 text-white p-2 rounded-lg">
                    {t.title}
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
        <div>
          <Body />
        </div>
      </div>
    </div>
  );
}
