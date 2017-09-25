$(document).ready(function() {
  var arraySeat = new Array(32);
  var seating = $("td");
  console.log(seating);
  $("td").click(redirect);
  // for (var i = 0; i < seating.length; i++) {
  //   seating[i].on("click",redirect,false);
  // }
  var currentCell;
  function redirect(event){
  console.log(event);
      var asiento = (event.target.textContent);
      console.log(asiento);
      $("#asiento").val(asiento);
      // var mostrar = $("#mostrar");
      // mostrar.html(asiento);
  
      currentCell = event.target;
  
      var num = parseInt (mostrar.textContent);
      var obj = arraySeat[num-1];
      if (obj !== undefined) {
          $("#name").val(obj.name);
          $("#lastname").val(obj.lastname);
          $("#dni").val(obj.dni);
      }
  }
  $("#reservar").click(reservar);
  function reservar(){
    console.log("reservar");
    console.log(arraySeat);
      var numeroAsiento = parseInt ($('#asiento').val());
     if (numeroAsiento != '')
      arraySeat[numeroAsiento-1] = {
          name: $("#name").val(),
          lastname: $("#lastname").val(),
          dni: $("#dni").val(),
      }
      console.log(arraySeat);
       //var html = "";
      
      //html += s;
  
      currentCell.style.backgroundColor = 'yellow';
  
      $("#name").val("");
      $("#lastname").val("");
      $("#dni").val("");
     }
  
  $("#cancelar").click(cancelar);
   function cancelar(){
     var num = parseInt (mostrar.textContent);
     var numeroAsiento = parseInt (mostrar.textContent);
     var obj = arraySeat[num-1];
     if (obj !== undefined) {
           $("#name").val("");
           $("#lastname").val("");
           $("#dni").val("");
           currentCell.style.backgroundColor = 'transparent';
           arraySeat=[];
      }
   }

   $("#listar").click(listar);
   function listar(){
    var html = "";
    for (var i =0; i < arraySeat.length; i++) {
      var dato_1 = arraySeat[i];
      if (arraySeat[i] !== undefined){
           
      //alert (dato_1);
      var s = "<div>" + 
      "<h1> Nombre:" +  dato_1.name + "</h1>" + "<h2>Apellido: " + dato_1.lastname +"</h2>" + "<h2>DNI: " + dato_1.dni +"</h2>"+
      "</div>";
      html += s;
    }
   }
     $('#mostrar2').html(html);
  }
  
  function buscar(){
    var html = "";
    var buscarDni = $("#dni").val();
    for(var i=1; i<arraySeat.length; i++){
      var dato_1 = arraySeat[i-1];
      if(arraySeat[i-1]!= undefined && buscarDni == dato_1.dni){
    var s = "<div>" + 
      "<h1>Nombre: " +  dato_1.name + "</h1>" + "<h2> Apellido:" + dato_1.lastname +"</h2>" + "<h2>DNI: " + dato_1.dni +"</h2>"+
      "</div>";
      html += s;
      }
    }
      $('#mostrar3').html(html);
  }
  
  
});
