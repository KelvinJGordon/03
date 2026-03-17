//LOOPS

//FOR LOOPS (USE IF YOU KNOW THE ENDPOINT OR ENDING VALUE)

for (let num = 1; num <= 10; num++){
    console.log(num);
}

console.log("SECOND LOOP")

let sum = 0
for (let x = 1; x <= 100; x++){
    if(x % 2 === 0){
        sum = sum + x;
    }
}

console.log(sum);


console.log("THIRD LOOP")


let language = "JavaScript";
for (let i = 0; i < language.length; i++){
    console.log(language.charAt(i))
};



//NESTED LOOP


for(let i = 1; i <= 3; i++){
    for (let j =1; j<=3; j++){
        console.log("Row",i , "Column", j);
    }
}



//BREAK AND CONTINUE

for(let i = 1; i <= 5; i++){
    if( i ===3){
        break;
    }
    console.log(i);
}


console.log("ANOTHER LOOP");

//CONTINUE
for(let i = 1; i <= 5; i++){
    if( i ===3){
        continue;
    }
    console.log(i);
}


//MULTIPLE COUNTERS FOR SINGLE LOOP

for(let i = 1, j =10; i <= 10 && j >= 1; i++, j--){
    console.log(i,j);
}


console.log("ANOTHER LOOP");

//WHILE LOOP (USE IF YOU DO NOT HAVE A CLEAR ENDPOINT OR ENDING VALUE)

let count = 1;
while( count <= 5){
    console.log(count);
    count++;
}

console.log("ANOTHER LOOP");


//DO-WHILE LOOP (Runs code once before checking condition)

let num = 1;
do{
    console.log(num);
    num++;
}
while(num <= 5);


console.log("ANOTHER LOOP");



//INFINITE LOOP (LOOP THAT GOES ON FOREVER, USUALLY FROM A MISTAKE)



//TASK: PRINT THE PYRAMID
/*
*
**
***
****
*****
*/
let n =5;
  for (let i = 1; i <= n; i++) {
    let str = "";
    // Inner loop controls the number of stars in each row
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    // Print the row to the console and move to the next line
    console.log(str);
  }

