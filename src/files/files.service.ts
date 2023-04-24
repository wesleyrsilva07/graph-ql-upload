import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';

@Injectable()
export class FilesService {
  async create({ image }: CreateFileInput) {
    const { createReadStream, filename } = await image;
    return new Promise(async (resolve) => {
    createReadStream()
     .pipe(createWriteStream(join(process.cwd(), `./src/upload/${filename}`)))
     .on('finish', () =>
       resolve({
        image: filename,
       }),
     )
     .on('error',() => {
         new HttpException('Could not save image', HttpStatus.BAD_REQUEST);
      });
    });
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileInput: UpdateFileInput) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
