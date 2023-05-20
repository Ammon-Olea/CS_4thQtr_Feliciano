alert("Uh oh! It looks like your time machine is bringing you back in time!");

var theropods = ["Acrocanthosaurus","Allosaurus","Baryonyx","Carcharodontosaurus","Ceratosaurus","Deinonychus","Dilophosaurus","Ostafrikasaurus"]
function theropod(){
	alert(theropods[0]);
	alert(theropods[1]);
	alert(theropods[2]);
	alert(theropods[3]);
	alert(theropods[4]);
	alert(theropods[5]);
	alert(theropods[6]);
	alert(theropods[7]);
}

var sauropods = ["Apatosaurus","Brachiosaurus","Brontosaurus","Camarasaurus","Diplodocus","Jobaria","Kotasaurus","Nigersaurus","Supersaurus"]
function sauropod(){
	alert(sauropods[0]);
	alert(sauropods[2]);
	alert(sauropods[3]);
	alert(sauropods[4]);
	alert(sauropods[5]);
	alert(sauropods[6]);
	alert(sauropods[7]);
}

var ornithopods = ["Arstanosaurus","Barilium","Burianosaurus","Choyrodon","Dryosaurus","Eolambia","Jeyawati","Lamberosaurus"]
function ornithopod(){
	alert(ornithopods[0]);
	alert(ornithopods[2]);
	alert(ornithopods[3]);
	alert(ornithopods[4]);
	alert(ornithopods[5]);
	alert(ornithopods[6]);
	alert(ornithopods[7]);
}

var ceratopsians = ["Centrosaurus","Chasmosaurus","Diabloceratops","Kosmoceratops","Nasutoceratops","Styracosaurus","Torosaurus","Triceratops"]
function ceratopsian(){
	alert(ceratopsians[0]);
	alert(ceratopsians[2]);
	alert(ceratopsians[3]);
	alert(ceratopsians[4]);
	alert(ceratopsians[5]);
	alert(ceratopsians[6]);
	alert(ceratopsians[7]);
}

var stegosaurs = ["Chungkingosaurus","Huayangosaurus","Kentrosaurus","Miragaia","Monkonosaurus","Wuerhosaurus","Tuojiangosaurus","Stegosaurus"]
function stegosaur(){
	alert(stegosaurs[0]);
	alert(stegosaurs[2]);
	alert(stegosaurs[3]);
	alert(stegosaurs[4]);
	alert(stegosaurs[5]);
	alert(stegosaurs[6]);
	alert(stegosaurs[7]);
}

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});
