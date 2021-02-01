import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
     constructor() {}

     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('tokenKey');

        const authReq = request.clone({
            headers: new HttpHeaders({
                'Authorization': token
            })
        });

        return next.handle(authReq)
    }
}