const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// for send data to browser //
const  data = fs.readFileSync('data/gallery.json')
array = JSON.parse(data)

app.get('/Home', (req, res) => {
    res.render('index', {array})
});

// for data inscription //
app.get('/inscription', (req, res) => {
    res.render('inscription')
});


// for add data reservation //
var reserve = []
const  data1 = fs.readFileSync('data/reservation.json')
reserve = JSON.parse(data1)

app.get('/reservation', (req, res) => {
    res.render('reservation', {reserve})
});

// Partie Inscription //
app.post('/inscription',(req,res)=>{
  var inscri = []
  inscri.push({
    
    "ID":inscri.length +1,    
    "Name": req.body.Name,
    "Prenom": req.body.Prenom,
    "Genre": req.body.Genre,
    "E-mail": req.body.Email,
    "Phone": req.body.Phone,
    "Mdp": req.body.Mdp,
    "MdpConfirm": req.body.MdpConfirm,
    "Pays": req.body.Pays
});
  const data = JSON.stringify(inscri, null, 2);
  fs.writeFileSync('data/inscription.json', data, 'utf-8');
  res.redirect('/home')
});

// Partie Réservation  //
app.post('/reservation',(req,res)=>{

  reserve.push({
    
    "ID":reserve.length +1,    
    "Name": req.body.Name,
    "Prenom": req.body.Prenom,
    "Email": req.body.Email,
    "Phone": req.body.Phone,
    "cars": req.body.cars,
    "DateReservation": req.body.DateReservation,
    "DateReservationFin": req.body.DateReservationFin,
    "Date de Permis": req.body.DatePermis
});
  const data = JSON.stringify(reserve, null, 2)
  fs.writeFileSync('data/reservation.json', data, 'utf-8')
  res.redirect('/reservation')
});

// Partie Delete Element //
app.get('/delete/:ID', (req, res) => {
  reserve = reserve.filter(element => element.ID != req.params.ID);

  // saving data //
  const data = JSON.stringify(reserve, null, 2);
  fs.writeFileSync('data/reservation.json', data, 'utf-8');

  res.redirect('/reservation')
  });


// Partie UpDate Element //  
app.put('/reservation', (req, res) => {

  var info = req.body;
  reserve.push(info);
    // saving the array in a file
  const data = JSON.stringify(reserve, null, 2);
  fs.writeFileSync('data/reservation.json', data, 'utf-8');
  
    res.redirect('/reservation');
});

app.post('/update', (req, res) => {
  console.log(req.body, req.params)
  const { id } = req.body;
  const { Name,Prenom,Email} = req.body;

  reserve.forEach((modifier, i) => {
    if (modifier.id == id) {
      modifier.Name = Name;
      modifier.Prenom = Prenom;
      modifier.Email = Email;
      modifier.Phone = Phone;
    }
  });
  res.redirect('/reservation');

});
  
app.listen(8080, () => console.log('server listen on port 8080'));
