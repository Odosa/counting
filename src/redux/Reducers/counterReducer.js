

export default function counterReducer(state={value:0}, action) {
    switch(action.type){
        case 'INCREASE':
            return {value : state.value + 1}
        case 'DECREASE':
            return {value: state.value - 1}
        case 'RESET':
            return {value : state.value = 0}
        default :
            return state;
    }
}