import { Controller, HttpStatus, Post, Get, Body, Res, Header, Head, Param } from '@nestjs/common';

import { uuid } from 'uuidv4';

import { UserService } from './user.service';
import { ApiTags, ApiCreatedResponse, ApiBody} from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('user')
@Controller('api/user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('register')
    @ApiCreatedResponse({
        description: 'Register new user'
    })
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                login: { type: 'string'},
                password: { type: 'string'},
                name: { type: 'string'},
                email: { type: 'string'},
            }
        }
    })
    async addUser( 
        @Body('login') userLogin: string,
        @Body('password') userPassword: string,
        @Body('name') userName: string,
        @Body('email') userEmail: string,
        ) {
        const userId = uuid();
        await this.userService.addUser(userId, userLogin, userPassword, userName, userEmail);

        console.log(userId, userLogin, userPassword, userName, userEmail);
        return {user_id: userId};
    }

    @Post('getById')
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                user_id: { type: 'string'}
            }
        }
    })
    async getUserById( 
        @Body('user_id') userId: string
        ): Promise<User | undefined> {
        const user = await this.userService.getUserById(userId);
        return user;
    }

    @Post('getByLogin')
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                login: { type: 'string'}
            }
        }
    })
    async getUserByLogin( 
        @Body('login') userLogin: string
        ): Promise<User | undefined> {
        const user = await this.userService.getUserByLogin(userLogin);
        return user;
    }

    @Post('update')
    @ApiCreatedResponse({
        description: 'Update user password or/and fio by login'
    })
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                login: { type: 'string'},
                password: { type: 'string'},
                name: { type: 'string'},
                email: { type: 'string'},
            }
        }
    })
    async updateUserByLogin(
        @Body('login') login: string,
        @Body('password') userPassword: string,
        @Body('name') userName: string,
        @Body('email') userEmail: string,
    ){
        const updatedUser = await this.userService.updateUserByLogin(login, userPassword, userName, userEmail);
        return updatedUser;
    }
}