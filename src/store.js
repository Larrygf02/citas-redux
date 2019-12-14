import { createStore } from 'redux'
import reducer from './reducers'
import { obtenerStateStorage, guardarStateStorage } from './localStorage'

//const initialState = [];

const storageState = obtenerStateStorage()

const store = createStore(
    reducer,
    storageState,
    //initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// cada vez cambia algo en el state
store.subscribe( () => {
    guardarStateStorage({
        citas: store.getState().citas
    })
})

export default store;