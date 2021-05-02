
'use strict';

let time = ['6Am', '7Am', '8Am', '9Am', '10Am', '11Am', '12Pm', '1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm', '7Pm']
//Seattle



let Seattle = {
    seattleCustNum: [],
    seattleMinCust: 23,
    seattleMaxCust: 65,
    seattleAvgCockieSold: 6.3,
    getSeattleCustNum: function () {
        for (let i = 0; i < time.length; i++) {
            this.seattleCustNum.push(randomSeattleCostumerNum(this.SeattleMinCust, this.SeattleMaxCust));

        }



    }


}


function randomSeattleCostumerNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);


}
console.log(Seattle.seattleCustNum);
Seattle.getSeattleCustNum();
console.log(Seattle.seattleCustNum);



//Tokyo


let Tokyo = {
    tokyoCustNum: [],
    tokyoMinCust: 3,
    tokyoMaxCust: 24,
    tokyoAvgCockieSold: 1.2,
    getTokyoCustNum: function () {
        for (let i = 0; i < time.length; i++) {
            this.tokyoCustNum.push(randomTokyoCostumerNum(this.tokyoMinCust, this.tokyoMaxCust));

        }



    }


}


function randomTokyoCostumerNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);


}
console.log(Tokyo.tokyoCustNum);
Tokyo.getTokyoCustNum();
console.log(Tokyo.tokyoCustNum);


//Dubai 


let Dubai = {
    dubaiCustNum: [],
    dubaiMinCust: 11,
    dubaiMaxCust: 38,
    dubaiAvgCockieSold: 3.7,
    getDubaiCustNum: function () {
        for (let i = 0; i < time.length; i++) {
            this.dubaiCustNum.push(randomDubaiCostumerNum(this.dubaiMinCust, this.dubaiMaxCust));

        }



    }


}


function randomDubaiCostumerNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);


}
console.log(Dubai.dubaiCustNum);
Dubai.getDubaiCustNum();
console.log(Dubai.dubaiCustNum);


//Paris
let Paris = {
    parisCustNum: [],
    parisMinCust: 20,
    parisMaxCust: 38,
    parisAvgCockieSold: 2.3,
    getParisCustNum: function () {
        for (let i = 0; i < time.length; i++) {
            this.parisCustNum.push(randomParisCostumerNum(this.parisMinCust, this.parisMaxCust));

        }



    }


}


function randomParisCostumerNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);


}
console.log(Paris.parisCustNum);
Paris.getParisCustNum();
console.log(Paris.parisCustNum);


//Lima



let Lima = {
    limaCustNum: [],
    limaMinCust: 2,
    limaMaxCust: 16,
    limaAvgCockieSold: 4.6,
    getLimaCustNum: function () {
        for (let i = 0; i < time.length; i++) {
            this.limaCustNum.push(randomLimaCostumerNum(this.limaMinCust, this.limaMaxCust));

        }



    }


}


function randomLimaCostumerNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);


}
console.log(Lima.limaCustNum);
Lima.getLimaCustNum();
console.log(Lima.limaCustNum);
