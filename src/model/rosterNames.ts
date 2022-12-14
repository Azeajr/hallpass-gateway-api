import { DataTypes, Sequelize } from 'sequelize';

const RosterName = (sequelize: Sequelize) => {
  return sequelize.define('rosterNames', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rosterName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

export default RosterName;
