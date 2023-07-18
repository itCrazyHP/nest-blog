import { PrismaClient } from "@prisma/client";
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

export function IsExistsRule(
    table: string,
    validationOptions?: ValidationOptions,
) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'IsExistsRule',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table],
            options: validationOptions,
            validator: {
                async validate(value: any, args: ValidationArguments) {
                    const prisma = new PrismaClient()

                    const res = await prisma[table].findFirst({
                        where: {
                            [args.property]: args.value
                        }
                    })


                    return Boolean(res)
                }
            }
        })
    }
}