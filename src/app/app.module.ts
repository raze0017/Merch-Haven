import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{MatSidenavModule} from '@angular/material/sidenav';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatMenuModule} from '@angular/material/menu';
import{MatButtonModule} from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import{MatIconModule} from '@angular/material/icon';
import{MatExpansionModule} from '@angular/material/expansion';
import{MatListModule} from '@angular/material/list';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatTableModule} from '@angular/material/table';
import{MatBadgeModule} from '@angular/material/badge';
import{MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
