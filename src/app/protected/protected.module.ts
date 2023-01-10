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
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { QuickwinsComponent } from './pages/quickwins/quickwins.component';
import { QuickItemComponent } from './pages/quickwins/quick-item/quick-item.component';
import { ItemPropertyComponent } from './components/item-property/item-property.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    UsersComponent,
    QuickwinsComponent,
    QuickItemComponent,
    ItemPropertyComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule
  ]
})
export class ProtectedModule { }
