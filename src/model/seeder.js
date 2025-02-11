const SeederList = [];

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
