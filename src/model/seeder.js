const db = require("./index");

const StudentList = [
  { id: 1, fullname: "Edward" },
  { id: 2, fullname: "Nicholas" },
  { id: 3, fullname: "Thomas" },
  { id: 4, fullname: "Calvin" },
  { id: 5, fullname: "Alexander" },
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
