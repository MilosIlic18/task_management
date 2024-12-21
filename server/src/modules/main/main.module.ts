import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { ItemsEntity } from './items/items.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersEntity } from './users/users.entity';
import { TasksModule } from './tasks/tasks.module';
import { TasksEntity } from './tasks/tasks.entity';

@Module({
  imports:[
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService)=>({
        type:         'mysql',
        host:         config.get<string>('DB_HOST'),
        port:         config.get<number>('DB_PORT'),
        username:     config.get<string>('DB_USER'),
        password:     config.get<string>('DB_PASS'),
        database:     config.get<string>('DB_DATABASE'),
        synchronize:  true,
        entities:     [ ItemsEntity, UsersEntity, TasksEntity ]
      })

    }),
    ItemsModule,
    UsersModule,
    AuthModule,
    TasksModule
  
  ],
})
export class MainModule {}
