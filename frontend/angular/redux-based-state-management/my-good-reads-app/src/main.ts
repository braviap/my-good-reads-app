import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { bootloader } from '@angularclass/hmr'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

// import './rxjs-extensions'

if (environment.production) {
  enableProdMode()
}

function basicBootstrap(AppModule) {
  return platformBrowserDynamic().bootstrapModule(AppModule)
    .then(MODULE_REF => {
      console.log('Bootstrap success')

      return MODULE_REF
    })
  // .catch(err => console.error(err));
}

function hmrBootstrap(AppModule) {
  const bootPromise = basicBootstrap(AppModule)

  bootPromise.then(function (MODULE_REF) {
    if (module['hot']) {
      module['hot']['accept']()
      if (MODULE_REF.instance['hmrOnInit'] && module['hot']['data']) {
        MODULE_REF.instance['hmrOnInit'](module['hot']['data'])
      }
      if (MODULE_REF.instance['hmrOnStatus']) {
        module['hot']['apply'](function (status) {
          MODULE_REF.instance['hmrOnStatus'](status)
        })
      }
      if (MODULE_REF.instance['hmrOnCheck']) {
        module['hot']['check'](function (err, outdatedModules) {
          MODULE_REF.instance['hmrOnCheck'](err, outdatedModules)
        })
      }
      if (MODULE_REF.instance['hmrOnDecline']) {
        module['hot']['decline'](function (dependencies) {
          MODULE_REF.instance['hmrOnDecline'](dependencies)
        })
      }
      module['hot']['dispose'](function (store) {
        if (MODULE_REF.instance['hmrOnDestroy']) {
          MODULE_REF.instance['hmrOnDestroy'](store)
        }
        MODULE_REF.destroy()
        if (MODULE_REF.instance['hmrAfterDestroy']) {
          MODULE_REF.instance['hmrAfterDestroy'](store)
        }
      })
    }

    return MODULE_REF
  })

  return bootPromise
}

if (environment.hmr) {
  bootloader(hmrBootstrap.bind(null, AppModule))
} else {
  basicBootstrap(AppModule)
}
