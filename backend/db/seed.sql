DROP DATABASE IF EXISTS code_event_blog;
CREATE DATABASE code_event_blog;

\c code_event_blog;



CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR UNIQUE NOT NULL,
username VARCHAR UNIQUE NOT NULL,
password VARCHAR NOT NULL,
profile_pic VARCHAR
);


CREATE TABLE threads(
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
threads_code TEXT,
threads_comment TEXT
);


CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    threads_id INT REFERENCES threads(id),
    user_id INT REFERENCES users(id),
    posts_code TEXT,
    posts_comment TEXT
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    posts_id INT REFERENCES posts(id),
    threads_id INT REFERENCES threads(id)
);



INSERT INTO users(email, username, password, profile_pic) VALUES('daniel@gmail.com', 'dnorris', 'pass@123', 'https://media.licdn.com/dms/image/C5603AQHp3TVna0TDmQ/profile-displayphoto-shrink_800_800/0?e=1576108800&v=beta&t=S9gTT3Fpoi4Uoqct34gptXOPFi7qdNIVQziwgY4J2mU');

INSERT into threads(user_id, threads_code, threads_comment) VALUES('1', 'console.log(2+ 2)','this was my first code line written');

INSERT INTO posts(threads_id, user_id, posts_code, posts_comment) VALUES('1', '1', 'thats was a basic line of code', 'another basic line of code');

INSERT INTO likes(user_id,posts_id,threads_id) VALUES('1','1','1');