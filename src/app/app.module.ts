import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UtilsModule } from './utils/utils.modules';
import { BandModule } from './bands/band.module';
import { StyleModule } from './styles/style.module';
import { AlbumModule } from './albums/album.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
    BandModule,
    StyleModule,
    AlbumModule,
    ErrorsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
