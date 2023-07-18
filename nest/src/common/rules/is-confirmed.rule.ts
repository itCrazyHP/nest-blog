import { PrismaClient } from "@prisma/client";
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

export function IsConfirm(validationOptions?: ValidationOptions,) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'IsNotExistsRule',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                async validate(value: any, args: ValidationArguments) {
                    return Boolean(value === args.object[`${args.property}_confirm`])
                }
            }
        })
    }
}