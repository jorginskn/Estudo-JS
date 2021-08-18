const typeTriangle = (a, b, c) => {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
  
      if (a == b && b == c) {
        console.log('Triângulo equilátero')
      } 

typeTriangle(3, 3, 3)