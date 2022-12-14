import db from './config/db';

const test = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const allTeachers = await db.teachers.findAll({
      attributes: ['id', 'name'],
    });

    console.log(JSON.stringify(allTeachers));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

test();
