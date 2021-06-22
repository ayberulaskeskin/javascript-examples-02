// function stringFormat(str) {
//   {
//     let part1 = str.slice(0, 3);
//     let part2 = str.slice(3);
//     str = part1.toUpperCase() + part2;
//   }
//   //part1 ve part2 kullanılamaz.
//   //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
//   if (true) {
//     return str;
//   }
//   return str.slice(4);
// }

// console.log(stringFormat("ayberulas"))


let add = function (sayi1,sayi2){  //Anonim bir fonksiyon oluşturduktan sonra bu 
  //fonsksiyonu bir değişkene atadık

return sayi1+sayi2;
}
console.log(add(2,6));
console.log(add(2,4));
let mult = function (sayi1,sayi2){  //Anonim bir fonksiyon oluşturduktan sonra bu 
  //fonsksiyonu bir değişkene atadık
 
console.log(add(1,5)*sayi2*sayi1);

}



mult(5,6)