//your code here
document.querySelector("#evaluatedText").addEventListener("input",()=>{
   let len = document.querySelector("#evaluatedText").value.length;

   document.querySelector("#letterCount").innerHTML = len;
});