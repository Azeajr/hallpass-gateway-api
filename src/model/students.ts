import { DataTypes, Sequelize } from 'sequelize';

const Student = (sequelize: Sequelize) => {
  return sequelize.define('students', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export default Student;
