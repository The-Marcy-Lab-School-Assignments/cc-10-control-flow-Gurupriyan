//1
function greatestOfTwo(a, b){
  return (a>b) ? a : b;
}

//2
function greatestOfThree(a, b, c){
  if ( a > b && a > c){
      return a;
  }else if (b > a && b > c){
      return b;
  }else {
      return c;
  }
}

//3
function greatestOfFour(a, b, c, d){
  if ( a > b && a > c && a> d){
      return a;
  }else if (b > a && b > c && b > d){
      return b;
  }else if (c > a && c > b && c > d) {
      return c;
  }else {
      return d;
  }
}


//4
function leastOfFour(a, b, c, d){
  if ( a < b &&  a < c && a < d){
      return a;
  }else if (b < a && b < c && b < d){
      return b;
  }else if (c < a && c < b && c < d) {
      return c;
  }else {
      return d;
  }
}

// console.log(greatestOfTwo(4,5));
// console.log(greatestOfThree(3, 6, 1));
// console.log(greatestOfFour(8, 4, 1, 3));
console.log(leastOfFour(9, 4, 5, 1));