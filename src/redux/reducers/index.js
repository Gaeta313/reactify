// qui andremo a definire la nostra funzione reducer
// il reducer prende lo stato attuale dell'app, controlla l'azione che è
// stata appena dispatchata e genere il nuovo stato dell'applicativo

// ma da dove cominciamo? qual è lo stato iniziale?

const initialState = {
  obj: {
    artists:[],
  },
}

// il reducer è una PURE FUNCTION
// quindi non possiamo mutare i nostri parametri

const mainReducer = (state = initialState, action) => {
  // da questa funzione, in ogni possibile situazione
  // io devo restituire il NUOVO STATO dell'applicativo
  switch (action.type) {
    case 'ADD_TO_ARTISTS' :
      return {
        ...state,
        obj: {
          ...state.obj,
          artists: [...state.obj.artists, action.payload],
          //   NON FARE!!! content: state.cart.content.push(action.payload)
          //   content: state.cart.content.concat(action.payload),
        },
      }
    default:
      return state
    // worst case scenario: torno lo stato come l'ho appena trovato
    // --> senza rompere niente
  }
}

export default mainReducer
