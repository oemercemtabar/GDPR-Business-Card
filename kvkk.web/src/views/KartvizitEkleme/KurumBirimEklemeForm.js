import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '../../components/CustomButtons/Button.js';
import Select from 'react-select';
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
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
            color: 'green',
           
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'green',
            },
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
           },
         },
    },
}));

const KurumBirimEklemeForm = ({ handleClose }) => {

    const classes = useStyles();
    // create state variables for each input
    const [kurumadi, setKurumadi] = useState('');
    const [kurumbirimadi, setKurumBirimAdi] = useState('');
    const [kurumbirimid, setKurumBirimId] = useState('');
    const [birimKurumAdi, setBirimKurumAdi] = useState('');
    const [adres, setAdres] = useState('');
    const [il, setIl] = useState('');
    const [ilce, setIlce] = useState('');
    const [birimadi, setBirimadi] = useState('');
    const [kurumList, setKurumList] = useState([]);
    const [kurumid, setKurumId] = useState('');
    const [kurumOptionList, setKurumOptionList] = useState([]);
    
    useEffect(() => {

        getKurumListFromAPI();
    }, []);

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

    function onKurumChange(property, val) {
        setKurumBirimAdi(val);

    };

    function onKurumIdChange(property, val) {
        setKurumBirimId(val);
    }

    function handleSubmitKurum (e){
        alert();
        e.preventDefault();
        console.log(kurumadi);
        const url = "https://localhost:44381/api/Kurum/yeni-kurum-ekleme";
        Axios.post(url, {
            adi: kurumadi,
            il: il,
            ilce: ilce,
            adres: adres,
            aktifmi: true,
            silindimi: false,

        })
        setKurumadi("");
        setIl("");
        setIlce("");
        setAdres("");
        
    };
    
    function handleSubmitBirim(e) {
        alert();
        e.preventDefault();
        fetch('https://localhost:44381/api/Kurum/ada-göre-kurum/ad?ad=' + birimKurumAdi, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
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
            kurumid: kurumbirimid,
            aktifmi: true,
            silindimi: false
        })

        setBirimadi("");
    };


       

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>Kurum Ekle</h4>
                        <p className={classes.cardCategoryWhite}>Yeni Bir Kurum Ekle</p>
                    </CardHeader>
                    <CardBody>
                        <form className={classes.root} onSubmit={handleSubmitKurum}>
                            <GridContainer>                               
                                <GridItem xs={12} sm={12} md={4}>
                                    <TextField
                                        label="Kurum Adı"
                                        variant="outlined"
                                        required
                                        color="secondary"
                                        style={{ width: 500 }}
                                        value={kurumadi}
                                        onChange={e => setKurumadi(e.target.value)}
                                    />
                                </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                    <TextField
                                        label="Il"
                                        variant="outlined"
                                        required
                                        color="secondary"
                                        style={{ width: 500 }}
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
                                        style={{ width: 500 }}
                                        value={ilce}
                                        onChange={e => setIlce(e.target.value)}
                                    />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={3}>
                                    <TextField
                                        label="Adres"
                                        variant="outlined"
                                        required
                                        color="secondary"
                                        style={{ width: 1545, marginTop: 20, marginBottom: 20 }}

                                        value={adres}
                                        onChange={e => setAdres(e.target.value)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Button type="submit" text="submit" color="success" >Kurum Kaydet</Button>
                                </GridItem>
                            </GridContainer>
                        </form>
                    </CardBody>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>Birim Ekle</h4>
                        <p className={classes.cardCategoryWhite}>Yeni Bir Birim Ekle</p>
                    </CardHeader>
                    <CardBody>
                        <form className={classes.root} onSubmit={handleSubmitBirim}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <Select
                                        label="Kurum"
                                        options={kurumOptionList}
                                        placeholder="Kurum"
                                        onChange={(val) => {
                                            onKurumIdChange('kurumid', val.value)
                                            onKurumChange('kurum', val.label)

                                        }}
                                        style={{ width: 750, marginTop: 20, marginBottom: 20 }}



                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        label="Birim Adı"
                                        variant="outlined"
                                        required
                                        color="secondary"
                                        style={{ width: 750, marginTop: 5, marginBottom: 20 }}
                                        value={birimadi}
                                        onChange={e => setBirimadi(e.target.value)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Button type="submit" text="submit" color="success" >Birim Kaydet</Button>
                                </GridItem>
                            </GridContainer>
                        </form>
                    </CardBody>
                    <CardFooter>
                        
                    </CardFooter>
                </Card>
            </GridItem>

        </GridContainer>
    );
};

export default KurumBirimEklemeForm;