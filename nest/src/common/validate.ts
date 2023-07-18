import { HttpException, HttpStatus, ValidationPipe } from "@nestjs/common";
import { ValidationError } from "class-validator";

export default class Validate extends ValidationPipe{
    protected flattenValidationErrors(validationErrors: ValidationError[]):any{
        const messages = {}
        validationErrors.forEach(item=>{
            messages[item.property]=Object.values(item.constraints)[0]
        })
        throw new HttpException({
            code:422,
            messages
        },
        HttpStatus.UNPROCESSABLE_ENTITY
        )
    }
}