import { Router } from '@angular/router';
import { NumberService } from './../number.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-details',
  templateUrl: './number-details.component.html',
  styleUrls: ['./number-details.component.scss']
})
export class NumberDetailsComponent implements OnInit {
 magicNumber;
  constructor(private numberSer:NumberService, private router:Router) { 
  
  
  }

  ngOnInit() {
    if(!this.numberSer.magicNumber){
      this.router.navigate(['/']);
     }
     else{
      this.magicNumber =  this.numberSer.magicNumber
     }
  }

}
