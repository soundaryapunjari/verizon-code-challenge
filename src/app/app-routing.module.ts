import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from "./components/services/services.component";
import {MonitoringComponent} from "./components/monitoring/monitoring.component";
import {ApisComponent} from "./components/apis/apis.component";

const routes: Routes = [{
  path: 'services',
  component: ServicesComponent
},
  {
    path: 'monitor',
    component: MonitoringComponent
  },
  {
    path: 'apis',
    component: ApisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
