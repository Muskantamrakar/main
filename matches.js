// write js code here corresponding to matches.html
var DataArr=JSON.parse(localStorage.getItem("schedule"));
document.querySelector("#filterVenue").addEventListener("change",haldefilter);

function haldefilter(){
    var selector=document.querySelector("#filterVenue").ariaValueMax;

    var filter=DataArr.filter(function(el){
        return el.venue==selector;
    });

    dispayData(filter);
}
dispayData(DataArr);

var FavouritesArr=ISON.parse(localStorage.get("favourites"))||[];

function dispayData(DataArr){
    document.querySelector("tbody").innerHTML="";
    DataArr.forEach(function(el)){
        var tr=document.createElement("tr");
        
        var td1=document.createElement("td");
        td1.textContent.el.MatchNumber;

        var td2=document.createElement("td");
        td2.innerText.el.TeamA;

        var td3=document.createElement("td");
        td3.innerText.el.TeamB;

        var td4=document.createElement("td");
        td4.innerText.el.Date;

        var td5=document.createElement("td");
        td5.innerText.el.Vanue;

        var td6=document.createElement("td");
        document.createElement("td");
        td6.innerText="Favourites";
        td6.style.color="green"
        td6.style.cursor="pointer";

        td6.addEventListener("click",function(){
            Favouritsfunction(el);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    });
}
