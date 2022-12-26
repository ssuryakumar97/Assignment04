const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload= function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var flags = result.map((ele)=>ele.flag);
   console.log(flags);
   var names=result.map((ele)=>ele.name.common);
   console.log(names);
   var region=result.map((ele)=>ele.region);
   console.log(region);
   var subregion=result.map((ele)=>ele.subregion);
   console.log(subregion);
   var population=result.map((ele)=>ele.population);
   console.log(population);
}