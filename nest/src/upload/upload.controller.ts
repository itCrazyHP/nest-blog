import { Controller, UploadedFile } from '@nestjs/common';
import {Post} from '@nestjs/common'
import {Image} from './upload'

@Controller('upload')
export class UploadController {
    @Post('image')
    @Image()
    image(@UploadedFile() file:Express.Multer.File){
        return {
            url:`http://localhost:3000/${file.path.split('\\').join('/')}`
        }
    }
}


