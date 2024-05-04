// iki ki tema nggo satu layout
//  reusable

export type PostProps = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export function PostLayout(props: PostProps) {
  return (
    <div className="bg-blue-50">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  );
}
