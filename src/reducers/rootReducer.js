const initialState = {
    posts: [
        {
            title: "Post 1",
            body: "Post one body"
        },
        {
            title: "Post 2",
            body: "Post two body"
        },
    ]
}

export const rootReducer = (state = initialState, action) => {
    return state;
}
