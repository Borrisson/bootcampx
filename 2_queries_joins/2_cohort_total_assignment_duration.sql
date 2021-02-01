SELECT SUM(assignment_submissions.duration) AS "total_duration"
FROM assignment_submissions 
INNER JOIN students ON student_id = students.id
INNER JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'FEB12';