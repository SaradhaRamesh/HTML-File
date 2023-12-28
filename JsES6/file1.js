export const add  = (a,b,c,d) => {return a+b+c+d}


export const spreadAdd= (...a)=>{
    let c=0;
    for(let val of a){
        c = c + val;
    }

    return c;
}