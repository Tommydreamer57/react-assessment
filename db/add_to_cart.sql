INSERT INTO assessment-cart (userid, bookid)
VALUES ($1, $2)
RETURNING *