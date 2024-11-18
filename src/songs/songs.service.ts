import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {
  db: PrismaService
  constructor(db: PrismaService) {
    this.db = db
  }
  
  create(createSongDto: CreateSongDto) {
    return this.db.song.create({
      data: createSongDto
    });
  }

  findAll() {
    return this.db.song.findMany();
  }

  findFree() {
    return this.db.song.findMany({
      where: {
        price: 0
      }
    });
  }

  findOne(id: number) {
    return this.db.song.findFirst({
      where: {id: id}
    });
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    await this.db.song.update({
      where: {
        id: id
      },
      data: updateSongDto
    })
    return `zene #${id} frissült`
  }

  remove(id: number) {
    return this.db.song.delete({
      where: {id: id}
    });
  }
}
