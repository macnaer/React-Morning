import { createStore } from "redux";

// const inititalState = 0;

const countReducer = (state = 0, action) =>{
    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return  state -1;
        default:
            return state
    }
}
// const store = createStore(countReducer);
// console.log("Store list = ",store);

// store.subscribe(() =>{
//     console.log("state => ", store.getState());
// })
// store.dispatch({type: "INC"});
// store.dispatch({type: "INC"});
// store.dispatch({type: "INC"});
// store.dispatch({type: "INC"});
// store.dispatch({type: "INC"});
// store.dispatch({type: "DEC"});
// store.dispatch({type: "DEC"});
// store.dispatch({type: "DEC"});
// store.dispatch({type: "DEC"});
const store = createStore(countReducer);
document.getElementById("plus").addEventListener("click", () => {
  store.dispatch({ type: "INC" });
});

document.getElementById("minus").addEventListener("click", () => {
  store.dispatch({ type: "DEC" });
});

const update = () =>{
document.getElementById("counter").innerHTML = store.getState();
}

store.subscribe(update);