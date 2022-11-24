import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SharedController } from './shared.controller';
import { SharedService } from './shared.service';
import { AbstractService } from './abstract.service';

@Module({
  controllers: [SharedController],
  providers: [SharedService, PrismaService, AbstractService],
  exports: [SharedService, PrismaService, AbstractService]
})
export class SharedModule {}
