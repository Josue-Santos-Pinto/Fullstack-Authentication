import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

interface UserType extends Model {
    id: number;
    email: string;
    password: string;
}

export const User = sequelize.define<UserType>('User',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},{
    tableName: 'users',
    timestamps: false
})