import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title : 'Home',
        path : '/',
        icons : <AiIcons.AiFillHome />,
        cName : 'nav-text'

    },
    {
        title : 'Reports',
        path : '/reports',
        icons : <AiIcons.AiFillHome />,
        cName : 'nav-text'

    },
    {
        title : 'Total Balance',
        path : '/tBalance',
        icons : <GiIcons.GiCash />,
        cName : 'nav-text'

    }
    
]