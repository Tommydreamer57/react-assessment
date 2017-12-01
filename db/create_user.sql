INSERT INTO assessment_users (username, password)
VALUES ($1, $2)
RETURNING *