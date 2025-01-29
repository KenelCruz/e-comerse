import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-categories',
  standalone: false,
  templateUrl: './card-categories.component.html',
  styleUrl: './card-categories.component.css'
})
export class CardCategoriesComponent {
  @Input() title: string = 'Fregances';
  @Input() description: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ' ;
}
