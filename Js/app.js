
'use strict';

let time = ['6Am', '7Am', '8Am', '9Am', '10Am', '11Am', '12Pm', '1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm', '7Pm']





/*let seattle = {
  location: "Seattle",
  custNum: [],
  minCust: 23,
  maxCust: 65,
  avgCockieSold: 6.3,
  cookiePerHour:[],
  total:0,
  getCustNum: function () {
      for (let i = 0; i < time.length; i++) {
          this.custNum.push(randomCostumerNum(this.minCust, this.maxCust));

      }
      
      
      
  },
  
  getCookiePerHour:function(){
      for (let i = 0; i < time.length; i++) {
          this.cookiePerHour[i] = Math.floor(this.custNum[i]*this.avgCockieSold);
          this.total += this.cookiePerHour[i];
      }

  },
  // render Seattle
  renderFunction:function(){
      let theParent = document.getElementById(`parent`);
      let shopName= document.createElement(`h2`);
      theParent.appendChild(shopName);
      shopName.textContent =this.location;

      let unorderedList=document.createElement(`ul`);
      theParent.appendChild(unorderedList);

     for (let i = 0; i < time.length; i++) {
       let listItem=document.createElement(`li`);
         unorderedList.appendChild(listItem);
          listItem.textContent= `${time[i]}: ${this.cookiePerHour[i]} cookies.`
          
      }
let totalItem=document.createElement(`li`);
unorderedList.appendChild(totalItem);
totalItem.textContent=`Total: ${this.total} Cookies.`
  }
  
}


function randomCostumerNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);



  
}





console.log(seattle.custNum);
seattle.getCustNum();
console.log(seattle.custNum);
seattle.getCookiePerHour();
console.log(seattle.cookiePerHour);
seattle.renderFunction();




//Tokyo


let tokyo = {
  location: "Tokyo",
  custNum: [],
  minCust: 3,
  maxCust: 24,
  avgCockieSold: 1.2,
  cookiePerHour:[],
  total:0,
  getCustNum: function () {
      for (let i = 0; i < time.length; i++) {
          this.custNum.push(randomCostumerNum(this.minCust, this.maxCust));

      }
  },
      getCookiePerHour:function(){
          for (let i = 0; i < time.length; i++) {
              this.cookiePerHour[i] = Math.floor(this.custNum[i]*this.avgCockieSold);
              this.total += this.cookiePerHour[i];
          }

  },
// render tokyo
renderFunction:function(){
  let theParent = document.getElementById(`parent`);
  let shopName= document.createElement(`h2`);
  theParent.appendChild(shopName);
  shopName.textContent =this.location;

  let unorderedList=document.createElement(`ul`);
  theParent.appendChild(unorderedList);

 for (let i = 0; i < time.length; i++) {
   let listItem=document.createElement(`li`);
     unorderedList.appendChild(listItem);
      listItem.textContent= `${time[i]}: ${this.cookiePerHour[i]} cookies.`
      
  }
  let totalItem=document.createElement(`li`);
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`Total: ${this.total} Cookies.`
}

}


function randomCostumerNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);


}
console.log(tokyo.custNum);
tokyo.getCustNum();
console.log(tokyo.custNum);
tokyo.getCookiePerHour();
console.log(tokyo.cookiePerHour);
tokyo.renderFunction();


//Dubai 


let dubai = {
  location: "Dubai",
  custNum: [],
  minCust: 11,
  maxCust: 38,
  avgCockieSold: 3.7,
  cookiePerHour:[],
  total:0,
  getCustNum: function () {
      for (let i = 0; i < time.length; i++) {
          this.custNum.push(randomCostumerNum(this.minCust, this.maxCust));

      }

      

  },

  getCookiePerHour:function(){
      for (let i = 0; i < time.length; i++) {
          this.cookiePerHour[i] = Math.floor(this.custNum[i]*this.avgCockieSold);
          this.total += this.cookiePerHour[i];
      }
},


// render dubai
renderFunction:function(){
  let theParent = document.getElementById(`parent`);
  let shopName= document.createElement(`h2`);
  theParent.appendChild(shopName);
  shopName.textContent =this.location;

  let unorderedList=document.createElement(`ul`);
  theParent.appendChild(unorderedList);

 for (let i = 0; i < time.length; i++) {
   let listItem=document.createElement(`li`);
     unorderedList.appendChild(listItem);
      listItem.textContent= `${time[i]}: ${this.cookiePerHour[i]} cookies.`
      
  }
  let totalItem=document.createElement(`li`);
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`Total: ${this.total} Cookies.`
}




}
function randomCostumerNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);


}
console.log(dubai.custNum);
dubai.getCustNum();
console.log(dubai.custNum);
dubai.getCookiePerHour();
console.log(dubai.cookiePerHour);
dubai.renderFunction();



//Paris
let paris = {
  location:"Paris",
  custNum: [],
  minCust: 20,
  maxCust: 38,
  avgCockieSold: 2.3,
  cookiePerHour:[],
  total:0,
  getCustNum: function () {
      for (let i = 0; i < time.length; i++) {
          this.custNum.push(randomCostumerNum(this.minCust, this.maxCust));

      }



  },
  getCookiePerHour:function(){
      for (let i = 0; i < time.length; i++) {
          this.cookiePerHour[i] = Math.floor(this.custNum[i]*this.avgCockieSold);
          this.total += this.cookiePerHour[i];
      }

},

// render paris
renderFunction:function(){
  let theParent = document.getElementById(`parent`);
  let shopName= document.createElement(`h2`);
  theParent.appendChild(shopName);
  shopName.textContent =this.location;

  let unorderedList=document.createElement(`ul`);
  theParent.appendChild(unorderedList);

 for (let i = 0; i < time.length; i++) {
   let listItem=document.createElement(`li`);
     unorderedList.appendChild(listItem);
      listItem.textContent= `${time[i]}: ${this.cookiePerHour[i]} cookies.`
      
  }
  let totalItem=document.createElement(`li`);
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`Total: ${this.total} Cookies.`
}





}
function randomCostumerNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);


}
console.log(paris.custNum);
paris.getCustNum();
console.log(paris.custNum);
paris.getCookiePerHour();
console.log(paris.cookiePerHour);
paris.renderFunction();


//Lima



let lima = {
  location: "Lima",
  custNum: [],
  minCust: 2,
  maxCust: 16,
  avgCockieSold: 4.6,
  cookiePerHour: [],
  total:0,
  getCustNum: function () {
      for (let i = 0; i < time.length; i++) {
          this.custNum.push(randomCostumerNum(this.minCust, this.maxCust));

      }
  },

      getCookiePerHour:function(){
          for (let i = 0; i < time.length; i++) {
              this.cookiePerHour[i] = Math.floor(this.custNum[i]*this.avgCockieSold);
              this.total += this.cookiePerHour[i];
          }

  },



// render lima
renderFunction:function(){
  let theParent = document.getElementById(`parent`);
  let shopName= document.createElement(`h2`);
  theParent.appendChild(shopName);
  shopName.textContent =this.location;

  let unorderedList=document.createElement(`ul`);
  theParent.appendChild(unorderedList);

 for (let i = 0; i < time.length; i++) {
   let listItem=document.createElement(`li`);
     unorderedList.appendChild(listItem);
      listItem.textContent= `${time[i]}: ${this.cookiePerHour[i]} cookies.`
      
  }
  let totalItem=document.createElement(`li`);
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`Total: ${this.total} Cookies.`
}







}


function randomCostumerNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);


}
console.log(lima.custNum);
lima.getCustNum();
console.log(lima.custNum);
lima.getCookiePerHour();
console.log(lima.cookiePerHour);
lima.renderFunction();*/
//======================================================================constructor==============================================================
let shops =[];
function Shop(location, minCust,maxCust,avgCockieSold){
    this.location=location;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgCockieSold=avgCockieSold;
    this.custNum=[];
    this.cookiePerHour=[];
    this.total=0;
    
    
    
    shops.push(this);
    
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
 
 


function renderHeader(){
  let theTable=document.createElement('table');
  theParent.appendChild(theTable);
  theTable.setAttribute('id', 'table')
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
  th3.textContent ="Daily Location Total";

  
}
renderHeader();




Shop.prototype.renderRows=function(){ 
let table=document.getElementById('table');

  let tr2=document.createElement("tr");
  table.appendChild(tr2);
  let td=document.createElement("td");
  tr2.appendChild(td);
td.textContent=this.location;

for (let i = 0; i < time.length; i++) {
  
  let td=document.createElement("td");
  tr2.appendChild(td);
  td.textContent=this.cookiePerHour[i];

}
let td3 = document.createElement("td");
tr2.appendChild(td3);
td3.textContent =this.total;
}


function renderFooter(){
  let table=document.getElementById('table');
  let footer=document.createElement('tr');
  table.appendChild(footer);

  let footerTd=document.createElement('td')
  footer.appendChild(footerTd);
  footerTd.textContent="Totals";
  
  for (let i = 0; i < time.length; i++) {
    let totalEachHour=0;
    for (let j = 0; j < shops.length; j++) {
      totalEachHour += shops[j].cookiePerHour[i];
    }
    let footerTotal=document.createElement('td');
    footer.appendChild(footerTotal);
    footerTotal.textContent= totalEachHour;
    
  }
  
    
let totalOfTotals=0;
    for (let j = 0; j < shops.length; j++) {
      
      console.log(shops[j]);
      
      totalOfTotals += shops[j].total;
      
    }
  
    let footerTot=document.createElement('td');
  footer.appendChild(footerTot);
  footerTot.textContent= totalOfTotals;

}




  
  
  
  /*function renderTot() {
    
    let table=document.getElementById('table');
    let footer=document.createElement('tr');
    table.appendChild(footer);
  
    let footerTd=document.createElement('td')
    footer.appendChild(footerTd);
    footerTd.textContent="Totals";
    
    for (let i = 0; i < time.length; i++) {
      let totalEachHour=0;
      
      for (let j = 0; j < shops.length; j++) {
        totalEachHour += shops[j].cookiePerHour[j];
        
      }
      let footerTotal=document.createElement('td');
      footer.appendChild(footerTotal);
      footerTotal.textContent= totalEachHour;
    }
    
    
    
  }*/
  
  
  
  
  seattle.renderRows();
  tokyo.renderRows();
  dubai.renderRows();
  paris.renderRows();
  lima.renderRows();
  renderFooter();
  //renderTot();
  //console.log(totalOfTotals);








