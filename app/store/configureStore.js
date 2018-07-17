import {createStore} from 'redux' ;
import rootReducer from '../reducers/index';
/*let store=createStore(rootReducer)   ;*/
export default function configureStore( ) {
    const store = createStore(rootReducer,   
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}