import 'dotenv/config';
import { Sequelize } from 'sequelize';
import User from '../model/users';
import Student from '../model/students';
import RosterName from '../model/rosterNames';
import Roster from '../model/rosters';
import Location from '../model/locations';
import Hallpass from '../model/hallpasses';
import Role from '../model/roles';

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    dialect: 'mariadb',
    define: {
      timestamps: false,
    },
    dialectOptions: {
      host: process.env.DB_HOST,
      // user: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || '3306', 10),
      // database: process.env.DB_NAME,
      timezone: 'utc',
    },
  }
);

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize);
db.students = Student(sequelize);
db.rosterNames = RosterName(sequelize);
db.rosters = Roster(sequelize);
db.locations = Location(sequelize);
db.hallpasses = Hallpass(sequelize);
db.roles = Role(sequelize);

db.users.hasMany(db.rosterNames, { foreignKey: 'userId' });
db.rosterNames.belongsTo(db.users, { foreignKey: 'userId' });

db.users.hasMany(db.rosters, { foreignKey: 'userId' });
db.rosters.belongsTo(db.users, { foreignKey: 'userId' });

db.students.hasMany(db.rosters, { foreignKey: 'studentId' });
db.rosters.belongsTo(db.students, { foreignKey: 'studentId' });

db.rosterNames.hasMany(db.rosters, { foreignKey: 'id' });
db.rosters.belongsTo(db.rosterNames, { foreignKey: 'id' });

db.users.hasOne(db.roles, { foreignKey: 'userId' });
db.roles.belongsTo(db.users, { foreignKey: 'userId' });

export default db;
