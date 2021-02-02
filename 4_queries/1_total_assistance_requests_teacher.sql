SELECT COUNT(assistance_requests.*) AS "total_assistance", name
FROM assistance_requests 
JOIN teachers ON teacher_id=teachers.id
WHERE name = 'Waylon Boehm'
GROUP BY name;