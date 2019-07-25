import { NumberService } from './../number.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-home',
  templateUrl: './number-home.component.html',
  styleUrls: ['./number-home.component.scss']
})
export class NumberHomeComponent implements OnInit {
 seconds = 10;
 generatingNumber = false;
 errorMessage = "";
  constructor(private numberSer :NumberService , private router:Router) { }

  ngOnInit() {
  //  this.startCountDown();
  }
  
  fetchRandomNumber(){
    this.generatingNumber = true;
    this.startCountDown();
    this.numberSer.getRandomNumber().subscribe((data) =>{
      // console.log(data);
       this.numberSer.magicNumber = data['number'];
      //  console.log(this.numberSer.magicNumber);
       this.router.navigate(['/magic-number']);
    }, error => {
       this.errorMessage=error;
       alert("An error occured while genearting number. please retry!")
       this.generatingNumber = false;
    });
  }


  startCountDown() {
    const x = setInterval(() => {
    this.seconds-- ;
    if (this.seconds === 0) {
      clearInterval(x);
    }
  }, 1000);
}

}
