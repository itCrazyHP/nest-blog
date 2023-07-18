import { Role } from '@/auth/enum';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { user } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector:Reflector){

  }
  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {

    //role从数据库来的
    const user = context.switchToHttp().getRequest().user as user

    //roles从Auth()中获取的
    const roles = this.reflector.getAllAndMerge<Role[]>('roles',[context.getHandler(),context.getClass()])

    //Auth中获取的角色有没有数据库里的角色
    return roles.length?roles.some((role)=>user.role === role):true
  }
}
