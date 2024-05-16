module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define(
    "students",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      grade: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      // paranoid:true --Soft delete feature
    }
  );
  return student;
};
