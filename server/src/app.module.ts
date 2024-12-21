import { Module } from '@nestjs/common';
import { MainModule } from './modules/main/main.module';
import { RouterModule } from '@nestjs/core';
import { BASE_ROUTES } from './base.routes';
@Module({
  imports: [RouterModule.register(BASE_ROUTES),MainModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
