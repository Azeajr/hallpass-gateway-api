/* eslint-disable no-underscore-dangle */
import Location from './model/Location';
import Student from './model/Student';
import Roster from './model/Roster';
import User from './model/User';

const studentsJsonArray = [
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
];

const usersJsonArray = [
  {
    username: 'zeaAn001',
    password: '$2b$10$aIvisvHcnLCkEC9.thgbJ./bDFNg/2IJP.n9Zg61oWILpj7YhTSgu',
    roles: {
      User: 2001,
    },
  },
  {
    username: 'grahamMi001',
    password: '$2b$10$nAg/.NBQTZDkG6XRpflhgeFN9spq.pQD8.Zl5qMrbf3MYuSvfrk0W',
    roles: {
      User: 2001,
    },
  },
  {
    username: 'giulianoAl001',
    password: '$2b$10$uqJAtbBm9mM4dLkGVj47u.ATeRoLPKmaU02YkDw1GMZ/YENNkY6kW',
    roles: {
      User: 2001,
      Editor: 1984,
      Admin: 5150,
    },
  },
];

const locationsJsonArray = [{ name: 'Bathroom' }, { name: 'Nurse' }, { name: 'Main Office' }];

const rostersJsonArray = [
  { name: 'Block 1', username: 'zeaAn001' },
  { name: 'Block 2', username: 'zeaAn001' },
  { name: 'Block 3', username: 'zeaAn001' },
  { name: 'Civics', username: 'grahamMi001' },
  { name: 'Philosophy', username: 'grahamMi001' },
  { name: 'U.S. History', username: 'grahamMi001' },
  { name: 'Advisory', username: 'giulianoAl001' },
];

export default async function setup() {
  await Student.insertMany(studentsJsonArray);

  await User.insertMany(usersJsonArray);

  await Location.insertMany(locationsJsonArray);

  const block1 = await Roster.create({
    user: await User.findOne({ username: 'zeaAn001' }),
    name: 'Block 1',
    students: (await Student.find({})).slice(0, 5),
  });

  const block2 = await Roster.create({
    user: await User.findOne({ username: 'zeaAn001' }),
    name: 'Block 2',
    students: (await Student.find({})).slice(5, 10),
  });

  const block3 = await Roster.create({
    user: await User.findOne({ username: 'zeaAn001' }),
    name: 'Block 3',
    students: (await Student.find({})).slice(10, 15),
  });

  const civics = await Roster.create({
    user: await User.findOne({ username: 'grahamMi001' }),
    name: 'Civics',
    students: (await Student.find({})).filter((e, index) => index % 2 === 1).slice(0, 5),
  });

  const philosophy = await Roster.create({
    user: await User.findOne({ username: 'grahamMi001' }),
    name: 'Philosophy',
    students: (await Student.find({})).filter((e, index) => index % 2 === 0).slice(0, 5),
  });

  const usHistory = await Roster.create({
    user: await User.findOne({ username: 'grahamMi001' }),
    name: 'U.S. History',
    students: (await Student.find({})).slice(10, 15),
  });

  const advisory = await Roster.create({
    user: await User.findOne({ username: 'giulianoAl001' }),
    name: 'Advisory',
    students: (await Student.find({})).slice(10, 15),
  });

  // const block1 = new Roster({
  //   user: Users[0].id,
  //   name: 'Block 1',
  //   students: Students.map(e => e.id);
  // });

  // const block1 = new Roster({
  //   user: {
  //     username: 'zeaAn001',
  //     password: '$2b$10$aIvisvHcnLCkEC9.thgbJ./bDFNg/2IJP.n9Zg61oWILpj7YhTSgu',
  //     roles: {
  //       User: 2001,
  //     },
  //   },
  //   name: 'Block 1',
  //   students: [
  //     { firstName: 'Ed', lastName: 'Hines' },
  //     { firstName: 'Mattie', lastName: 'Patton' },
  //     { firstName: 'Joey', lastName: 'Armstrong' },
  //     { firstName: 'Guadalupe', lastName: 'Coleman' },
  //     { firstName: 'Fredrick', lastName: 'Osborne' },
  //   ],
  // });

  // block1.save((err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //   }
  // });
}
