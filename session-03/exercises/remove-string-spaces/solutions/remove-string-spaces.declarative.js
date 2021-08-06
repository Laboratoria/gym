//const noSpace=(x)=>x.replace(/\s/g,'') or:
function noSpace(x){
    return x.split(" ").filter(element=>element!="").join("")
  }
  