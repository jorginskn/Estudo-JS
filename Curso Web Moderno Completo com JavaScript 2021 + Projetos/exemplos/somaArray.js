let lista1 = [3, 4, 1, 5, 1, 1]
let lista2 = [2, 3, 4, 3, 2,1]
let lista3 = [0, 0, 0, 0, 0, 0]
const  todos = lista3.concat(lista1, lista2)


for (i in  (6)){
    lista3[i] = lista1[i] + lista2[i]
}
console.log(todos)