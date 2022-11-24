import { Module } from '@nestjs/common';
import { URLController } from './url.controller';
import { URLService } from './url.service';
import { PrismaService } from '@cocus/shared';
import { AbstractService } from '@cocus/shared';
@Module({
  controllers: [URLController],
  providers: [URLService, PrismaService, AbstractService],
  exports: [URLService],
})
export class URLModule {}
