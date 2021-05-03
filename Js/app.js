
'use strict';

let time = ['6Am', '7Am', '8Am', '9Am', '10Am', '11Am', '12Pm', '1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm', '7Pm']
//Seattle



let seattle = {
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
lima.renderFunction();
