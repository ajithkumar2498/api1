function covidData(){
  let showCovidData = new Promise ((resolve, reject)=>{

    let request= new XMLHttpRequest() 
    request.open('GET',"https://data.covid19india.org/v4/min/data.min.json")
    request.send()
    request.onload = (function (){
                  var data            
               if(request.status==200){
                data= JSON.parse(request.response)
                resolve(data);
               }else{
                reject("data")
               }  }
    )
  })
   showCovidData.then((data)=>{console.log(data) 
    let district=document.getElementsByClassName("datas");
    document.getElementsByClassName("card-text").innerHTML=district.value
    let confirmed=document.getElementsByClassName("card-text1");
    let Deceased=document.getElementsByClassName("card-tex2");
    let Tested=document.getElementsByClassName("card-text3")
    let Recovered=document.getElementsByClassName("card-text4");
    let Vaccinated1=document.getElementsByClassName("card-text5");
    let Vaccinated2=document.getElementsByClassName("card-text6");
    confirmed.innerHTML=data.TN.total.confirmed
    Deceased.innerHTML=data.TN.total.deceased
    Tested.innerHTML=data.TN.total. tested
    Recovered.innerHTML=data.TN.total.recovered
    Vaccinated1.innerHTML=data.TN.total.vaccinated1
    Vaccinated2.innerHTML=data.TN.total.Vaccinated2
    // let totalCases= data
    console.log(data.TN)
    console.log(data.TN.total.vaccinated1)
    console.log(district)
  }).catch((err)=>{console.log(err)})
 }




