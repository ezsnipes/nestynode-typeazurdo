import { Module } from '@nestjs/common';
import AppController from './app.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
  ],
  components: [],
})
export default class ApplicationModule {}
