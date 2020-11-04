import * as _ from 'lodash';

import React, { useEffect } from 'react'
import styled, {css} from 'styled-components'
import checkIconSvg from './check.svg'
import {Card} from './Card'
//import {atomFamily, useRecoilState} from 'recoil'
import { useAtom, atom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { tasksAtom, ITask } from './Tasks';

export const TextStyle = css`
    font-size: 17px;
    color: ${(props) => props.theme.text};
    font-family: inherit;
`

export const Container = styled(Card)`
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Check = styled.div<{checked: boolean}>`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    transition: 0.2s all ease-in-out;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: ${(props) => props.theme.background};
    cursor: pointer;

    ${(props) =>
        props.checked &&
        css`
            background-color: transparent;
        `}
`

const CheckIcon = styled.img`
    transition: 0.1s opacity ease-in-out;
`

const Label = styled.div`
    position: relative;
    ${TextStyle}
`

const Strikethrough = styled.div<{checked: boolean}>`
    position: absolute;
    top: 50%;
    left: -3px;
    right: -3px;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: center left;
    transition: 0.1s all ease-in-out;

    ${(props) =>
        props.checked &&
        css`
            transform: scaleX(1);
        `};
`



// export const taskState = atomFamily({
//     key: 'task',
//     default: {
//         label: '',
//         complete: false,
//     },
// })

// https://github.com/pmndrs/jotai/pull/45


export const taskState = atomFamily(
  ({ id, label, complete }) => ({
    label,
    complete,
  }),
  null,
  (a: ITask, b: ITask) => a.id === b.id
)
// export const taskState = atomFamily(
//     (id: number) => (get) => {
//         const task = get(tasksAtom)[id]

//         return task;
//     },
//     (id: number) => (get, set, val) => {
//         const task = set(tasksAtom, (current: any) => {
//             current[id] = val;

//             return _.clone(current);
//         })

//         return task;
//     },
// )




export const Task: React.FC<{id: number}> = ({ id }) => {
    //const [{complete, label}, setTask] = useRecoilState(taskState(id))
    const [{complete, label, ...fullTask}, setTask] = useAtom(taskState({ id })) 
    
    return (
        <Container
            onClick={() => {
                (setTask as any)({
                    label,
                    complete: !complete,
                })
            }}
        >
            <Check checked={complete as boolean}>
                <CheckIcon
                    src={checkIconSvg}
                    style={{opacity: complete ? 1 : 0}}
                />
            </Check>
            <Label>
                {label}
                <Strikethrough checked={complete as boolean} />
            </Label>
        </Container>
    )
}
