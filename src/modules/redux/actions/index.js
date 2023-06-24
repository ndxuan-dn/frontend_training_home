

export const add = (data) => {
    return {
        type: "students/add",
        payload: data
    }
}

export const deleteItem = (name) => {

    return {
        type: "students/delete",
        payload: name
    }
}

export const editItem = (data) => {
    return {
        type: "students/edit",
        payload: data
    }
}



