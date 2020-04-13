const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

var inscri = []
const  data = fs.readFileSync('data/gallery.json')
array = JSON.parse(data)

var reserve = []
const  data1 = fs.readFileSync('data/reservation.json')
reserve = JSON.parse(data1)

// send Data to Browser //
app.get('/Home', (req, res) => {
    res.render('index', {array})
});

app.get('/inscription', (req, res) => {
    res.render('inscription')
});

app.get('/reservation', (req, res) => {
    res.render('reservation', {reserve})
});

app.get('/edit/:ID', (req, res) => {
  let editID = req.params.ID
  res.render('edit', {reserve, editID})
});

// Partie Inscription //
app.post('/inscription',(req,res)=>{

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

app.put('/reservation',(req,res)=>{

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


app.post('/edit', (req, res) => {
  
  console.log(req.body, req.params)
  const { ID } = req.body;
  const { Name, Prenom, Email, Phone, cars, DateReservation, DateReservationFin} = req.body;

  reserve.forEach((element, i) => {
      if (element.ID == ID) {
          element.Name = Name;
          element.Prenom = Prenom;
          element.Email = Email;
          element.Phone = Phone;
          element.cars = cars;
          element.DateReservation = DateReservation;
          element.DateReservationFin = DateReservationFin;
      }
  });
  let data = JSON.stringify(reserve, null, 2);
  fs.writeFileSync('data/reservation.json', data, 'utf-8');
  res.redirect('/reservation')
});


app.get('/delete/:ID', (req, res) => {
  reserve = reserve.filter(el => el.ID != req.params.ID);

  // saving data
  const data = JSON.stringify(reserve, null, 2);
  fs.writeFileSync('data/reservation.json', data, 'utf-8');

  res.redirect('/reservation')
  });

app.listen(8080, () => console.log('server listen on port 8080'));
