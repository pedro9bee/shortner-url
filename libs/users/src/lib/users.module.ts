import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '@cocus/shared';
import { AbstractService } from '@cocus/shared';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AbstractService],
  exports: [UsersService],
})
export class UsersModule {}
 