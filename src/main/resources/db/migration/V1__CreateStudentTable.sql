CREATE TABLE if not exists student
(
    id   uuid PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    gender char(6) not null
        check ( gender = 'MALE' or
                gender = 'FEMALE' or
                gender = 'male' or
                gender = 'female'
                )
);