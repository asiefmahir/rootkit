import shortid from 'shortid';

import { CREATE_WINDOW_BOX, CLOSE_WINDOW_BOX, MINIMIZE_WINDOW_BOX } from '../actions'
import { icons } from '../assets'

export const initialState = {
    items: [
        {
            id: shortid.generate(),
            name: 'Learn',
            icon: icons.book
        },
        {
            id: shortid.generate(),
            name: 'Games',
            icon: icons.folder
        },
        {
            id: shortid.generate(),
            name: 'Staking',
            icon: icons.laptop
        }
    ],
    openWindows: [],
    activeWindows: []
}
export const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_WINDOW_BOX: {
            const { openWindows, activeWindows } = state;
            if (!openWindows.includes(action.payload)) {
                openWindows.push(action.payload)
            }
            if (!activeWindows.includes(action.payload)) {
                activeWindows.push(action.payload)
            }
            return { ...state, openWindows, activeWindows }
        }
        case MINIMIZE_WINDOW_BOX: {
            let { activeWindows } = state;
            activeWindows = activeWindows.filter((window) => window.id !== action.payload)
            return { ...state, activeWindows }
        }

        case CLOSE_WINDOW_BOX: {
            let { openWindows, activeWindows } = state;
            activeWindows = activeWindows.filter((window) => window.id !== action.payload)
            openWindows = openWindows.filter((window) => window.id !== action.payload)
            return {
                ...state, openWindows, activeWindows
            }
        }
        default:
            return state;
    }
}