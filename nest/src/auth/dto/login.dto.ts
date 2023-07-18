import { IsNotEmpty } from "class-validator";
import { IsExistsRule } from "src/common/rules/is-exists.rule";

export default class LoginDto {
    @IsNotEmpty({message:'用户名不能为空'})
    @IsExistsRule('user',{message:'用户不存在'})
    name:string
    @IsNotEmpty({message:'密码不能为空'})
    password:string
}