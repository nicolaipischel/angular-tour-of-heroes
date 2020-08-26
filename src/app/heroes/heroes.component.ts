import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero ) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id ${hero.id}`);
  }

  getHeroes() {
    this.heroService.getHeroes()
                    .subscribe(heroes => this.heroes = heroes);
  }
}
