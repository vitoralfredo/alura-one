var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   
    if (event.target.tagName == 'TD') {
        event.target.parentNode.classList.add("fadeOut");
        
        setTimeout(function(){
            event.target.parentNode.remove();
        },500);
    }

});

// Atrela apenas aos pacientes que já estam adicionados
/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Duplo click");
        this.remove();
    });


});*/