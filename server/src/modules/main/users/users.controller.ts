import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { UsersService } from './users.service';

@Controller()
@UseGuards(AuthGuard)
export class UsersController {
    constructor(private readonly _userService:UsersService){}
    @Get(':id')
    userWithAllItemsAndTask(@Param('id') id:number){
        return this._userService.findAllItemsAndTasks(id)
    }
}
