import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

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

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        padding: '10px 12px',
        borderWidth: '15px',
        '& label.Mui-focused': {
            color: 'purple',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'purple',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'purple',
            },
            '&:hover fieldset': {
                borderColor: 'purple',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'purple',
            },
        },
    },
}));



export default function UserProfile() {
    
    const classes = useStyles();
    const kullanici = JSON.parse(localStorage.getItem('kullanici'));
    const [kurumList, setKurumList] = useState([]);
    const [birimList, setBirimList] = useState([]);
    const [kurumadi, setKurumadi] = useState('');
    const [birimadi, setBirimadi] = useState('');
    const [mail, setMail] = useState('');
    const [il, setIl] = useState('');
    const [ilce, setIlce] = useState('');
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');
    const [telefon, setTelefon] = useState('');

    function getKullaniciKurumById(e) {
        alert();
        e.preventDefault();
        fetch('https://localhost:44381/api/Kurum/id-ile-kurum-bulma/id' + kullanici.kurumid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("Kurum Information: ", json);
                setKurumList(json);
                
            }).catch((error) => {
                console.error(error);
            })

        setKurumadi(kurumList.adi);
        setIl(kurumList.il);
        setIlce(kurumList.ilce);
        
    };

    function getKullaniciBirimById(e) {
        alert();
        e.preventDefault();
        fetch('https://localhost:44381/api/Birim/id-ile-birim-bulma/id' + kullanici.birimid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kurumlar: ", json);
                setBirimList(json);
            }).catch((error) => {
                console.error(error);
            })
        setBirimadi(birimList.ad);

    };

    function handleUpdateKullanici(e) {
        e.preventDefault();
        getKullaniciKurumById();
        getKullaniciBirimById();
        fetch('https://localhost:44381/api/Kullanici/kullanici-güncelleme', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: {
                id: kullanici.id,
                ad: kullanici.ad,
                soyad: kullanici.soyad,
                telefon: kullanici.telefon,
                eposta: kullanici.eposta,
                sifre: kullanici.sifre,
                kurumid: kullanici.kurumid,
                birimid: kullanici.birimid,
                rolid: kullanici.rolid,
                aktifmi: true,
                silindimi: false
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kurumlar: ", json);
                setKurumList(json);
            }).catch((error) => {
                console.error(error);
            })
        console.log(kurumList);
        console.log(kurumList.id);

        const url = "https://localhost:44381/api/Birim/yeni-birim-ekleme";
        Axios.post(url, {
            ad: birimadi,
            kurumid: kurumList.id,
            aktifmi: true,
            silindimi: false
        })
    };
    return (
        
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Profili Duzenle</h4>
                            <p className={classes.cardCategoryWhite}>Yeni kullanıcı eklemek ve yetkilendirmek için lütfen gerekli alanları doldurunuz.</p>
                        </CardHeader>
                        <CardBody>
                            <form className={classes.root} >
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="Kurum Adı"
                                        variant="outlined"
                                        
                                        color="secondary"
                                        style={{ width: 750, marginTop:10 }}

                                        value={kurumadi}
                                        onChange={e => setKurumadi(e.target.value)}
                                    />
                                </GridItem>
                                
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="Birim Adı"
                                        variant="outlined"
                                        
                                        color="secondary"
                                            style={{ width: 750, marginTop: 10 }}

                                        value={birimadi}
                                        onChange={e => setBirimadi(e.target.value)}
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="Isim"
                                        variant="outlined"
                                        
                                        color="primary"
                                            style={{ width: 750, marginTop: 10  }}

                                        value={ad}
                                        onChange={e => setAd(e.target.value)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="Soyisim"
                                        variant="outlined"
                                        
                                        color="primary"
                                            style={{ width: 750, marginTop: 10  }}

                                        value={soyad}
                                        onChange={e => setSoyad(e.target.value)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="Il"
                                        variant="outlined"
                                        
                                        color="primary"
                                            style={{ width: 750, marginTop: 10 }}

                                        value={il}
                                        onChange={e => setIl(e.target.value)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="Ilce"
                                        variant="outlined"
                                        
                                        color="primary"
                                            style={{ width: 750, marginTop: 10 }}

                                        value={ilce}
                                        onChange={e => setIlce(e.target.value)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="E-posta"
                                        variant="outlined"
                                        
                                        color="primary"
                                            style={{ width: 750, marginTop: 10 }}

                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="Telefon"
                                        variant="outlined"
                                        
                                        color="primary"
                                            style={{ width: 750, marginTop: 10 }}

                                        value={telefon}
                                        onChange={e => setTelefon(e.target.value)}
                                    />
                                </GridItem>
                            </GridContainer>
                            
                            </form>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Profili Guncelle</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                
            </GridContainer>
        </div>
    );
}
