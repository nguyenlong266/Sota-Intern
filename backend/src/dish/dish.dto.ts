/* eslint-disable prettier/prettier */
import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';
import * as bcrypt from 'bcrypt';

export class DishDto {
@IsNotEmpty()
productline: string;

@IsNotEmpty()
name: string;

@IsNumber()
price: number;

@IsNumber()
idRestaurant: number;

imageUrl: string;
}
