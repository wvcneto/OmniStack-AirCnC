const multer = require('multer');
const path = require('path');

module.exports = { 
    storage: multer.diskStorage({ // Maneira de armazenar
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // caminho e metodo para navegar nas pastas em qualquer SO
        filename:(req, file, cb) => { // Definir um nome para o arquivo(cb = callback)
            const ext = path.extname(file.originalname); // Extrai extensão do arquivo
            const name = path.basename(file.originalname, ext); // Obtem nome do arquivo (nome base + extensão)

            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};