const argv = require('yargs')
                .options({
                    'b':{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                        },
                    'l':{
                        alias: 'list',
                        type: 'boolean',
                        default: 'false',
                        demandOption: false,
                        describe:'Muestra la tabla en consola'
                    },
                    'h':{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        default: 10,
                        describe: 'Número hasta el cual se hará la tabla de multiplicar'
                    }
                })
                .check((argv,options)=>{
                    console.log('yarg-argv',argv);
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero';
                    }else if(isNaN(argv.h)){
                        throw 'HASTA tiene que ser un numero';
                    }else{
                        return true;
                    }
                })
                .argv;
module.exports = argv;