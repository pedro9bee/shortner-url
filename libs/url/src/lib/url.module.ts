import { Module } from '@nestjs/common';
import { URLController } from './url.controller';
import { URLService } from './url.service';
import { PrismaService } from '@9bee/shared';
import { AbstractService } from '@9bee/shared';
@Module({
  controllers: [URLController],
  providers: [URLService, PrismaService, AbstractService],
  exports: [URLService],
})
export class URLModule {}
