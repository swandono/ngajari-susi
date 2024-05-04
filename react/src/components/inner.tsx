import { useParams } from "react-router-dom";

let content = [
  {
    id: 1,
    title: "Title 1",
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    id: 2,
    title: "Title 2",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    id: 3,
    title: "Title 3",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
];

// pasains.org/inventory/tools/1

export function Inner() {
  const { susi } = useParams();
  const pageNumber = susi ? parseInt(susi) - 1 : 0;
  console.log("GPS_IKI_ID", susi);
  return (
    <div>
      <h1 className="text-xl text-red-800">{content[pageNumber].title}</h1>
      <p className="text-lg text-blue-800">{content[pageNumber].content}</p>
      <div className="w-32 h-32 bg-red-900 hover:w-64 hover:h-64"></div>
      <div className="w-32 h-32 bg-black hover:w-64 hover:h-64 transition-all"></div>
    </div>
  );
}
