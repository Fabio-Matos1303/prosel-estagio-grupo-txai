import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        const code = err.code;
        console.log('code', code);
        console.log(Object.keys(err));
        console.log(err.name);

        switch (code) {
          case 'P2002':
            if (err.message.includes('name')) {
              throw new ConflictException('Name already exists');
            }
          case 'P2025':
            throw new NotFoundException('Record not found');

          default:
            throw new BadGatewayException();
        }
      }),
    );
  }
}
