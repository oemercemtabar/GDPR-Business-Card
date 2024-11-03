import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";

import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Axios from "axios";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

/*
const getKurumFromAPI = async () => {
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
const getBirimFromAPI = async () => {
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
*/




const useStyles = makeStyles(styles);

function KurumBirimEkleme() {
    const [isim, setIsim] = useState("");
    const [soyisim, setSoyisim] = useState("");
    const [adres, setAdres] = useState("");
    const [telefon, setTelefon] = useState("");
    const [il, setIl] = useState("");
    const [ilce, setIlce] = useState("");
    const [fax, setFax] = useState("");
    const [kurum, setKurum] = useState("");
    const [birim, setBirim] = useState("");
    const [unvan, setUnvan] = useState("");
    const [mail, setMail] = useState("");

    

    const classes = useStyles();
    const postKurumToAPI = async () => {
        return fetch('https://localhost:44381/api/Kurum/yeni-kurum-ekleme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
            body: {
                adi: kurum,
                il: il,
                ilce: ilce,
                adres: adres,
                aktfimi: true,
                silindimi: false,
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("Geri dönüş ", json);
            }).catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={10}>
                    <Card>
                        <CardHeader color="success">
                            <h4 className={classes.cardTitleWhite}>Kartvizit Ekle</h4>
                            <p className={classes.cardCategoryWhite}>Yeni Bir Kartvizit Ekle</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Kurum"
                                        id="kurum"
                                        value={kurum}
                                        onChange={(e) => setKurum(e.target.value)}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            disabled: false,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Birim"
                                        id="birim"
                                        value={birim}
                                        onChange={(e) => setBirim(e.target.value)}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Il"
                                        id="il"
                                        value={il}
                                        onChange={(e) => setIl(e.target.value)}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Ilce"
                                        id="ilce"
                                        value={ilce}
                                        onChange={(e) => setIlce(e.target.value)}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Telefon"
                                        id="telefon"
                                        value={telefon}
                                        onChange={(e) => setTelefon(e.target.value)}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Adres"
                                        id="adres"
                                        value={adres}
                                        onChange={(e) => setAdres(e.target.value)}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                                
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button onClick={"postKurumToAPI()"} color="success" >Kartvizit Ekle</Button>
                        </CardFooter>
                    </Card>
                </GridItem>

            </GridContainer>
        </div>
    );
}

export default KurumBirimEkleme;
