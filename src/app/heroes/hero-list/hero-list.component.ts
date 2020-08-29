import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.route.paramMap
      .pipe(
        switchMap(params => {
          this.selectedId = +params.get('id');
          return this.heroService.getHeroes();
        })
      );
    }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return }
  //   this.heroService.addHero({ name } as Hero)
  //                   .subscribe(hero => this.heroes.push(hero));
  // }

  // delete(hero: Hero): void {
  //   this.heroes$ = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero)
  //                   .subscribe();
  // }
}
