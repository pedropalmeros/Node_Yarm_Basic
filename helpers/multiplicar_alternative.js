fs = require('fs');

const colors = require('colors');



const crearArchivoAsync = async ( base = 5, list = true, hasta = 10 )=>{
    try{
        console.log('========================='.green);
        console.log(' Async  TABLA DEL '.green,colors.blue(base)    );
        console.log('========================='.green);
    
        let salida = '';
        let fileName = `tabla-${base}.txt`
    
        for( let i =1 ; i <= hasta; i++ ){
            salida += `ASYNC ${base} ${'x'.red} ${ i } ${'='.red} ${base * i }\n`;
        }
        if(list){        
            console.log(salida);
        }
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
    }
    catch(err){
        throw err;
    }

}


module.exports = {
    crearArchivoAsync
};
