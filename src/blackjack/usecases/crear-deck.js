import _ from 'underscore';

// export const miNombre = 'Fernando';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array <string>} tipos Ejemplo: ['C','D','H','S']
 * @param {Array <string>} especiales Ejemplo: ['C','D','H','S']
 * @returns {Array <string>} retorna un nuevo deck
 */

export const crearDeck = (tipos, especiales ) => {

    if (!tipos || tipos.length === 0) throw new Error('Tipos de cartas es obligatori como una arreglo de string');
    if (!especiales || especiales.length === 0) throw new Error('Tipos de cartas especiales es obligatori como una arreglo de string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;