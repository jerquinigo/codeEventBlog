DROP DATABASE IF EXISTS code_event_blog;
CREATE DATABASE code_event_blog;

\c code_event_blog;



CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR NOT NULL,
username VARCHAR NOT NULL,
profile_pic VARCHAR
);


CREATE TABLE posts(
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
language VARCHAR NOT NULL
);


CREATE TABLE threads(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id),
    user_id INT REFERENCES users(id)
);