import * as _ from 'lodash';

import React, { useMemo } from 'react'
import {Task as TaskComponent} from './Task'
//import {atom, useRecoilValue} from 'recoil'
import { useAtom, atom, PrimitiveAtom } from 'jotai'

// export const tasksState = atom<number[]>({
//     key: 'tasks',
//     default: [],
// })

// export const tasksState = atom([] as number[])

export interface ITask {
    label: string,
    complete: boolean
}

export const tasksAtom = atom<PrimitiveAtom<ITask>[]>([])

export const Tasks: React.FC = () => {
    const [tasks] = useAtom(tasksAtom)

    return (
        <div>
            {/* <p>{JSON.stringify(tasks)}</p> */}
            {tasks.map((taskAtom) => (
                <TaskComponent taskAtom={taskAtom} key={taskAtom.key} />
            ))}
        </div>
    );
}
