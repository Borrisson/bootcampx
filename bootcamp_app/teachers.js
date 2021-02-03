const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const [cohort] = process.argv.slice(2, 3);

pool.query('SELECT DISTINCT teachers.name AS "teacher", cohorts.name AS "cohort" FROM teachers JOIN assistance_requests ON teachers.id=teacher_id JOIN students ON student_id=students.id JOIN cohorts ON cohort_id=cohorts.id WHERE cohorts.name LIKE $1::text ORDER BY teacher;', [cohort + '%']).then(({rows}) => {
  rows.forEach(({teacher, cohort}) => {
    console.log(`${cohort}: ${teacher}`)
  });
}).catch(err => {
  throw new Error(err);
})