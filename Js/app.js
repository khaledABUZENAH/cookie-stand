
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


 //render seattle
 let theParent = document.getElementById('parent');
 console.log(theParent);
 
 let theTable=document.createElement('table');
 theParent.appendChild(theTable);

 let headerRow = document.createElement('tr');
 theTable.appendChild(headerRow);

 let th = document.createElement('th');
headerRow.appendChild(th);


for (let i = 0;i < time.length;i++) {
  
  let th2 = document.createElement('th');
headerRow.appendChild(th2);
th2.textContent =time[i];

}


let th3 = document.createElement("th");
headerRow.appendChild(th3);
th3.textcontent ="Daily";





let tr2=document.createElement("tr");
theTable.appendChild(tr2);
tr2.textContent="Seattle";


for (let i = 0; i < time.length; i++) {
  
  let td=document.createElement("td");
  tr2.appendChild(td);
  td.textContent=seattle.cookiePerHour[i];
   
  
}


//render tokyo

let tr3=document.createElement("tr");
theTable.appendChild(tr3);
tr3.textContent="Tokyo";


for (let i = 0; i < time.length; i++) {
  
  let td2=document.createElement("td");
  tr3.appendChild(td2);
  td2.textContent=tokyo.cookiePerHour[i];
   
  
}


//render dubai

let tr4=document.createElement("tr");
theTable.appendChild(tr4);
tr4.textContent="Dubai";


for (let i = 0; i < time.length; i++) {
  
  let td3=document.createElement("td");
  tr4.appendChild(td3);
  td3.textContent=dubai.cookiePerHour[i];
   
  
}

//render paris

let tr5=document.createElement("tr");
theTable.appendChild(tr5);
tr5.textContent="Paris";


for (let i = 0; i < time.length; i++) {
  
  let td4=document.createElement("td");
  tr5.appendChild(td4);
  td4.textContent=paris.cookiePerHour[i];
   
  
}

//render lima

let tr6=document.createElement("tr");
theTable.appendChild(tr6);
tr6.textContent="Lima";


for (let i = 0; i < time.length; i++) {
  
  let td5=document.createElement("td");
  tr6.appendChild(td5);
  td5.textContent=lima.cookiePerHour[i];
   
  
}

