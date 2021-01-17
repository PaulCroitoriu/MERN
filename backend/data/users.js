import bcrypt from "bcryptjs"

const users = [
  {
    name: "Paul Croitoriu",
    email: "paul@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "User Doi",
    email: "user@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "John Trei",
    email: "john@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Alan Tei",
    email: "alan@example.com",
    password: bcrypt.hashSync("password", 10),
  },
]

export default users
