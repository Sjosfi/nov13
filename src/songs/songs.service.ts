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
    return 'This action adds a new song';
  }

  findAll() {
    return this.db.song.findMany();
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
