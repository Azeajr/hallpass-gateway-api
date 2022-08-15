/* eslint-disable no-restricted-syntax */
import express from 'express';
import cors from 'cors';
import db from './config/db';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get('/api/getTeacherData', async (req, res) => {
  db.then(async (conn) => {
    const rosterNames: any[] = await conn.query(`
      SELECT
        RosterName
      FROM
        rosterNames rn
      JOIN teachers t
      ON
        rn.TeacherID = t.id
      WHERE
        t.name = 'Zea, A.'
    `);

    const rows: any[] = await conn.query(
      `SELECT firstName , lastName , t.name , rn.RosterName FROM students s JOIN rosters r ON s.id = r.StudentID JOIN rosterNames rn on r.id = rn.id JOIN teachers t on r.TeacherID = t.id WHERE t.name ='Zea, A.'`
    );

    const teacherData: any[] = [];

    for (const roster of rosterNames) {
      const students: { firstName: string; lastName: string }[] = [];

      for (const row of rows) {
        if (row.RosterName === roster.RosterName) {
          students.push({ firstName: row.firstName, lastName: row.lastName });
        }
      }

      teacherData.push({ courseTitle: roster.RosterName, students });
    }
    res.send(teacherData);
  });
});

app.get('/api/getDestinations', async (req, res) => {
  db.then(async (conn) => {
    const rows: any[] = await conn.query(
      `SELECT t.name FROM  teachers t WHERE t.name != 'Zea, A' UNION SELECT d.name FROM destinations d`
    );

    const destinations: string[] = rows.map((row) => row.name);
    res.send(destinations);
  });
});

app.post('/api/postHallpass', async (req, res) => {
  const { date, firstName, lastName, origin, destination, timer } = req.body;

  db.then(async (conn) => {
    conn.query(
      `INSERT INTO hallpasses(date, firstName, lastName, origin, destination, timer)
      VALUES ('${date}', '${firstName}', '${lastName}', '${origin}', '${destination}', ${timer})`
    );
  }).catch((error) => {
    console.error(error);
  });

  res.send('Hallpass posted successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
