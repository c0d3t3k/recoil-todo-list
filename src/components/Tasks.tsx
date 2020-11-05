import * as _ from 'lodash';

import React, { useMemo } from 'react'
import {Task as TaskComponent} from './Task'
//import {atom, useRecoilValue} from 'recoil'
import { useAtom, atom } from 'jotai'

// export const tasksState = atom<number[]>({
//     key: 'tasks',
//     default: [],
// })

// export const tasksState = atom([] as number[])

export interface Task {
    label: string,
    complete: boolean
}

export type ITask = Partial<Task>;

export const tasksAtom = atom<number[]>([])

export const Tasks: React.FC = () => {
    const [tasks] = useAtom(tasksAtom)

    return (
        <div>
            {/* <p>{JSON.stringify(tasks)}</p> */}
            {tasks.map((task, id) => (
                <TaskComponent id={id} key={id} />
            ))}
        </div>
    );
}
