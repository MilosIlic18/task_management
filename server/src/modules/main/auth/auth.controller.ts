import { Body, Controller, Post } from '@nestjs/common';
import { UserSignIn } from './dtos/user.signin';
import { UserSignUp } from './dtos/user.signup';
import { UsersService } from '../users/users.service';
import { ApiResponse } from 'src/misc/api.response';


import * as bcrypt from 'bcryptjs'
import { UserData } from './dtos/user.data';

@Controller()
export class AuthController {
    constructor(private readonly _userService:UsersService){}
    
    @Post()
    async signIn(@Body() data:UserSignUp){
      const user = await this._userService.findByUsername(data.username)
        if(!user)
            return Promise.resolve(new ApiResponse('info',-301,'Pogresni parametri za prijavu'))
        if(!await bcrypt.compare(data.password,user.password))
            return Promise.resolve(new ApiResponse('info',-302,'Pogresni parametri za prijavu'))
        const userData = new UserData()
        userData.usersId  = user.usersId
        userData.username = user.username
        return Promise.resolve(userData)
    }
    
    @Post('sign-up')
    async signUp(@Body() data:UserSignIn){
      const user = await this._userService.findByUsername(data.username)
        if(user)
            return Promise.resolve(new ApiResponse('info',-300,'Zauzeto korisnicko ime'))
        data.password = await bcrypt.hash(data.password,Number(`${process.env.HASH_NUM}`))
        return this._userService.save(data)
    }
}
