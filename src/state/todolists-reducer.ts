import React from "react";
import {StateType} from "./user-reducer";
import {FilterValuesType, toDoListType} from "../App";
import {v1} from "uuid";
import {Simulate} from "react-dom/test-utils";






export type RemoveTodolistActionType ={
    type: 'REMOVE-TODOLIST'
    id: string
}
export type AddTodolistActionType ={
    type: 'ADD-TODOLIST'
    title: string
}
export type ChangeTodolistTitleActionType ={
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    id: string
}
export type ChangeTodolistFilterActionType ={
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValuesType
    id: string
}

type ActionsType = ChangeTodolistFilterActionType | ChangeTodolistTitleActionType | AddTodolistActionType |RemoveTodolistActionType

export const TodolistsReducer = (state: Array<toDoListType>, action: ActionsType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(tl => tl.id !== action.id)

        case "ADD-TODOLIST":
            const NewTodolistId = v1()
            const NewTodolist: toDoListType = {
                title: action.title,
                id: NewTodolistId,
                filter: "all"
            }
            return [...state, NewTodolist]

        case 'CHANGE-TODOLIST-TITLE':
            const todolist = state.find(t => t.id === action.id)
            if (todolist) {
                todolist.title = action.title
               return [...state]
            }
            return state

        case 'CHANGE-TODOLIST-FILTER':
            const todolist1 = state.find(t => t.id === action.id)
            if (todolist1) {
                todolist1.filter = action.filter
                return [...state]
            }
            return state

        default:
            throw new Error("I don't understand this type")
    }
}
export const RemoveTodolistAS=(todolistId: string):RemoveTodolistActionType=>({type: "REMOVE-TODOLIST", id: todolistId})
export const AddTodolistAS=(title: string):AddTodolistActionType=>({type: "ADD-TODOLIST", title: title})
export const ChangeTodolistTitleAS=(title: string, id: string):ChangeTodolistTitleActionType=>({ type: "CHANGE-TODOLIST-TITLE", title: title, id:id})
export const ChangeTodolistFilterAS = (filter:FilterValuesType, id:string):ChangeTodolistFilterActionType=>({ type: "CHANGE-TODOLIST-FILTER", filter: filter, id: id})