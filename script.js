//XML HTTp REQUEST
// These is used to interact with the server via api

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res)
    
    // for (var i = 0; i < res.length; i++) {
    //     var reg = res[i].region;
    //     var name = res[i].name.common;
    //     // console.log("Region --------->>>", reg);
    //     // console.log("name----------->>>>:", name);
    // }

    // var Cname = res.filter((ele) => ele.region == "Europe" )
    // var countryname = Cname.map((ele) => ele.name.common )
    // console.log(countryname)

    var country = res.filter((ele) => ele.region == "Asia" )
    // console.log(country)
    var population = country.map((ele) => ele.population )
    // console.log(population)
    var addPopulation = population.reduce((acc,cv) => acc+cv , 0)
    console.log(addPopulation)
    // var countryname = Cname.map((ele) => ele.name.common )
    // console.log(countryname)

    // var America = res.filter((ele) => ele.region == "NorthAmerica" )
    // console.log(America)
    
    // var population = res.filter((ele) => ele.population > 100000 )
    // console.log(population)
}