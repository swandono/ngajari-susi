const express = require("express");
var cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

const content = [
  {
    id: 1,
    slug: "merbabu",
    title: "Pendakian Merbabu",
    content: "IKI PENDAKIAN MERBABU",
  },
  {
    id: 2,
    slug: "lawu",
    title: "Pendakian Lawu",
    content: "IKI PENDAKIAN LAWU",
  },
  {
    id: 3,
    slug: "sumbing",
    title: "Pendakian Sumbing",
    content: "IKI PENDAKIAN SUMBING",
  },
  {
    id: 4,
    slug: "sindoro",
    title: "Pendakian Sindoro",
    content: "IKI PENDAKIAN SINDORO",
  },
  {
    id: 5,
    slug: "merapi",
    title: "Pendakian Merapi",
    content: "IKI PENDAKIAN MERAPI",
  },
];

// list content
app.get("/api/posts/title", (req, res) => {
  const data = content.map((item) => {
    return { id: item.id, title: item.title, slug: item.slug };
  });
  res.json(data);
});

// detail content
app.get("/api/post/:page", (req, res) => {
  const page = req.params.page;
  const data = content.find((item) => item.slug === page);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
