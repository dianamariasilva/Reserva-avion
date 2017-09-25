var arraySeat = new Array(32);
var seating = document.getElementsByTagName('td');
for (var i = 0; i < seating.length; i++) {
    seating[i].addEventListener('click',redirect,false);
}
var currentCell;
function redirect(event){
    var seat=(event.target.textContent);
    var show=document.getElementById("show");
    show.innerHTML=seat;

    currentCell = event.target;

    var num = parseInt (show.textContent);
    var obj = arraySeat[num-1];
    if (obj !== undefined) {
        document.getElementById("name").value = obj.name;
        document.getElementById("lastname").value = obj.lastname;
        document.getElementById("dni").value = obj.dni;
    }
}

function reserve(){
    var show = document.getElementById("show");
    var numberSeat = parseInt (show.textContent);
   if (numberSeat.length === 0)
      return;
    arraySeat[numberSeat-1] = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        dni: document.getElementById("dni").value,
    }
    console.log(arraySeat);
     //var html = "";
    
    //html += s;

    currentCell.style.backgroundColor = 'yellow';

    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("dni").value = "";
   }


 function cancelar(){
   var num = parseInt (show.textContent);
   var numberSeat = parseInt (show.textContent);
   var obj = arraySeat[num-1];
   if (obj !== undefined) {
         document.getElementById("name").value = "";
         document.getElementById("lastname").value = "";
         document.getElementById("dni").value = "";
         currentCell.style.backgroundColor = 'transparent';
         arraySeat=[];
    }
 }
 function toList(){
  var html = "";
  for (var i =0; i < arraySeat.length; i++) {
    var data_1 = arraySeat[i];
    if (arraySeat[i]!==undefined){
         
    //alert (data_1);
    var s = "<div>" + 
    "<h1>" +  data_1.name + "</h1>" + "<h2>" + data_1.lastname +"</h2>" + "<h2>" + data_1.dni +"</h2>"+
    "</div>";
    html += s;
  }
 }
   document.getElementById('show2').innerHTML=html;
}

function buscar(){
  var html = "";
  var buscarDni = document.getElementById("dni").value;
  for(var i=1; i<arraySeat.length; i++){
    var data_1 = arraySeat[i-1];
    if(arraySeat[i-1]!= undefined && buscarDni == data_1.dni){
  var s = "<div>" + 
    "<h1>" +  data_1.name + "</h1>" + "<h2>" + data_1.lastname +"</h2>" + "<h2>" + data_1.dni +"</h2>"+
    "</div>";
    html += s;
    }
  }
    document.getElementById('show3').innerHTML=html;
}

