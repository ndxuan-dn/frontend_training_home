export const students = (state = [], action) => {
    switch (action.type) {
        case "students/add":
            return [...state, action.payload];
        case "students/delete": 
            return state.filter(item => item.name !== action.payload);

        case "students/edit":
            return state.filter(item => item.name = action.payload.name)
        default: 
            return state;
    }
}

