const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


const [cohort, limit] = process.argv.slice(2, 4);

pool.query('SELECT students.id, students.name, cohorts.name AS cohort FROM students JOIN cohorts ON cohort_id=cohorts.id WHERE cohorts.name LIKE $1 LIMIT $2::integer;', [cohort+'%' , limit])
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    })
  });