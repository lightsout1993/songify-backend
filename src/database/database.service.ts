import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  public async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return { ...this.configService.get('database'), autoLoadEntities: true };
  }
}

export default DatabaseService;
