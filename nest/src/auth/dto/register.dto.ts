import {IsNotEmpty} from 'class-validator'
import { IsConfirm } from 'src/common/rules/is-confirmed.rule'
import { IsNotExistsRule } from 'src/common/rules/is-not-exists.rule'
export default class RegisterDto{
    @IsNotEmpty({message:'用户名不能为空'})
    @IsNotExistsRule('user',{message:'用户已经注册'})
    name:string
    @IsConfirm({message:'密码不一致'})
    @IsNotEmpty({message:'密码不能为空'})
    password:string
    @IsNotEmpty({message:'确认密码不能为空'})
    password_confirm:string
}