import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { FooterComponent } from './frontOffice/footer/footer.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyComponent } from './frontOffice/body/body.component';
import { HeaderComponent } from './frontOffice/header/header.component';
import { AddDeliveryComponent } from './backOffice/add-delivery/add-delivery.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { DeliverysmenComponent } from './backOffice/deliverysmen/deliverysmen.component';
import { DeliverysComponent } from './backOffice/deliverys/deliverys.component';
import { ListebillComponent } from './backOffice/bill/listebill/listebill.component';
import { AddbillComponent } from './backOffice/bill/addbill/addbill.component';
import { UpdatebillComponent } from './backOffice/bill/updatebill/updatebill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    BodyAdminComponent,
    AllTemplateAdminComponent,
    FooterComponent,
    AllTemplateUserComponent,
    BodyComponent,
    HeaderComponent,
    AddDeliveryComponent,
    DeliverysmenComponent,
    DeliverysComponent,
    ListebillComponent,
    AddbillComponent,
    UpdatebillComponent

  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
