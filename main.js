import { Sequelize, DataTypes } from 'sequelize';

// Database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log,
});

// Create a model
const User_test = sequelize.define('User_table', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: 'user',
    },
});

//insert a new User

const newUser = {
    username: 'testuser',
    password: 'testpassword',
    email: 'testuser@example.com',
    role: 'admin',
};

try {
    const createdUser = await User_test.create(newUser);
    console.log('User created:', createdUser.toJSON());
} catch (error) {
    console.error('Unable to create user:', error);
} finally {
    sequelize.close();
    console.log('Connection closed.');
}

//Drop table
try{
    await User_test.drop();
} catch (error) {
    console.error('Unable to drop table:', error);
} finally {
    sequelize.close();
    console.log('Connection closed.');
}

//Sync the model with the database
try {
    await sequelize.sync({force: true});
    console.log('table created!');
} catch (error) {
    console.error('Unable to create table:', error);
} finally {
    sequelize.close();
    console.log('Connection closed.');
}

/* 

import { Sequelize, DataTypes } from 'sequelize';

const {DataTypes} = require('sequelize');

Data Types:


---String Types---
DataTypes.STRING; // VARCHAR(255)
DataTypes.TEXT; // VARCHAR(1234)
DataTypes.STRING.BINARY; // VARCHAR BINARY
DataTypes.TEXT; // TEXT
DataTypes.TEXT('tiny'); // TINYTEXT
DataTypes.CITEXT; // CITEXT POSTGRES ONLY
DataTypes.TSVECTOR; // TSVECTOR POSTGRES ONLY

---Boolean---
DataTypes.BOOLEAN; // BOOLEAN

---Numbers---
DataTypes.INTEGER; // INTEGER
DataTypes.BIGINT; // BIGINT
DataTypes.BIGINT(11); // BIGINT(11)

DataTypes.FLOAT; // FLOAT
DataTypes.FLOAT(11); // FLOAT(11)
DataTypes.FLOAT(11, 10); // FLOAT(11,10)

DataTypes.REAL; // REAL            PostgreSQL only.
DataTypes.REAL(11); // REAL(11)        PostgreSQL only.
DataTypes.REAL(11, 12); // REAL(11,12)     PostgreSQL only.

DataTypes.DOUBLE; // DOUBLE
DataTypes.DOUBLE(11); // DOUBLE(11)
DataTypes.DOUBLE(11, 10); // DOUBLE(11,10)

DataTypes.DECIMAL; // DECIMAL
DataTypes.DECIMAL(10, 2); // DECIMAL(10,2)

*/

//findOne - Veritabanından bir kayıt bulma
try{
    const user = await User_test.findOne({where: {id: 1}});
    console.log('User found:', user.toJSON());
} catch (error) {
    console.error('Unable to find user:', error);
} finally {
    sequelize.close();
    console.log('Connection closed.');
}

//create - Veritabanına yeni bir kayıt ekleme
try{
    const newUser = await User_test.create({username: 'testuser', password: 'testpassword', email: 'testuser@example.com', role: 'admin'});
    console.log('User created:', newUser.toJSON());
} catch (error) {
    console.error('Unable to create user:', error);
} finally {
    sequelize.close();
    console.log('Connection closed.');
}

// findByPk - Id üzerinden bir kayıt bulma
try{
    const user = await User_test.findByPk(1);
    console.log('User found:', user.toJSON());
} catch (error) {
    console.error('Unable to find user:', error);
} finally {
    sequelize.close();
    console.log('Connection closed.');
}

// update - Veritabanındaki bir kayıt güncelleme
try{
    const updatedUser = await User_test.update({username: 'testuser2'}, {where: {id: 1}});
    console.log('User updated:', updatedUser.toJSON());
} catch (error) {
    console.error('Unable to update user:', error);
} finally {
    sequelize.close();
    console.log('Connection closed.');
}