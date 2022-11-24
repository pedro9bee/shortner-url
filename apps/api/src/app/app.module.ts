import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '@cocus/users';
import { AuthModule} from '@cocus/auth';
import { URLModule } from '@cocus/url';

@Module({
  imports: [AuthModule, URLModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
