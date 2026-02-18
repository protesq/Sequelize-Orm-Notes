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


