import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    
    const headerContent = context.switchToHttp().getRequest().headers
    return headerContent.user?true:false
  }
}
