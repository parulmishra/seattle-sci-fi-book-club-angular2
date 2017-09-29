import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { MemberListComponent } from 'app/member-list/member-list.component';
import { MemberDetailComponent } from 'app/member-detail/member-detail.component';
import { AboutUsComponent } from 'app/about-us/about-us.component';
import { AdminComponent } from 'app/admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'members',
    component: MemberListComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
