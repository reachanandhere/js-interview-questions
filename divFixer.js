let str = "<div><div><div>"

let updatedStr = ""
let charCollector = ""
let comparator = "div>"
let counter = 0
for(let i=0;i<str.length;i++){
    if(str[i]=='<') {
        for(let j=1;j<5;j++){
            charCollector+=str[i+j]
        }
       
       
    }


    if(charCollector===comparator)  {
        counter++
        if(counter%2==0){
            updatedStr+= str[i] + "/"
            charCollector="" 
            continue
         }
    }
    

    updatedStr+=str[i]
    charCollector=""

}

console.log(updatedStr)
