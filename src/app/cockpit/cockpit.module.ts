import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CockpitPageRoutingModule } from "./cockpit-routing.module";
import { CockpitPage } from "./cockpit.page";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CockpitPageRoutingModule
  ],
  declarations: [CockpitPage]
})
export class CockpitPageModule {}
