import { Component } from '@angular/core';
import { BillserviceService } from 'src/app/Service/Bill/billservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebill',
  templateUrl: './updatebill.component.html',
  styleUrls: ['./updatebill.component.css']
})
export class UpdatebillComponent {
  idFacture!:number;
  topicFacture!:String;
  archive!:boolean;
  reference!:String;

  priceTotal!:any;
  datefacture!:any;
  datefacturee!:any;
  devise!:any;
  id!: number;

  bill!:any[];
  constructor(private service:BillserviceService ,private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.service.getFactureById(this.id).subscribe(data => {
        this.bill = data;
      });
    });
  }
  update(): void {
    this.service.updatebill(this.bill).subscribe(() => {
      this.router.navigate(['/detail', this.id]);
    });
  }


  // loadFacture(idFacture: number): void {
  //   this.service.getbill(idFacture)
  //     .subscribe((facture: any) => {
  //       this.bill = bill;
  //     }, (error: any) => {
  //       console.error('Error loading facture:', error);
  //     });
  // }
  // updateFacture(): void {
  //   this.service.updatebill(this.bill)
  //     .subscribe((updatebill: any) => {
  //       console.log('Facture updated successfully:', updatebill);
  //       // navigate back to the FactureComponent or do other stuff here
  //     }, (error: any) => {
  //       console.error('Error updating facture:', error);
  //     });
  // }

  // editFacture(facture: any): void {
  //   this.router.navigate(['/facture-form', facture.idFacture]);
  // }


}
