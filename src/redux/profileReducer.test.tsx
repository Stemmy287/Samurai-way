import {addPostCreator, deletePost, ProfilePageType, profileReducer} from "./profileReducer";

test('add new post', () => {
    const state: ProfilePageType = {
        postDate: [
            {id: 1, message: 'Hi, how are you?', likeCounter: 15},
            {id: 2, message: 'It\'s my first post', likeCounter: 20}
        ],
        profile: null,
        status: null
    }

    let action = addPostCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)

    expect(newState.postDate.length).toBe(3)
    expect(newState.postDate[2].message).toBe('it-kamasutra.com')
    expect(newState.postDate[2].likeCounter).toBe(0)
})

test('delete post', () => {
    const state: ProfilePageType = {
        postDate: [
            {id: 1, message: 'Hi, how are you?', likeCounter: 15},
            {id: 2, message: 'It\'s my first post', likeCounter: 20}
        ],
        profile: null,
        status: null
    }

    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.postDate.length).toBe(1)
})