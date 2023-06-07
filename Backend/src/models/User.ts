import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserType extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const User = sequelize.define<UserType>('User',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
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