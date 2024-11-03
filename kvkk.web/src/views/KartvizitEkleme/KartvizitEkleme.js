import React, { useState } from "react" ;
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

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        padding: '10px 12px',
        borderWidth: '15px',
        '& label.Mui-focused': {
            color: 'red',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'red',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'red',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'red',
            },
        },
    },
}));
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





function KartvizitEkleme() {
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

    
    function handleSubmit(e) {
        const kullanici = JSON.parse(localStorage.getItem('kullanici'));
        const kullaniciKurumId = kullanici.kurumid;
        const kullaniciBirimId = kullanici.birimid;
        console.log(kullaniciKurumId);
        console.log(kullaniciBirimId);
        alert();
        e.preventDefault();
        const url = "https://localhost:44381/api/Kartvizit/yeni-kartvizit-ekleme";
        Axios.post(url, {
            kurumadi: kurum,
            ad: isim,
            soyad: soyisim,
            unvan: unvan,
            birim: birim,
            il: il,
            ilce: ilce,
            adres: adres,
            telefon: telefon,
            eposta: mail,
            fax: fax,
            aktifmi: true,
            silindimi: false,
            izinvarmi: true,
            kurumid: kullaniciKurumId,
            birimid: kullaniciBirimId,
            kullaniciid: kullanici.id


        })

        setAdres("");
        setBirim("");
        setFax("");
        setIl("");
        setIlce("");
        setIsim("");
        setKurum("");
        setMail("");
        setSoyisim("");
        setTelefon("");
        setUnvan("");
       
    };
    const classes = useStyles();

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Kartvizit Ekle</h4>
                            <p className={classes.cardCategoryWhite}>Sisteme kartvizitlerin düzgün bir şekilde eklenebilmesi için lütfen gerekli alanları doldurunuz.</p>
                        </CardHeader>
                        <CardBody>
                            <form className={classes.root} onSubmit={handleSubmit}>
                            <GridContainer>
                                
                                <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Kurum Adı"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500}}

                                            value={kurum}
                                            onChange={e => setKurum(e.target.value)}
                                        />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Isim"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500}}

                                            value={isim}
                                            onChange={e => setIsim(e.target.value)}
                                        />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                        <TextField
                                            label="Soyisim"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500}}

                                            value={soyisim}
                                            onChange={e => setSoyisim(e.target.value)}
                                        />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Unvan"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500, marginTop: 20 }}

                                            value={unvan}
                                            onChange={e => setUnvan(e.target.value)}
                                        />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Birim Adı"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500, marginTop: 20 }}

                                            value={birim}
                                            onChange={e => setBirim(e.target.value)}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Eposta"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500, marginTop: 20 }}

                                            value={mail}
                                            onChange={e => setMail(e.target.value)}
                                        />
                                    </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Il"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500, marginTop: 20 }}

                                            value={il}
                                            onChange={e => setIl(e.target.value)}
                                        />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Ilce"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500, marginTop: 20 }}

                                            value={ilce}
                                            onChange={e => setIlce(e.target.value)}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Telefon"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500, marginTop: 20 }}

                                            value={telefon}
                                            onChange={e => setTelefon(e.target.value)}
                                        />
                                    </GridItem>
                                
                                <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Fax"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 500, marginTop: 20, marginBottom:20 }}

                                            value={fax}
                                            onChange={e => setFax(e.target.value)}
                                        />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                        <TextField
                                            label="Adres"
                                            variant="outlined"
                                            required
                                            color="secondary"
                                            style={{ width: 1020, marginTop: 20, marginBottom: 20 }}

                                            value={adres}
                                            onChange={e => setAdres(e.target.value)}
                                        />
                                    </GridItem>
                                    
                               
                                    <GridItem xs={12} sm={12} md={12}>
                                        <Button type="submit" text="submit" color="danger" >Kartvizit Kaydet</Button>
                                    </GridItem>
                                
                                </GridContainer>
                            </form>
                                
                        </CardBody>
                        <CardFooter>
                            
                        </CardFooter>
                    </Card>
                </GridItem>

            </GridContainer>
        </div>
    );
}

export default KartvizitEkleme;
