'use strict';

function collectSameElements(collectionA, objectB) {
 var result=new Array();
 var A=new Array();
 var B=new Array();
 for(var i<collectionA.length;i++){
  A[i]=collectionA.key;
 }
 for(var i<collectionB.length;i++){
   B[i]=collectionB.value;
  }
  for(var i=0;i<A.length;i++){
   var temp=A[i];
     for(var j=0;j<B.length;j++){
         if(temp==B[j]){
           result[index]=temp;
           index++;
         }
     }
   }
  return result;
}
