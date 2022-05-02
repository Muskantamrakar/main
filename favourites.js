// write js code here corresponding to favourites.html


<script>
   
    document.querySelector("#form").addEventListener("submit",masaiForm);

    var DataArr= JSON.parse(localStorage.getItem("masaiForm")) || [];

    function masaiForm(){
    event.preventDefault();
    
    var DataObj={

      Home:form.name.value,
      Matches:form.mobile.value,
      Favourites:form.type.value,
      
    };
      DataArr.push(DataObj);
      
      localStorage.setItem("masaiForm",JSON.stringify(DataArr));

      

      window.location.href="contact.html";

    }





  </script>