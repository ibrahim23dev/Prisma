const express = require("express");
const PrismaClient = require("@prisma/client");
require("dotenv").config

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// app.get("/", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
