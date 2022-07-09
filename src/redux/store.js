import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit"; 

export default function createStore(){
    let store =configureStore(
        reducer
    )
    return store
}

// export const store =configureStore(
//             reducer
//         )