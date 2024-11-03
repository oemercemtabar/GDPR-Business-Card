import React, { useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Select from 'react-select';
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



export default function MyProfile() {

    const classes = useStyles();
    const kullanici = JSON.parse(localStorage.getItem('kullanici'));
    const [kurumList, setKurumList] = useState([]);
    const [birimList, setBirimList] = useState([]);
    const [kurumadi, setKurumadi] = useState('');
    const [birimadi, setBirimadi] = useState('');
    const [kurumid, setKurumId] = useState(kullanici.kurumid);
    
    const [birimid, setBirimId] = useState(kullanici.birimid);
    const [mail, setMail] = useState(kullanici.eposta);
    const [ad, setAd] = useState(kullanici.ad);
    const [soyad, setSoyad] = useState(kullanici.soyad);
    const [telefon, setTelefon] = useState(kullanici.telefon);
    const [kurumOptionList, setKurumOptionList] = useState([]);
    const [birimOptionList, setBirimOptionList] = useState([]);

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

    const getKurumListFromAPI = async () => {
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        try {
            const THIS = this;
            fetch(`https://localhost:44381/api/Kurum/butun-kurumlar`, settings)
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    setKurumOptionList(result.map(function (kurum) { return { value: kurum.id, label: kurum.adi } }));
                   
                });

        } catch (e) {
            console.log(e);
            return e;
        }
    };

    useEffect(() => {
        
        getKurumListFromAPI();
    }, []);

    function BirimloginUiInitialize(kurumId) {
        const url = `https://localhost:44381/api/Birim/kurum-id-butun-birimler?kurumid=${kurumId}`;
        const BirimSettings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }

        };
        try {
            fetch(url, BirimSettings)
                .then(res => res.json())
                .then(result => { setBirimOptionList(result.map(function (birim) { return { value: birim.id, label: birim.ad } })); });


        } catch (e) {
            console.log(e);
            return e;
        }

    };

    function handleUpdateKullanici(e) {
        e.preventDefault();
        
        fetch('https://localhost:44381/api/Kullanici/kullanici-guncelleme', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                id: kullanici.id,
                ad: ad,
                soyad: soyad,
                telefon: telefon,
                eposta: mail,
                sifre: kullanici.sifre,
                kurumid: kurumid,
                birimid: birimid,
                rolid: kullanici.rolid,
                aktifmi: true,
                silindimi: false
            })
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setAd("");
        setSoyad("");
        setTelefon("");
        setTelefon("");
        setMail("");
        setKurumadi("");
        setBirimadi("");
        let newkullanici = { 'id': kullanici.id, 'ad': ad, 'soyad': soyad, 'telefon': telefon, 'eposta': mail, 'sifre': kullanici.sifre, 'kurumid': kurumid, 'birimid': birimid, 'rolid': kullanici.rolid };
        localStorage.setItem('kullanici', JSON.stringify(newkullanici));
        console.log(kullanici.ad);
    };

    function onKurumChange(property, val) {
        setKurumadi(val);

    };

    function onBirimIdChnage(property, val) {
        setBirimId(val);
    };
    function onBirimChange(property, val) {
        setBirimadi(val);
    };

    function onKurumIdChange(property, val) {
        setKurumId(val);
    }
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
                                            label="Isim"
                                            variant="outlined"

                                            color="primary"
                                            style={{ width: 750, marginTop: 10 }}

                                            value={ad}
                                            onChange={e => setAd(e.target.value)}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <TextField
                                            label="Soyisim"
                                            variant="outlined"

                                            color="primary"
                                            style={{ width: 750, marginTop: 10 }}

                                            value={soyad}
                                            onChange={e => setSoyad(e.target.value)}
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
                                            style={{ width: 750, marginTop: 10, marginBottom:10 }}

                                            value={telefon}
                                            onChange={e => setTelefon(e.target.value)}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <Select
                                            label="Kurum"
                                            options={kurumOptionList}
                                            placeholder="Kurum"
                                            onChange={(val) => {
                                                onKurumIdChange('kurumid', val.value)
                                                onKurumChange('kurum', val.label)
                                                BirimloginUiInitialize(val.value);
                                            }}
                                            
                                            
                                            
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                        <Select
                                            label="Birim"
                                            placeholder="Birim"
                                            options={birimOptionList}
                                            onChange={(val) => {
                                                onBirimIdChnage('birimid', val.value)
                                                onBirimChange('birim', val.label)
                                            }}
                                            marginTop={15}
                                        />
                                    </GridItem>
                                </GridContainer>

                            </form>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" onClick={handleUpdateKullanici}>Profili Guncelle</Button>
                        </CardFooter>
                    </Card>
                </GridItem>

            </GridContainer>
        </div>
    );
}
