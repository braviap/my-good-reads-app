import { AppState } from './app.state';
import { reducer } from './reducers/good-reads.reducer';
import { GoodReadActions } from './actions/good-reads-actions';
import { GoodReadEffects } from './effects/good-reads.effects';
import { BackendService } from './core/services/backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReadFormComponent } from './components/read-form/read-form.component';

import { routes } from './app.routes';
import { StoreModule, Store } from '@ngrx/store';
// import { reducer } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr'
import 'rxjs/add/operator/take'
import { ReadCardComponent } from './components/read-card/read-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReadFormComponent,
    ReadCardComponent
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
export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private _store: Store<AppState>
  ) { }

  hmrOnInit(store) {
    if (!store || !store.rootState) {
      return
    }
    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this._store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      })
    }

    if ('restoreInputValues' in store) {
      store.restoreInputValues()
    }
    this.appRef.tick()
    Object.keys(store).forEach(prop => delete store[prop])
  }

  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement)
    this._store.take(1).subscribe(s => store.rootState = s)
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation)
    // save input values
    store.restoreInputValues = createInputTransfer()
    // remove styles
    removeNgStyles()
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts
    // anything you need done the component is removed
  }

}
