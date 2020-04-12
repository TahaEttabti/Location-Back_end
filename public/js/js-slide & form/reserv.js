function validation() {

    let N =document.getElementById('nom');
    let Pe =document.getElementById('prenom');
    let T =document.getElementById('telephone');
    let E =document.getElementById('email');
    let Ca = document.getElementById('cars');
    let Dd = document.getElementById('dateDebut');
    let Df = document.getElementById('dateFin');
    let P =document.getElementById('dateP');
    let affich = document.getElementById('affichage');

    {
      Ca.options[Ca.selectedIndex].text;

    if ((Anom(N)) && (Aprenom (Pe)) && (Aemail(E)) && (Atele(T)) && (DateR()) && (P.value.length > 0) && (Dd.value.length > 0) && (Df.value.length > 0)&& (Apermis())) {

      alert("Validé");
      affich.style.display="block";
      affich.innerHTML="Votre Nom : " + N.value.fontcolor("white")+ "<br>"  + "Votre Prenom : " + Pe.value.fontcolor("white") + "<br>" + "Votre Email : " + E.value.fontcolor("white") + "<br>" + "Votre Telephone : "  + T.value.fontcolor("white") + "<br>"  + "La Date de départ : " + Dd.value.fontcolor("white") +  "<br>"  + "La Date de Fin : " + Df.value.fontcolor("white") + "<br>"+ "Votre produit : " + Ca.value.fontcolor("white");     
      } 
    } return false; 
  }
  function Anom(N){
    let lettre = /^[A-Za-z]/;
    if (N.value.match(lettre)){
      return true
    } else {
    alert("Entrez votre Nom");
    return false;
    }
    }
    function Aprenom(Pe){
    let lettre = /^[A-Za-z]/;
    if (Pe.value.match(lettre)){
      return true
    } else {
    alert("Entrez votre Prenom");
    return false;
    }
  }
    
  function Aemail() {
        let emailID = document.myForm.Email.value;
              at = emailID.indexOf("@");
              dot = emailID.lastIndexOf(".");
             
              if (at < 1 || ( dot - at < 2 )) {
                 alert("Entrez votre E-mail S'il vous plais")
                document.reserv.Email.focus() ;
                 return false;
              }
              return true ;
           }
  function Atele (T){
            let telenum = /^[0-9]/;
            if(T.value.match(telenum)){
             return true;
            }else{
             alert("Entrez votre Téléphone");
             return false;
            }      
  }    
  function DateR() {
      let d = new Date(document.getElementById('dateDebut').value)/(24*60*60*1000);
      let f = new Date(document.getElementById('dateFin').value)/(24*60*60*1000);
         if(d>=f) {
            alert("la date de départ doit être inférieur à date de fin");
            return false;
            } else {
            return true;
    } 
  }
  function Apermis() {
    var date1 =new Date(document.getElementById('dateP').value); 
    var date2 =new Date(); 
    var datetext =date1.getDate()+date1.getMonth()*30+date1.getFullYear()*365; 
    var datenow =date2.getDate()+date2.getMonth()*30+date2.getFullYear()*365; 
    if(datenow-datetext<=730) 
    {  
       alert("désolé votre date de permis n'est pas valide");
       return false;
    } else {
        return true;
    } 
  }
