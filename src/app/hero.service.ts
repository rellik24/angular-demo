import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  
  // /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
  private baseUrl = 'baseURL'; // 改成 Pod External IP
  private serviceUrl = `${this.baseUrl}/getAllPodName`;  // URL to web api

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    // this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getAllPodName(): Observable<string[]> {
    return this.http.get<string[]>(this.serviceUrl)
  }  

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
