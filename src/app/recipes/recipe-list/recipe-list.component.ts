import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://www.aspicyperspective.com/wp-content/uploads/2017/02/best-italian-pasta-salad-13.jpg')
  new Recipe('A Test Recipe', 'This is simply a test', 'http://panlasangpinoy.com/wp-content/uploads/2009/09/chilicrab1.jpg?x28997')
  ];

  constructor() { }

  ngOnInit() {
  }

}
