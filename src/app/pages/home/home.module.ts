import { HomeProjectListComponent } from './home-project-list/home-project-list.component';
import { HomeRigItemComponent } from './home-rig-item/home-rig-item.component';
import { HomeRigListComponent } from './home-rig-list/home-rig-list.component';
import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/shared.module';

// import { homeService } from '../../shared/services/home.service';

const declarations = [
  HomeProjectListComponent,
  HomeRigListComponent,
  HomeRigItemComponent,
];

const imports: any = [ShareModule];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [
    HomeProjectListComponent,
    HomeRigListComponent,
    HomeRigItemComponent,
  ],
  // providers: [homeService],
})
export class HomeModule {}
