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

import moment from 'moment';

import '../../components/BusinessCard/BusinessCard.css'


import styles from "../../assets/jss/material-dashboard-react/views/dashboardCardStyle";

const useStyles = makeStyles(styles);

export default function TumKartvizitler() {
    const [KartvizitList, setKartvizitList] = useState([]);
    const kullanici = JSON.parse(localStorage.getItem('kullanici'));

    function istekAtma(e, kullaniciid, kartvizitid) {
        console.log("istek atma")
        e.preventDefault();
        fetch(`https://localhost:44381/api/Paylasim/yeni-paylasim-ekleme`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                'paylasankullaniciid': kullaniciid,
                'paylasimisteyenkullaniciid': kullanici.id,
                'kartvizitid': kartvizitid,
                'paylasimsure': 24,
                'aktifmi': false,
                'bittimi': false,
            })
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                getKartvizitListFromAPI();
            })
            .catch(error => {
                console.error('Error:', error);
            });





    };
    useEffect(() => {
        getKartvizitListFromAPI();
    }, []);

    const getKartvizitListFromAPI = async () => {
        return fetch(`https://localhost:44381/api/Kartvizit/butun-kartvizitler/kullanici-paylasim?kullaniciId=${kullanici.id}`, {
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

        if (kullanici.id == card.kullaniciid) {
            return (
                <GridItem xs={6} sm={3} md={3} spacing={4}>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <div class="logo"></div>
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
        }
        else {
            return (
                <GridItem xs={6} sm={3} md={3} spacing={4}>
                    <div class="container">
                        <div class="card">
                            <div class="front">
                                <div class="logo"><span></span></div>
                                <h1>{card.ad} <i> </i> {card.soyad} <span>{card.kurumadi}</span><span>{card.birim}</span><span>{card.unvan}</span></h1>

                            </div>
                            <div class="back">
                                <h2>BU KARTVIZTI GORUNTULEMEK ICIN YETKILENDIRILMEDINIZ</h2>
                                <h2><span><Button onClick={(e) => istekAtma(e, card.kullaniciid, card.id)} size={"xl"} color="danger" >
                                    ISTEK ATMA
                                    </Button></span></h2>
                            </div>
                        </div>
                    </div>


                </GridItem>
            );
        }



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
