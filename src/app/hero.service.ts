import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) { }

    // this is what you would do if you were getting the HEROES data from a server somewhere. basically a java Future too
    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
      }
}
