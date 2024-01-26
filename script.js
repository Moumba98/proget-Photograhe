// code filtre


function GetFilter(){
  var e = document.getElementById("mySelect");
  var value = e.value;
  let images = document.querySelectorAll("#galerie img");
        
         for(let image of images){
              image.classList.replace("active", "inactive");

              console.log(image.classList);
              
              if(e.value in image.dataset || e.value === "tous"){
                  image.classList.replace("inactive", "active");
                  
              };
          };

}

/* window.onload = () => {
   let filters = document.querySelectorAll("#filters div");
  
   for(let filter of filters){
       filter.addEventListener("click", function(){
           let tag = this.id;
        
          let images = document.querySelectorAll("#galerie img");

          console.log(tag);

        
          for(let image of images){
               image.classList.replace("active", "inactive");
              
               if(tag in image.dataset || tag === "tous"){
                   image.classList.replace("inactive", "active");
                  
               };
           };
       });
   }

  
 }

let formulaire = document.getElementById("monFormulaire");
 ecouter l'evenemnt du formulaire
 formulaire.addEventListener("submit", function (event){
  empecher le comportement par defaut du formulaire
  event.preventDefault();

  let nom = document.getElementById("nom");
  let Email = document.getElementById("Email");
  let Message = document.getElementById("Messange");

 
  alert("vous avez été enregistrer");
  

})*/




