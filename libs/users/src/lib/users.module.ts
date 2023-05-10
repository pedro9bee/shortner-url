import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AbstractService } from '@9bee/shared';
import { AuthModule } from '@9bee/auth';

@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [UsersService, AbstractService],
  exports: [UsersService],
})
export class UsersModule {}
