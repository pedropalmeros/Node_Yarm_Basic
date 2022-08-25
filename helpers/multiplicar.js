fs = require('fs');



const crearArchivo = ( base = 5 )=>{
    try{
        return new Promise((resolve,reject)=>{
            console.log('=========================');
            console.log('PROMISE      TABLA DEL ',base    );
            console.log('=========================');
        
            let salida = '';
            let fileName = `tabla-${base}.txt`
        
            for( let i =1 ; i <= 10; i++ ){
                salida += `PROMISE ${base} x ${ i } = ${base * i }\n`;
            }
        
            console.log(salida);
        
            fs.writeFileSync(`tabla-${base}.txt`,salida);
            resolve(`tabla-${base}.txt`);
        });
    }
    catch (err){
        throw err;
    }
        
}

module.exports = {
    crearArchivo
};
