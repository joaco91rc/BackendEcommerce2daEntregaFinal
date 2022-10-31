const mongoose = require('mongoose');
const usuarios = require('./models/usuarios.js');

const users = [
	{ nombre: 'Fabian', apellido: 'Salomone', dni: '30355874' },
	{ nombre: 'Lara', apellido: 'Estrada', dni: '29575148' },
	{ nombre: 'Joaco', apellido: 'Alvarez', dni: '38654790' },
	{ nombre: 'Jhoan', apellido: 'Carbonero', dni: '26935670' }
];

const mon = async () => {
	const CS = 'mongodb+srv://user:user@clustercoderbackend.yov16h5.mongodb.net/?retryWrites=true&w=majority';
	try {
		await mongoose.connect(CS);
		// const response = await usuarios.insertMany(users);
		// console.log(response);
		const response = await usuarios.updateOne({ dni: 26935670 }, { $set: { nombre: 'Juan Carlos' } });
		console.log(response);
	} catch (err) {
		console.log(err);
	}
}

mon();