import {configureStore} from "@reduxjs/toolkit"
import menuReducer from "./menuSlice"
import chatReducer from "./chatSlice";
import videoReducer from "./videoSlice";
import categoryReducer from "./categorySlice"
import suggestionReducer from "./inputSlice"

const store  = configureStore ({
    reducer: {
    menu:menuReducer  ,
    message:chatReducer,
    video:videoReducer,
    category:categoryReducer,
    inputSuggestion:suggestionReducer
  }
})

export default store;   