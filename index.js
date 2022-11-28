// Code your solutions in this file
const writeCards = (array,surprise)=>{
    let emptyArray =[]
    let item = "";

    for (item of array){
         emptyArray.push( `Thank you, ${item}, for the wonderful ${surprise} gift!`) 
    }
    return emptyArray

}

const countDown = (number)=>{
    for (let i = number;i>=0;i--){
        console.log(i)
    }
}