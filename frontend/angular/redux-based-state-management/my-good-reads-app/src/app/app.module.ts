import { reducer } from './reducers/good-reads.reducer';
import { GoodReadActions } from './actions/good-reads-actions';
import { GoodReadEffects } from './effects/good-reads.effects';
import { BackendService } from './core/services/backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReadFormComponent } from './components/read-form/read-form.component';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
// import { reducer } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReadFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(GoodReadEffects)
  ],
  providers: [BackendService, GoodReadActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
