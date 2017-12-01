SELECT * FROM assessment_cart
JOIN assessment_cart ON assessment_cart.userid = assessment_users.id
JOIN assessment_books ON assessment_cart.bookid = assessment_books.id
WHERE username = $1
