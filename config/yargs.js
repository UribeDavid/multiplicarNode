const options = {
    base: {
        demand: true,
        alias: 'b'
      },
      limite: {
        alias: 'l',
        default: 10
      }
}

const argv = require('yargs')
  .command('listar','Imprime la tabla de multiplicar', options)
  .command('crear', 'Crea un archivo con la tabla de multiplicar con limite',options)
  .argv;

  module.exports = {
      argv
  }