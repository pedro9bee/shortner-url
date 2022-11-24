import { Injectable} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AbstractService{

    protected readonly prisma = new PrismaClient();

    // protected constructor(
    //     public readonly entity: string
    // ) {}
    async save(data, entity) {
        return await this.prisma[entity].create({data});
    }

    async find(data, entity) {
        return await this.prisma[entity].findMany(data);
    }

    async findOne(data, entity) {
        return await this.prisma[entity].findFirst(data);
    }

    async update(id: number, data, entity) {
        return await this.prisma[entity].update(id, data);
    }

    async delete(id: number, entity) {
        return await this.prisma[entity].delete(id);
    }
}