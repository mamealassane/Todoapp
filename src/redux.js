import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: 'todo',
    initialState: {
        filterStatus: 'All',
        tasks: [
            { id: 1, text: "One to one", done: true },
            { id: 2, text: "Checkpoint!", done: false },
        ],
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                text: action.payload,
                done: false,
            };
            state.tasks.push(newTask);
        },
        toogleTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
                task.done = !task.done;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        },
        updateFilterStatus: (state, action) => {
            state.filterStatus = action.payload;
        },
    },
});

export const { addTask, toogleTask, deleteTask, updateFilterStatus } = todoslice.actions;

export const store = configureStore({
    reducer: {
        todo: todoslice.reducer,
    },
});
