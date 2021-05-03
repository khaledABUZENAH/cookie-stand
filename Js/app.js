
'use strict';

let time = ['6Am', '7Am', '8Am', '9Am', '10Am', '11Am', '12Pm', '1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm', '7Pm']

function Shop(location, minCust,maxCust,avgCockieSold){
    this.location=location;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgCockieSold=avgCockieSold;
    
    
}

 Shop.prototype.getCustNumPerHour=function(){
   for (let i = 0; i < time.length; i++) {
        this.custNum.push(randomCostumerNum(this.minCust, this.maxCust));
 }
  
  
  let seattle=new Shop("Seattle",23,65,6.3);
  console.log(seattle);
  seattle.getCustNunPerHour();
  //let tokyo=new Shop("Tokyo",3,24,1.2);
  //let dubai=new Shop("Dubai",11,38,3.7);
  //let paris=new Shop("Paris",20,38,2.3);
 // let lima=new Shop("Lima",2,16,4.6);
 



  }
  