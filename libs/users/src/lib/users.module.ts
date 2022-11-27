import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AbstractService } from '@cocus/shared';
import { AuthModule } from '@cocus/auth';


@Module({ 
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [UsersService, AbstractService],
  exports: [UsersService],
})
export class UsersModule {}
  