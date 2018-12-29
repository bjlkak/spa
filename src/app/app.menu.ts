import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Project 1',
        route: '/p1',
        submenu: null
    },
    {
        text: 'Project 2',
        route: '/p2',
        submenu: null
    },
    {
        text: 'Project 3',
        route: '/p3',
        submenu: null
    },
    {
        text: 'Resume',
        route: '/resume',
        submenu: null
    }
];