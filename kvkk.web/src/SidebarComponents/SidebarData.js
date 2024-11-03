import React from 'react';

import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Genel',
        path: '/genel',
        icon: <IoIcons.IoIosHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Kullanıcılar',
                path: '/overview/kullanicilar',
                icon: <IoIcons.IoIosPerson />
            },
            {
                title: 'Kurumlar',
                path: '/overview/kurumlar',
                icon: <IoIcons.IoIosBookmark />
            },
            {
                title: 'Birimler',
                path: '/overview/birimler',
                icon: <IoIcons.IoIosBookmark />
            }
        ]
    },
    {
        title: 'Kurumlar',
        path: '/kurums',
        icon: <IoIcons.IoIosBookmark />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Bursa Buyuksehir Belediye',
                path: '/kurums/BursaBuyuksehirBelediye',
                icon: <IoIcons.IoIosBookmark />,
                cName: 'sub-nav'
            },
            {
                title: 'BURULAS',
                path: '/kurums/BURULAS',
                icon: <IoIcons.IoIosBookmark />,
                cName: 'sub-nav'
            },
            {
                title: 'BURFAS',
                path: '/kurums/BURFAS',
                icon: <IoIcons.IoIosBookmark />
            },
            {
                title: 'BURBAK',
                path: '/kurums/BURBAK',
                icon: <IoIcons.IoIosBookmark />
            },
            {
                title: 'BursaGaz',
                path: '/kurums/BursaGaz',
                icon: <IoIcons.IoIosBookmark />
            },
        ]
    },
    
    {
        title: 'Profil',
        path: '/profil',
        icon: <IoIcons.IoIosPerson />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Kartvizitlerim',
                path: '/profil/kartvizitlerim',
                icon: <IoIcons.IoIosCard />,
                cName: 'sub-nav'
            },
            {
                title: 'Profilim',
                path: '/profil/kullaniciprofil',
                icon: <IoIcons.IoMdPerson />,
                cName: 'sub-nav'
            },
            
        ]
    },
    
    {
        title: 'Destek',
        path: '/support',
        icon: <IoIcons.IoIosHelpCircle />
    }
];