import express from 'express';
import cors from 'cors';
import db from './config/db';

// const rows = await db.query(
//   'select firstName, lastName, name from students s, courses c, teachers t where s.id=c.StudentID and t.id=c.TeacherID',
//   (err: any, result: any) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//     // res.send(result);
//   }
// );

// console.log(rows);

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get('/api/get', async (req, res) => {
  db.then(async (conn) => {
    const rows = await conn.query(
      'select firstName, lastName, name from students s, courses c, teachers t where s.id=c.StudentID and t.id=c.TeacherID'
    );
    res.send(rows);

    // conn.query('SELECT * FROM students', (err: any, result: any) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   res.send(result);
    // });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// async function asyncFunction() {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query(
//       'select firstName, lastName, name from students s, courses c, teachers t where s.id=c.StudentID and t.id=c.TeacherID'
//     );

//     console.log(rows);
//   } catch (err) {
//     // Manage Errors
//     console.error('Error connecting to the database with pipeline: ', err);
//   }
//   if (conn) {
//     return conn.end();
//   }
//   return null;
// }

// asyncFunction();
