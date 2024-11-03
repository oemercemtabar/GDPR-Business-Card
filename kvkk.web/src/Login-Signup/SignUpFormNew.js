import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
// core components
import GridItem from "../components/Grid/GridItemSignUp";
import GridContainerSignUp from "../components/Grid/GridContainerSignUp";
import Button from "../components/CustomButtons/Button.js";
import Card from '../components/Card/Card'

import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import Axios from "axios";

import { CloseButton } from '../Controls/CloseButton';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(5),
        padding: '10px 12px',
        borderWidth: '15px',
        '& label.Mui-focused': {
            color: 'blue',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'blue',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'blue',
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'blue',
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





function SignUpFormNew() {
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


        })
    };
    const classes = useStyles();

    return (
        <div>
            <div className='form-container'>
                <span className='close-btn'>
                    <CloseButton buttonStyle='close-btn'>X</CloseButton>
                </span>
                <div className='form-content-left'>
                    <img className='form-img' src='images/bbb.png' alt='spaceship' />
                </div>
                <div className="page-one-bg">
                    <div className="inner">
                        
                           
                            <GridContainerSignUp>
                                <GridItem xs={12} sm={12} md={10}>
                                    <Card>
                                        
                                        <CardBody>
                                            <form className={classes.root} >
                                                <GridContainerSignUp>

                                                    <GridItem xs={12} sm={12} md={5}>
                                                        <TextField
                                                            label="Kurum Adı"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: "15px -20px 15px" }}

                                                            value={kurum}
                                                            onChange={e => setKurum(e.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <TextField
                                                            label="Isim"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: "15px -20px" }}

                                                            value={isim}
                                                            onChange={e => setIsim(e.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={5}>
                                                        <TextField
                                                            label="Soyisim"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: 10 }}

                                                            value={soyisim}
                                                            onChange={e => setSoyisim(e.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={5}>
                                                        <TextField
                                                            label="Unvan"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: 10 }}

                                                            value={unvan}
                                                            onChange={e => setUnvan(e.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={5}>
                                                        <TextField
                                                            label="Birim Adı"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: 10 }}

                                                            value={birim}
                                                            onChange={e => setBirim(e.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={5}>
                                                        <TextField
                                                            label="Eposta"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: 10 }}

                                                            value={mail}
                                                            onChange={e => setMail(e.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={5}>
                                                        <TextField
                                                            label="Il"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: 10 }}

                                                            value={il}
                                                            onChange={e => setIl(e.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={5}>
                                                        <TextField
                                                            label="Ilce"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: 10 }}

                                                            value={ilce}
                                                            onChange={e => setIlce(e.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={5}>
                                                        <TextField
                                                            label="Telefon"
                                                            variant="outlined"
                                                            required
                                                            color="secondary"
                                                            style={{ width: 300, margin: 10 }}

                                                            value={telefon}
                                                            onChange={e => setTelefon(e.target.value)}
                                                        />
                                                    </GridItem>

                                                    


                                                    <GridItem xs={12} sm={12} md={12}>
                                                        <Button type="submit" text="submit" color="danger" >Kartvizit Kaydet</Button>
                                                    </GridItem>

                                                </GridContainerSignUp>
                                            </form>

                                        </CardBody>
                                        <CardFooter>

                                        </CardFooter>
                                    </Card>
                                </GridItem>

                            </GridContainerSignUp>
                        </div>
                        <div className="photo">
                            <img src="../images/bbb.png" alt="asja" />
                        </div>

                    
                </div>
            </div>
        </div>
    );
}

export default SignUpFormNew;
