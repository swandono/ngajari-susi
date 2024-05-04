import { useParams } from "react-router-dom";
import { PostProps, PostLayout } from "../layout/post.layout";
import { useEffect, useState } from "react";

export function Post() {
  const { page } = useParams();
  const [data, setData] = useState<PostProps>({} as PostProps);

  useEffect(() => {
    fetch(`http://localhost:8080/api/post/${page}`)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => setData(json));
  }, []);

  return <PostLayout {...data} />;
}
