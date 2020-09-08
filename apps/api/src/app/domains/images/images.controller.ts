/* eslint-disable @typescript-eslint/camelcase */
import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { PrivateRoutesPath } from '@ppm/common/main';
import { FileInterceptor } from '@nestjs/platform-express';

import cloudinaryStorage from 'multer-storage-cloudinary';

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

@Controller(PrivateRoutesPath.IMAGES)
@ApiTags(PrivateRoutesPath.IMAGES)
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class ImagesController {
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: cloudinaryStorage({
        cloudinary: cloudinary,
        params: { folder: 'images' },
      }),
    })
  )
  async save(@UploadedFile() file: any): Promise<string | BadRequestException> {
    if (!file || !file?.path) {
      return new BadRequestException('File not saved');
    }

    return file?.path;
  }
}
