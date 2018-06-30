DROP TABLE users_tricks;
DROP TABLE proficancies;
DROP TABLE tricks;
DROP TABLE users_followers;
DROP TABLE boards;
DROP TABLE users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE boards(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

-- Follower style relationshp not friend relationship
CREATE TABLE users_followers(
    id SERIAL PRIMARY KEY,
    users int REFERENCES users(id) NOT NULL,
    followers int REFERENCES users(id) NOT NULL
);

CREATE TABLE tricks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(512),
    board int REFERENCES boards(id)
);

CREATE TABLE proficancies(
    id SERIAL PRIMARY KEY,
    proficieny_title VARCHAR(100),
    proficieny_notes VARCHAR(1024)
); 

CREATE TABLE users_tricks(
    id SERIAL PRIMARY KEY,
    users INT REFERENCES users(id),
    trick INT REFERENCES trickS(id),
    proficieny INT REFERENCES proficancies(id),
    notes VARCHAR(8192),
    UNIQUE (users, trick)
);