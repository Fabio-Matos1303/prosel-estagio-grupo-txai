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
        console.log(err);

        if (err.message.includes('not found')) {
          throw new NotFoundException('Record not found');
        }

        if (err.message.includes('password must be at least')) {
          throw new ConflictException(
            'Password must be between 8 and 16 characters',
          );
        }

        if (err.message.includes('name must be at least')) {
          throw new ConflictException('Name must be at least 3 characters');
        }

        if (err.message.includes('Invalid email')) {
          throw new ConflictException('Invalid email');
        }

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
