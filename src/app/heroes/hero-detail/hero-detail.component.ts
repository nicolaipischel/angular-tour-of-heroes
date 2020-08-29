import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.hero$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.heroService.getHero(+params.get('id')))
    );
  }

  save(hero: Hero): void {
    this.heroService.updateHero(hero)
                    .subscribe(() => this.goToHeroes(hero));
  }

  goToHeroes(hero: Hero): void {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: heroId }]);
  }
}
