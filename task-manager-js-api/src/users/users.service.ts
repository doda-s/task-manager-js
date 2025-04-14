import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { UserAuthDto } from './dto/UserAuth.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private UserModel: Model<User>
    ) {}

    async getUserById(id: string) {
        return await this.UserModel.findById(id)
    }

    async getUserByUsername(username: string) {
        return await this.UserModel.findOne({ username }).exec();
    }

    async createUser(createUserDto: UserAuthDto) {
        const newUser = new this.UserModel(createUserDto)
        await newUser.save()
    }
}
