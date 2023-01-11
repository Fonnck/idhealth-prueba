import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { QuickwinsComponent } from './pages/quickwins/quickwins.component';
import { QuickItemComponent } from './pages/quickwins/quick-item/quick-item.component';
import { ItemPropertyComponent } from './pages/users/item-property/item-property.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCategoryComponent } from './pages/category/form-category/form-category.component';
import { FormProductsComponent } from './pages/products/form-products/form-products.component';
@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    UsersComponent,
    QuickwinsComponent,
    QuickItemComponent,
    ItemPropertyComponent,
    FormCategoryComponent,
    FormProductsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ProtectedRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ],
})
export class ProtectedModule {}
