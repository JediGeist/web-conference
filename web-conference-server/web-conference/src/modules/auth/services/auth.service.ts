import { Injectable, UnauthorizedException } from "@nestjs/common";
//import { JwtService } from '@nestjs/jwt';

import { UserService } from '../../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        //private jwtService: JwtService
    ) {}  

    async validateUser(login: string, pass: string): Promise<any> {
        const user = await this.userService.getUserByLogin(login);

        if (user && user.password === pass) {
            return {user_id: user.user_id};
            //returnconst {password, ...secureUser} = user;
            //return secureUser;
        }
        throw new UnauthorizedException();
        //eturn null;    
    }

    /*async login(user: User) {
        const payload = { id: user.id };
        return {
          accessToken: this.jwtService.sign(payload)
        }
    }*/
}
