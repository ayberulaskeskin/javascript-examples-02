
// let carp=(say1,say2)=> say1*say2;

// console.log(carp(3,5))

// let karesi=(sayi)=> 
// {
  
//   let result =sayi**2;
  
//   return result;
// }
// console.log(karesi(prompt("sayı")))

let pow=(x,n)=>{
  return n== 1 ? x: x* pow(x, n-1);
 
}
console.log(pow(2,4))