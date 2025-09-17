import express, { application } from "express";
const port = 3000;
const app = express();
app.use(express.json());

const customers = [
  {
    id: 1,
    name: "Zoli",
    email: "b1Z@gmail.com",
  },
  {
    id: 2,
    name: "Tamás",
    email: "b1T@gmail.com",
  },
  {
    id: 3,
    name: "Ricsi",
    email: "b1R@gmail.com",
  },
  {
    id: 4,
    name: "Zsombor",
    email: "b1Zs@gmail.com",
  },
];

app.get("/customers", (req, res) => {
  res.status(200).json(customers);
});

app.listen(port, () => {
  console.log(`Server runs on ${port}`);
});
