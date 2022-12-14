import { DataTypes, Sequelize } from 'sequelize';

const Roster = (sequelize: Sequelize) => {
  return sequelize.define('rosters', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  });
};

export default Roster;
