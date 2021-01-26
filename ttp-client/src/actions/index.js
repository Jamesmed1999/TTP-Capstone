export const visible = () => {
    return {
        type: "VISIBLE",
        payload: {
            expanded: true
        }
    }
}

export const hidden = () => {
    return {
        type: "HIDDEN",
        payload: {
            expanded: false
        }
    }
}