// const shashi = delay =>{
//     console.log(" Hello after"+delay+" seconds")
// }

// setTimeout(shashi ,4*1000,4);
// setTimeout(shashi ,8*1000,8);


// setInterval( ()=>{
//     console.log(" Repeate the execution after every 2 seconds"),2000
//     });



// let counter=0;
 
//  const IntervalId = setInterval( ()=>{
//      console.log(" Hello World ");
//      counter +=1;
     
// if(counter==5){
//     console.log(" Done");
//     clearInterval(IntervalId)
// }

//  },1000);




// setTimeout(
//     ()=> console.log(" exectutes after  0.5 seconds"),500);
   
//     for (let i=0; i<1e10; i++){
//         // Block node Synchronlusly
//     }


// function LongestString(){
//      let longest="";
     
//     for( i=0; i<arguments.lenghth; i++){
//         if(arguments[i].length>longest.length){
//             longest=+arguments[i];
//         }
//     }
//     return longest
// }

// console.log(LongestString("shashi","kiran","sangeeta","parmeshwar","shivakumar","smitha"));


// ------synchrounous way of reading the file  ( Execution is done one after one synchronous way------
 
//  const  fs = require('fs');
 
//  const  data = fs.readFileSync(__filename);  // current file path
 
//  console.log(" file data",data);
//  console.log("TEST");
 
 //--------------promises ---------------
 
//  const fs = require('fs');
//  const util = require('util');
 
//  const readFile =util.promisify(fs.readFile);
 
//  async function main(){
//      const data = await readFile(__filename);
//      console.log("data is ",data);
//  }

// main();
// console.log("TEST");


// -------second type we can write we can remive util pacake from this  -----

//  const  { readFile } = require('fs').promise
 
//  async function main(){
//      const data = await readFile(__filename);
//      console.log("data is ",data);
//  }

// main();
// console.log("TEST");
