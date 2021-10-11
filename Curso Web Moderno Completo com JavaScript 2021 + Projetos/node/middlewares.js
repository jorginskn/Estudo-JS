// middleware pattern (chain of responsability)

//DECLARANDO FUNÇÃO 1 COM CONTEXTO E NEXT 
const passo1 = (ctx, next) =>{
    ctx.valor1 ='mid1';
    next()
}
//DECLARANDO FUNÇÃO 2 COM CONTEXTO E NEXT 
const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2';
    next()
} //DECLARANDO FUNCAO 3 COM CONTEXTO
const passo3 = ctx =>{
    ctx.valor3 = 'mid3';
}
//Função que executa os middlewares chamando next 
const exec = (ctx, ...middlewares) =>{
 /*Para executar os passos  passamos como atributo o indice */   
    const execPasso = indice => {
        // SE  MIDDLEWARES = TRUE  E O INDICE   < QUE MIDDLEWARES .LENGHT
        middlewares  && indice < middlewares.length &&
        // a função chama ela msm passando indice + 1 
            middlewares[indice](ctx, () =>execPasso(indice+1))
    }
    //chamei a função do passo 0 
    execPasso(0)
}
const ctx = {}
//ordem de execução dos passos
exec(ctx, passo1,passo2, passo3 )
console.log(ctx)