function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }
  
 let arr = new Array();
 arr = [25,15,20,30,45,12];
 console.log("Не по возрастанию",arr)
arr.sort(function(a,b){ 
  return a-b
})
 console.log("по возврастанию",arr)
