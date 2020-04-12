function validation() {

  let N =document.getElementById('nom');
  let Pe =document.getElementById('prenom');
  let T =document.getElementById('telephone');
  let E =document.getElementById('email');
  let P =document.getElementById('mot');
  let C =document.getElementById('confirme');

  {
  if ((Anom(N)) && (Aprenom (Pe)) && (Aemail(E)) && (Atele(T)) && (P.value.length > 0) && (C.value.length > 0) && (Apwd())){

       alert('Validé');
 
    }
  } return false; 
}
  
function Anom(N){
  let caractere = /[A-Z]/;
  if (N.value.match(caractere)){
    return true
  } else {
  alert("Entrez votre Nom");
  return false;
  }
  }
  function Aprenom(Pe){
  let caractere = /^[A-Za-z]/;
  if (Pe.value.match(caractere)){
    return true
  } else {
  alert("Entrez votre Prenom");
  return false;
  }
}
  
function Aemail() {
            var emailID = document.myForm.Email.value;
            at = emailID.indexOf("@");
            dot = emailID.lastIndexOf(".");
           
            if (at < 1 || ( dot - at < 2 )) {
               alert("Entrez votre E-mail S'il vous plais")
              document.myForm.Email.focus() ;
               return false;
            }
            return true ;
         }
function Atele(T){
          let telecaractere = /^[0-9]/;
          if(T.value.match(telecaractere)){
           return true;
          }else{
           alert("Entrez votre Téléphone");
           return false;
          }      
}      
function Apwd() {
 
          var M1 = document.getElementById("mot").value;
          var M2 = document.getElementById("confirme").value;

          if (M1==M2) {
            return true; 
          
          }

         else {
            alert("Le mots de passe incorrect");
            return false; 
          }
} 
     