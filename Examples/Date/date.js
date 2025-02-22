var today = new Date();
console.log(today);
console.log('String format: ' + today);

var day = today.getDay();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? ' PM' : ' AM';
hour = (hour >= 12) ? hour - 12 : hour;

var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];
console.log('Today is ' + daylist[day] + '.');

if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 


var td = new Date();
var dd = td.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
} 

if (mm < 10) {
    mm = '0' + mm;
} 

td = mm + '-' + dd + '-' + yyyy;
console.log(td);

td = mm + '/' + dd + '/' + yyyy;
console.log(td);

td = dd + '-' + mm + '-' + yyyy;
console.log(td);

td = dd + '/' + mm + '/' + yyyy;
console.log(td); 