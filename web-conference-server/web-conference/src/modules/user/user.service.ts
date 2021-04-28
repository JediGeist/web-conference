import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';

import { User } from "./user.entity";
import { CommonService } from "../common/common.service";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly commonService: CommonService
    ) {}  

    async addUser(userId: string, login: string, password: string, name: string, email: string) {

        const user = this.userRepository.create({
            user_id: userId,
            login: login,
            password: password,
            name: name,
            email: email
        });
        await this.userRepository.save(user);

        console.log(user);
        return user.user_id;
    }

    async getUserById(userId: string) {
        const user = await this.userRepository.findOne({user_id: userId});
        console.log(user);
        if (!user) {
            throw new NotFoundException;
        }

        return user;
    }

    async getUserByLogin(login: string) {
        const user = await this.userRepository.findOne({login: login});

        if (!user) {
            throw new NotFoundException;
        }

        return user;
    }

    async updateUserByLogin(login: string, password: string, name: string, email: string) {
        /*var oldUser = await this.userModel.findOne({login: login});

        if (!oldUser) {
            throw new NotFoundException;
        }

        var newPassword = this.commonService.updateValue(oldUser.password, password);
        var newName = this.commonService.updateValue(oldUser.name, name);
        var newEmail = this.commonService.updateValue(oldUser.email, email);

        var user = await this.userModel.updateOne({login: login}, {password: newPassword, name: newName, email: newEmail}).exec();

        return user.n as string;*/
        return 1;
    }
}
