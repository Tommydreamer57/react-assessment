CREATE TABLE assessment_cart (
    id SERIAL PRIMARY KEY,
    userid INTEGER,
    bookid INTEGER,
    FOREIGN KEY (userid) REFERENCES assessment_users(id),
    FOREIGN KEY (bookid) REFERENCES assessment_books(id)
)