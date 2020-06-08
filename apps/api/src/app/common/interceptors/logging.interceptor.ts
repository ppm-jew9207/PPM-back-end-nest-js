import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CallHandler } from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
  
    const now = Date.now();
    console.log(`After... ${Date.now() - now}ms`)
    return next
      .handle()
      .pipe();  
  }
}