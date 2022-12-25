import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import databaseConfig from './config/database.config';
import { DatabaseModule } from './database/database.module';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [ConfigModule.forRoot({ load: [databaseConfig] }), DatabaseModule],
})
export class AppModule {}
