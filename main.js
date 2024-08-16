const matrix = [
    [1,3,5],
    [2,4,5],
    [5,7,8]
];

function diagonals() {
       let sumA = 0;
       let sumB= 0;
       let n= matrix.length;
       for(let i = 0;i<n;i++){
          sumA+=matrix[i][i];
          sumB+=matrix[i][n-1-i];  
       }

   return Math.abs(sumA-sumB);

    
}

console.log(diagonals())