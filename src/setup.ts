const setup = async (db: any) => {
  await db.sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');

  await db.users.bulkCreate([
    { username: 'zeaAn001' },
    { username: 'grahamMi001' },
    { username: 'giulianoAl001' },
  ]);

  await db.roles.bulkCreate([
    { userId: 1, user: 2001 },
    { userId: 2, user: 2001 },
    { userId: 3, user: 2001, editor: 1984, admin: 5150 },
  ]);

  await db.students.bulkCreate([
    { firstName: 'Ed', lastName: 'Hines' },
    { firstName: 'Mattie', lastName: 'Patton' },
    { firstName: 'Joey', lastName: 'Armstrong' },
    { firstName: 'Guadalupe', lastName: 'Coleman' },
    { firstName: 'Fredrick', lastName: 'Osborne' },
    { firstName: 'Carole', lastName: 'Wise' },
    { firstName: 'Kathleen', lastName: 'Holloway' },
    { firstName: 'Brian', lastName: 'George' },
    { firstName: 'Audrey', lastName: 'Scott' },
    { firstName: 'Opal', lastName: 'Evans' },
    { firstName: 'Lauren', lastName: 'Benson' },
    { firstName: 'Ginger', lastName: 'Norton' },
    { firstName: 'Amy', lastName: 'Cross' },
    { firstName: 'Darryl', lastName: 'Dixon' },
    { firstName: 'Edwin', lastName: 'Munoz' },
    { firstName: 'Frances', lastName: 'Carson' },
  ]);

  await db.rosterNames.bulkCreate([
    { rosterName: 'Block 1', userId: 1 },
    { rosterName: 'Block 2', userId: 1 },
    { rosterName: 'Block 3', userId: 1 },
    { rosterName: 'Civics', userId: 2 },
    { rosterName: 'Philosophy', userId: 2 },
    { rosterName: 'U.S. History', userId: 2 },
    { rosterName: 'Advisory', userId: 3 },
  ]);

  await db.rosters.bulkCreate([
    { id: 1, userId: 1, studentId: 1 },
    { id: 1, userId: 1, studentId: 2 },
    { id: 1, userId: 1, studentId: 3 },
    { id: 1, userId: 1, studentId: 4 },
    { id: 1, userId: 1, studentId: 5 },
    { id: 2, userId: 1, studentId: 6 },
    { id: 2, userId: 1, studentId: 7 },
    { id: 2, userId: 1, studentId: 8 },
    { id: 2, userId: 1, studentId: 9 },
    { id: 3, userId: 1, studentId: 10 },
    { id: 3, userId: 1, studentId: 11 },
    { id: 3, userId: 1, studentId: 12 },
    { id: 3, userId: 1, studentId: 13 },
    { id: 3, userId: 1, studentId: 14 },
    { id: 4, userId: 2, studentId: 1 },
    { id: 4, userId: 2, studentId: 3 },
    { id: 4, userId: 2, studentId: 5 },
    { id: 4, userId: 2, studentId: 7 },
    { id: 4, userId: 2, studentId: 9 },
    { id: 5, userId: 2, studentId: 2 },
    { id: 5, userId: 2, studentId: 4 },
    { id: 5, userId: 2, studentId: 6 },
    { id: 5, userId: 2, studentId: 8 },
    { id: 6, userId: 2, studentId: 10 },
    { id: 6, userId: 2, studentId: 11 },
    { id: 6, userId: 2, studentId: 12 },
    { id: 6, userId: 2, studentId: 13 },
    { id: 6, userId: 2, studentId: 14 },
    { id: 6, userId: 2, studentId: 15 },
    { id: 6, userId: 2, studentId: 16 },
    { id: 7, userId: 3, studentId: 1 },
    { id: 7, userId: 3, studentId: 2 },
    { id: 7, userId: 3, studentId: 3 },
    { id: 7, userId: 3, studentId: 4 },
    { id: 7, userId: 3, studentId: 5 },
    { id: 7, userId: 3, studentId: 6 },
    { id: 7, userId: 3, studentId: 7 },
    { id: 7, userId: 3, studentId: 8 },
    { id: 7, userId: 3, studentId: 9 },
    { id: 7, userId: 3, studentId: 10 },
    { id: 7, userId: 3, studentId: 11 },
    { id: 7, userId: 3, studentId: 12 },
    { id: 7, userId: 3, studentId: 13 },
    { id: 7, userId: 3, studentId: 14 },
    { id: 7, userId: 3, studentId: 15 },
    { id: 7, userId: 3, studentId: 16 },
  ]);

  await db.locations.bulkCreate([{ name: 'Bathroom' }, { name: 'Nurse' }, { name: 'Main Office' }]);
};

export default setup;
