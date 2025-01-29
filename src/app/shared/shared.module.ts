import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardCategoriesComponent} from './component/card-categories/card-categories.component';
import {CardProductComponent} from './component/card-product/card-product.component';
import {SidebarFilterProductComponent} from './component/sidebar-filter-product/sidebar-filter-product.component';



@NgModule({
  declarations: [
    CardCategoriesComponent,
    CardProductComponent,
    SidebarFilterProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardCategoriesComponent,
    CardProductComponent,
    SidebarFilterProductComponent
  ]
})
export class SharedModule { }
