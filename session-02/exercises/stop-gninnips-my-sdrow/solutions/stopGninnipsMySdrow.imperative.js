function spinWords(string){
    //TODO Have fun :)
    let words=string.split(" ")
    let result=[]
    for(let i=0; i<words.length; i++){
      let letters=""
      if(words[i].length>=5){
          for(let j=words[i].length-1; j>=0; j--){
            letters+=words[i][j]
          }
        }else {
          letters=words[i]
        }
      result.push(letters)
    }
    return result.join(" ")
  }
  