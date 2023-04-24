import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Response {
  processing: string;
}
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();
        request.dishes = request.dishes || [];
      }),
      map(() => ({ processing: `${Date.now() - start}` })),
    );
  }
}
