// write js code here corresponding to index.html
// You should add submit event on the form
// write js code here corresponding to favourites.html
document.querySelector("masaiForm").addEventListener("submit",myfun);

 var matcharr = JSON.parse(localStorage.getItem)

 function myfun(){
     event.preventDefault();
     var matchobj = {
         matchno:masaiForm.matchNum.value,
         team_a:masaiForm,teamA.value,
         team_b:masaiForm,teamB.value,
         date:masaiForm,date.value,
         venue:masaiForm,venue.value,
     }

     consol.log(matcharr)

     matcharr.push(matchobj)

     localStorage.setItem("schedule",JSON.stringify(matcharr))
 }