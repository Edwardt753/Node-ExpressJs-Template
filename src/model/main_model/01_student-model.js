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
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      paranoid: true, //--Soft delete feature
      deletedAt: "status",
    }
  );

  return student;
};
