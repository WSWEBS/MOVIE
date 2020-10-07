let arbc = document.getElementById("ar");
let english = document.getElementById("en");
let title = document.getElementById("title");
let ht = document.getElementById("h1bi");
let p1 = document.getElementById("pg");
let ag = document.getElementById("ah");
arbc.onclick= ()=>{
setlng("arbc");
localStorage.setItem("lang","arbc");
};
english.onclick = ()=>{
  setlng("english");
  localStorage.setItem("lang","english");
};

onload = ()=>{
 setlng(localStorage.getItem("lang"));
};
function setlng(getlng){
  if(getlng === "arbc"){
  title.innerHTML = "WS افلام  ";
ht.innerHTML ="أفضل 10 أفلام من مارفل على الإطلاق";
p1.innerHTML="لقد أثرت الكوميديا الرائعة بشكل لا يُحصى على الخطط والتصويرات الموجودة في الأفلام القياسية ، كما أن التحولات الفورية للعناوين النموذجية قد تجاوزت مدى الحياة. ليس بأي حال من الأحوال ، فبعد ترتيب عالم مارفل السينمائي (MCU) الشهير من استديوات مارفل ، فاجأت أشكال الكتاب الهزلي مارفل عالم الأفلام المتقدم ، ووصلت إلى أعلى القوالب لكل من الأفلام والتصنيفات الأساسية";
ag.innerHTML="عني";
}

else if(getlng === "english"){
title.innerHTML = " WS films";
ht.innerHTML= "The 10 Best Marvel Movies Ever" ;
p1.innerHTML ="Wonder funnies have incalculably affected plans and portrayals found in standard films and the immediate transformations of exemplary titles have crossed lifetimes. Not in any event, tallying the greatly famous Marvel Cinematic Universe (MCU) arrangement from Marvel Studios, Marvel comic book variations have surprised the advanced film world, arriving at the most elevated statures of both the movies and basic rankings.";
ah.innerHTML ="About";
}
}

