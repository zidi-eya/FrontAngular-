import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { AddDeliveryComponent } from './backOffice/add-delivery/add-delivery.component';
import { DeliverysmenComponent } from './backOffice/deliverysmen/deliverysmen.component';
import { DeliverysComponent } from './backOffice/deliverys/deliverys.component';
import { ListebillComponent } from './backOffice/bill/listebill/listebill.component';
import { AddbillComponent } from './backOffice/bill/addbill/addbill.component';
import { UpdatebillComponent } from './backOffice/bill/updatebill/updatebill.component';

const routes: Routes = [{

  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'admin',
      component:BodyAdminComponent
    },
    {
      path:'adddelivery',
      component:AddDeliveryComponent
    },
    {
      path:'deliverysmen',
      component:DeliverysmenComponent
    },
    {
      path:'deliverys',
      component:DeliverysComponent
    },
    {
      path:'listbill',
      component:ListebillComponent
    },
    {
      path:'addbill',
      component:AddbillComponent
    },
    {
      path:'updatebill',
      component:UpdatebillComponent
    }
  ]
},
{
  path:'',
  component:AllTemplateUserComponent,
  /*children:[
    {
      path:'admin',
      component:BodyAdminComponent
    }
  ]*/
},
{
  path:'addbill', // Add this route
  component:AddbillComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
