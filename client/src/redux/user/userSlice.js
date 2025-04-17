import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    // the user doesn't exist at the begining
    currentUser: null,
    error: null,
    loading: false
}
// kind of user reducer(create the userSlice)
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // we start(sign in the user)
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        // we succed(the action is the response that we get back)
        signInSuccess: (state, action) => {
            // payload is the user data
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        // we fail
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateStart: (state) => {
           state.loading = true;
           state.error = null
        },
        updateSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateFailure: (state, action) => {
           state.loading = false;
           state.error = action.payload;
        },
        deleteUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        }, 
        deleteUserFailure:(state, action) => {
           state.loading = false;
           state.error = action.payload;
        },
        signoutSuccess: (state) => {
            state.currentUser = null;
            state.error = null;
            state.loading = false
        }
    }
})
// use the logic in our signin page
export const {
    signInStart, 
    signInSuccess, 
    signInFailure, 
    updateStart, 
    updateSuccess, 
    updateFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    signoutSuccess
} = userSlice.actions;
// export the reducer so as to add to the store and we can change it name in the store(userReducer)
export default userSlice.reducer;