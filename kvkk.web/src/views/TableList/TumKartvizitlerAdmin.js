import React, { useEffect, useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from '../../components/CustomButtons/Button';
// @material-ui/icons

// core components
import GridItem from "../../components/Grid/GridItemCard";
import GridContainer from "../../components/Grid/GridContainer.js";



import '../../components/BusinessCard/BusinessCard.css'


import styles from "../../assets/jss/material-dashboard-react/views/dashboardCardStyle";

const useStyles = makeStyles(styles);
function istekAtma() {
    //setKurumId(kurumid);
    //setBirimId(birimid);
    //setRolId(rolid);
    //setIsim(ad);
    //setSoyisim(soyad);
    //setMail(eposta);
    //setTelefon(telefon);

    //fetch('https://localhost:44381/api/Kurum/id-ile-kurum-bulma/id?id={kurumid}', {
    //    method: 'GET',
    //    headers: {
    //        'Content-Type': 'application/json',

    //        Accept: 'application/json',
    //    },
    //})
    //    .then((response) => response.json())
    //    .then((json) => {
    //        console.log("Kurum: ", json);
    //        setKurum(json);
    //    }).catch((error) => {
    //        console.error(error);
    //    });

    //fetch('https://localhost:44381/api/Birim/id-ile-birim-bulma/id?id={birimid}', {
    //    method: 'GET',
    //    headers: {
    //        'Content-Type': 'application/json',

    //        Accept: 'application/json',
    //    },
    //})
    //    .then((response) => response.json())
    //    .then((json) => {
    //        console.log("Birim: ", json);
    //        setBirim(json);
    //    }).catch((error) => {
    //        console.error(error);
    //    });

    //setOpenGuncelle(true);

};
export default function TumKartvizitlerAdmin() {
    const [KartvizitList, setKartvizitList] = useState([]);
    const kullanici = JSON.parse(localStorage.getItem('kullanici'));

    useEffect(() => {
        getKartvizitListFromAPI();
    }, []);

    const getKartvizitListFromAPI = async () => {
        return fetch('https://localhost:44381/api/Kartvizit/butun-kartvizitler', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kartvizits: ", json);
                setKartvizitList(json);
            }).catch((error) => {
                console.error(error);
            });
    };

    const renderCard = (card, index) => {

        return (
            <GridItem xs={6} sm={3} md={3} spacing={4}>
                <div class="container">
                    <div class="card">
                        <div class="front">
                            <div class="logo"><span></span></div>
                            <h1>{card.ad} <i> </i> {card.soyad} <span>{card.kurumadi}</span><span>{card.birim}</span><span>{card.unvan}</span> </h1>

                        </div>
                        <div class="back">
                            <h3>{card.ad} <i> </i> {card.soyad} <span>{card.kurumadi}</span><span>{card.birim}</span><span>{card.unvan}</span></h3>
                            <ul>
                                <li>{card.telefon}</li>
                                <li_new>{card.eposta}</li_new>
                                <li_adres>{card.adres}</li_adres>
                            </ul>
                        </div>
                    </div>
                </div>


            </GridItem>
        );



    };

    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                {KartvizitList.map(renderCard)}
            </GridContainer>
        </div>
    );
}
