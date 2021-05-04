
'use strict';

let time = ['6Am', '7Am', '8Am', '9Am', '10Am', '11Am', '12Pm', '1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm', '7Pm']

function Shop(location, minCust,maxCust,avgCockieSold){
    this.location=location;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgCockieSold=avgCockieSold;
    this.custNum=[];
    this.cookiePerHour=[];
    
    
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

 Shop.prototype.getCustNumPerHour=function(){
   for (let i = 0; i < time.length; i++) {
        this.custNum.push(random(this.minCust, this.maxCust));
 }
 
}

Shop.prototype.getCookiePerHour=function() {
   for (let i = 0; i < time.length; i++) {
    this.cookiePerHour[i] = Math.floor(this.custNum[i]*this.avgCockieSold);
    this.total += this.cookiePerHour[i];
  ;
}
}


let seattle=new Shop("Seattle",23,65,6.3);
seattle.getCustNumPerHour();
seattle.getCookiePerHour();
console.log(seattle);



let tokyo=new Shop("Tokyo",3,24,1.2);
tokyo.getCustNumPerHour();
tokyo.getCookiePerHour();
console.log(tokyo);

let dubai=new Shop("Dubai",11,38,3.7);
dubai.getCustNumPerHour();
dubai.getCookiePerHour();
console.log(dubai);

let paris=new Shop("Paris",20,38,2.3);
paris.getCustNumPerHour();
paris.getCookiePerHour();
console.log(paris);

 let lima=new Shop("Lima",2,16,4.6);
 lima.getCustNumPerHour();
lima.getCookiePerHour();
 console.log(lima);