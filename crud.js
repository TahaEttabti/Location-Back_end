app.get('/edit/:id', (req, res) => {
	const { id } = req.params;
	let dataId;

	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}
	}

	res.render('edit', { data: data[dataId] });
});

app.post('/edit/:id', (req, res) => {
	const { id } = req.params;
	const { title, country } = req.body;

	let dataId;
	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}
	}

	data[dataId].Title = title;
	data[dataId].Country = country;

	fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4));
	res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
	const { id } = req.params;

	const newData = [];
	for (let i = 0; i < data.length; i++) {
		if (Number(id) !== data[i].ID) {
			newData.push(data[i]);
		}
	}

	data = newData;
	fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4));
	res.redirect('/');
});