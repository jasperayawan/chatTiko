import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedConversation: null,
    messages: []
}

export const useGetConversationSlice = createSlice({
    name: 'UseConversation',
    initialState,
    reducers: {
        setSelectedConversation: (state, { payload }) => {
            state.selectedConversation = payload;
        },
        removeSelected: (state) => {
            state.selectedConversation = null
        },
        setMessages: (state, { payload }) => {
            state.messages = payload;
        }
    }
})

export const { setSelectedConversation, removeSelected, setMessages } = useGetConversationSlice.actions;
export default useGetConversationSlice.reducer