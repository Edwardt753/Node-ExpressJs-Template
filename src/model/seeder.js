const db = require("./index");

const StudentList = [
  { id: 1, fullname: "Edward", gender: "Male", email: "edward@gmail.com" },
  { id: 2, fullname: "Nicholas", gender: "Male", email: "Nicholas@gmail.com" },
  { id: 3, fullname: "Thomas", gender: "Male", email: "Thomas@gmail.com" },
  { id: 4, fullname: "Calvin", gender: "Female", email: "Calvin@gmail.com" },
  {
    id: 5,
    fullname: "Alexander",
    gender: "Female",
    email: "Alexander@gmail.com",
  },
  {
    id: 6,
    fullname: "Janice",
    gender: "Female",
    email: "Female@gmail.com",
  },
  {
    id: 7,
    fullname: "Donny",
    gender: "Male",
    email: "Donny@gmail.com",
  },
  {
    id: 8,
    fullname: "Lexi",
    gender: "Female",
    email: "Lexi@gmail.com",
  },
];

// Function to seed the database
const seedData = async (db) => {
  try {
    await db.student.bulkCreate(StudentList);
    //await next data .bulkCreate();
    console.log("Seeder completed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

module.exports = { seedData };
