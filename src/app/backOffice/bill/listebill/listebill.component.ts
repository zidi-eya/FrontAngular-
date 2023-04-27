import { Component } from '@angular/core';
import { BillserviceService } from 'src/app/Service/Bill/billservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listebill',
  templateUrl: './listebill.component.html',
  styleUrls: ['./listebill.component.css']
})
export class ListebillComponent {
  bill!:any[]
  constructor(private service:BillserviceService,private toastr: ToastrService){}

  ngOnInit(): void {
    this.service.getbill().subscribe(res => {
      console.log(res)
      this.bill=res})
}


onDeleteFacture(idFacture: number) {
  this.service.deletebill(idFacture).subscribe(
    res => {
      console.log(res);
      // Find the index of the facture to be deleted
      const index = this.bill.findIndex(bill => bill.idFacture === idFacture);
      // Remove the facture from the array
      if (index > -1) {
        this.bill.splice(index, 1);
      }
      setTimeout(() => {
        this.toastr.success('Facture deleted successfully.');
    }, 0);    },
    error => {
      console.log(error);
      setTimeout(() => {
        this.toastr.error('Failed to delete facture.');
    },)
    }
  );
}



updateFacture(): void {
  this.service.updatebill(this.bill)
    .subscribe((updatebill: any) => {
      console.log('Facture updated successfully:', updatebill);
      // update the UI or do other stuff here
    }, (error: any) => {
      console.error('Error updating facture:', error);
    });
}



  

}
