function askForMissingDetails(list) {
  
    const propertys = Object.keys(list[0]);
    const answer = [];
    
    for(let i =0; i < list.length; i++) {

      const myNull = list[i];

      for (let j = 0; j < propertys.length; j++) {

        if (list[i][propertys[j]] === null) {
            myNull.question = 'Hi, could you please provide your ' + [propertys[j]] + '.';
            answer.push(myNull);
        }
      }
       
    }

    return answer;
}
