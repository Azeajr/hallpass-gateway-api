import { DataTypes, Sequelize } from 'sequelize';

const Location = (sequelize: Sequelize) => {
  return sequelize.define('locations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export default Location;
