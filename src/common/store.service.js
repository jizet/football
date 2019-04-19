export const stateManager  = {
    state : { 
        filter: {
            type: null,
            value: null
        }
    },    
    setFilter (key, newValue) {
        this.state.filter = {
            value: newValue,
            type: key
        }
    },
    clearFilter (){
        this.state.filter = {
            type: null,
            value: null
        }
    }
}