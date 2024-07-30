let curry=(fun)=>{
    return function curried(...args){
        if(args.length>=fun.length){
            return fun(...args)
        }else{
            return function(...args2){
                return curried(...args,...args2)
            }
        }
    }
}

let sum=(a,b,c)=>{
    return a+b+c
}

let curriedSum=curry(sum)

console.log(curriedSum(1)(2)(3))