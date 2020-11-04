import React, {useCallback, useState} from 'react'
import styled from 'styled-components'
import {
    Container as TaskContainer,
    TextStyle as TaskTextStyle,
    taskState,
} from './Task'
//import {useRecoilCallback, useRecoilValue} from 'recoil'
//import {tasksState} from './Tasks'

import { useAtom, atom } from 'jotai'
import { atomFamily, useAtomCallback } from 'jotai/utils'
import { tasksAtom } from './Tasks'

const InsertInput = styled.input`
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    background-color: transparent;
    outline: none;
    -webkit-appearance: textfield;
    ${TaskTextStyle};

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`

export const Input: React.FC = () => {
    const [label, setLabel] = useState('')
    //const tasks = useRecoilValue(tasksState)
    const [tasks, setTasks] = useAtom(tasksAtom)

    // const insertTask = useRecoilCallback(({set}) => {
    //     return (label: string) => {
    //         const newTaskId = tasks.length
    //         set(tasksState, [...tasks, newTaskId])
    //         set(taskState(newTaskId), {
    //             label: label,
    //             complete: false,
    //         })
    //     }
    // })

    // const insertTask = useAtomCallback(useCallback((get: any, set: any, label: string) => {
    //     set(tasksAtom, [
    //         ...get(tasksAtom),
    //         {
    //             label,
    //             complete: false
    //         }
    //     ])
    // }, []))

    const insertTask = useAtomCallback(useCallback((
        get: any, set: any, label: string
    ) => {
        const newTaskId = tasks.length
        set(tasksAtom, [...tasks, newTaskId])
        set(taskState(newTaskId), {
            label: label,
            complete: false,
        })
    }, [tasks]));
    
    return (
        <TaskContainer>
            <InsertInput
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
                value={label}
                onChange={({currentTarget}) => {
                    setLabel(currentTarget.value)
                }}
                onKeyUp={({keyCode}) => {
                    if (keyCode === 13) {
                        insertTask(label)
                        setLabel('')
                    }
                }}
            />
        </TaskContainer>
    )
}
