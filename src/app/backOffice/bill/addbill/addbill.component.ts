import { Component } from '@angular/core';
import { BillserviceService } from 'src/app/Service/Bill/billservice.service';

@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.css']
})
export class AddbillComponent {


  idFacture!:number;
  topicFacture!:String;
  archive!:boolean;
  reference!:String;

  priceTotal!:any;
  datefacture!:any;
  datefacturee!:any;
  devise!:any;

  constructor(private service:BillserviceService){}

ngOnInit(): void {
}

Submit(form:any){
    let body={
      "idFacture":this.idFacture,
      "topicFacture": this.topicFacture,
      "archive": this.archive,
      "reference": this.reference,
      "priceTotal": this.priceTotal,
      "datefacture":this.datefacture,
      "datefacturee":this.datefacturee,
      "devise":this.devise

    }
    console.log(body)
    let data=JSON.stringify(form.value)
    this.service.addbill(body).subscribe(res => console.log(res))
  }

}
