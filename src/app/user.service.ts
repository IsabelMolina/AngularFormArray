import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const ALIASES = ["Erick"];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAliasesTaken(aliases: string[]): Observable<boolean> {
    const isTaken = ALIASES.some((alias) => aliases.includes(alias));
    return of(isTaken).pipe(delay(400));
  }
}
