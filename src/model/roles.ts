import { DataTypes, Sequelize } from 'sequelize';

const Role = (sequelize: Sequelize) => {
  return sequelize.define('roles', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    adminPerm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    editorPerm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userPerm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};

export default Role;
