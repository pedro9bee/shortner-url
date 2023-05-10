import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '@9bee/users';
import { AuthModule } from '@9bee/auth';
import { URLModule } from '@9bee/url';

@Module({
  imports: [AuthModule, URLModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
