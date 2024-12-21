import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsEntity } from './items.entity';
import { TasksModule } from '../tasks/tasks.module';

@Module({
  imports:[TypeOrmModule.forFeature([ItemsEntity]),TasksModule],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
