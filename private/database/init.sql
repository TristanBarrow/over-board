DROP TABLE user;
DROP TABLE board;

CREATE TABLE user(
    id SERIAL,
    username VARCHAR(100) UNIQUE,
    password varchar(100)
);

CREATE TABLE board(
    id SERIAL,
    name VARCHAR(100)
);

CREATE TABLE user_followers(
    id SERIAL,
    user int REFERENCES user,
    follower int REFERENCES user
);
