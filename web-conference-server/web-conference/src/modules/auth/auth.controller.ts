import { Controller, Post, Get, UseGuards, Request, Header, Body} from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiTags, ApiBody} from '@nestjs/swagger';

import { AuthService } from './services/auth.service';
import { UserService } from 'src/modules/user/user.service';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {}

    //@UseGuards(AuthGuard('local'))
    @Post('login')
    @ApiCreatedResponse({
        description: 'Login user'
    }) 
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                login: { type: 'string'},
                password: { type: 'string'}
            }
        }
    })
    async login(
        @Body('login') userLogin: string,
        @Body('password') userPassword: string
    ) {
        return this.authService.validateUser(userLogin, userPassword);
    }

    /*@UseGuards(AuthGuard('local'))
    @Get('profile')
    getProfile(@Request() req) {
        console.log(req);
        return req.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('refresh')
    async refresh(@Request() req) {
        const user = await this.userService.getByUserId(req.user.id);
        return this.authService.login(user);
    }*/
}