import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from './tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TasksEntity])],
  controllers: [],
  providers: [TasksService],
  exports: [TasksService]
})
export class TasksModule {}
