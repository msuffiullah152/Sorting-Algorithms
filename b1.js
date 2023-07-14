//Set B1
  function removeDupes(ary){
    for(let i=1;i<ary.length;i++){
        let j=i-1;

        if(ary[i]==ary[j]){
          ary.splice(i,1);
        }
    }
   return ary.length;
  }
  console.log(removeDupes(test2));

  module.exports={removeDupes};