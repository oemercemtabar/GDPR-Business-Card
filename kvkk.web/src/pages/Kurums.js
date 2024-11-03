import React from 'react';
import Sidebar from '../SidebarComponents/Sidebar';

//Her kurum için kartvizitleri çağıracağız
//Eklenen Kurum olursa buradan eklenebilir.

export const Kurums = () => {
    return (
        <div className='kurums'>
            <Sidebar />
            <h1>Kurumlar</h1>
        </div>
    );
};

export const KurumBir = () => {
    return (
        <div className='kurums'>
            <Sidebar />
            <h1>Bursa Büyükşehir Belediye</h1>
            <h1>Naber</h1>
        </div>
    );
};

export const KurumIki = () => {
    return (
        <div className='kurums'>
            <Sidebar />
            <h1>BURULAS</h1>
        </div>
    );
};

export const KurumUc = () => {
    return (
        <div className='kurums'>
            <Sidebar />
            <h1>BURFAS</h1>
        </div>
    );
};
export const KurumDort = () => {
    return (
        <div className='kurums'>
            <Sidebar />
            <h1>BURBAK</h1>
        </div>
    );
};
export const KurumBes = () => {
    return (
        <div className='kurums'>
            <Sidebar />
            <h1>BursaGaz</h1>
        </div>
    );
};