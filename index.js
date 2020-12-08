// Add your functions here

function map(arr, fct){
  let arr2=[]
  for(let i=0;i <arr.length;i++){
    arr2.push(fct(arr[i]));
  }
  return arr2;
}

function reduce(arr, fct, start){
 let r= (!!start) ? start : arr[0];
 let i= (!!start) ? 0 : 1;
 for (let i=0; i< arr.length;i++){
    r = cb(src[i], r)
 }
 
 return r;
}