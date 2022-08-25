
const {crearArchivoAsync} = require('./helpers/multiplicar_alternative');
const argv = require('./config/yargs');

require('colors');



console.clear();

/*
const [ , , arg3 = 'base=5'] = process.argv;
const [,value = 5] = arg3.split('=');
base = Number(value);
*/

crearArchivoAsync( base = argv.base,
                   list = argv.list,
                   h = argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo,' creado ASYNC'))
    .catch(err => console.log(err));
