import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "../../components/CustomButtons/Button.js";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from "@material-ui/core/DialogContent";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: "#9500ae",
            color: theme.palette.common.white,
            marginLeft: 5
        },
        body: {
            fontSize: 14,
            marginLeft: -500
        },
    }),
)(TableCell);

//const useDialogRolStyles = makeStyles(theme => ({
//    dialogPaper: {

//        height: '400px'
//    },
//}));

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
                marginLeft: 500,
            },
        },
    }),
)(TableRow);

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(6)
    }
}))(MuiDialogContent);



const useStyles = makeStyles({
    table: {
        minWidth: 800,
        width: 1800,
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
    },
});

export default function CustomizedTables() {


    const classes = useStyles();
    const [openRolAta, setOpenRolAta] = React.useState(false);
    const [openGuncelle, setOpenGuncelle] = React.useState(false);
    const [KullaniciList, setKullaniciList] = useState([]);
    const [isim, setIsim] = useState("");
    const [soyisim, setSoyisim] = useState("");
    const [adres, setAdres] = useState("");
    const [sifre, setSifre] = useState("");
    const [id, setId] = useState("");
    const [telefon, setTelefon] = useState("");
    const [kurum, setKurum] = useState("");
    const [birim, setBirim] = useState("");
    const [unvan, setUnvan] = useState("");
    const [mail, setMail] = useState("");
    const [kurumId, setKurumId] = useState("");
    const [birimId, setBirimId] = useState("");
    const [rolId, setRolId] = useState("");
    const [kurumOptionList, setKurumOptionList] = useState([]);
    const [birimOptionList, setBirimOptionList] = useState([]);
    const [rolOptionList, setRolOptionList] = useState([]);
    const [rol, setRol] = useState("");
    const [rolList, setRolList] = useState([]);


    function handleClickRolAtaOpen(id, kurumid, birimid, rolid, ad, soyad, telefon, eposta, sifre){
        setKurumId(kurumid);
        setBirimId(birimid);
        setRolId(rolid);
        setIsim(ad);
        setSoyisim(soyad);
        setMail(eposta);
        setTelefon(telefon);
        setId(id);
        setSifre(sifre);
        
        setOpenRolAta(true);
    };

    function handleClickGuncelleOpen(id,kurumid, birimid, rolid, ad, soyad, telefon, eposta,sifre) {
        setKurumId(kurumid);
        setBirimId(birimid);
        setRolId(rolid);
        setIsim(ad);
        setSoyisim(soyad);
        setMail(eposta);
        setTelefon(telefon);
        setId(id);
        setSifre(sifre);
        setOpenGuncelle(true);

    };




    const handleCloseRolAta = () => {
        setOpenRolAta(false);
    };

    const handleCloseGuncelle = () => {
        setOpenGuncelle(false);
    };

    const GuncelleTrigger = () => {
        fetch('https://localhost:44381/api/Kullanici/kullanici-guncelleme', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                id: id,
                ad: isim,
                soyad: soyisim,
                telefon: telefon,
                eposta: mail,
                sifre: sifre,
                kurumid: kurumId,
                birimid: birimId,
                rolid: rolId,
                aktifmi: true,
                silindimi: false
            })
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                getKullaniciListFromAPI();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setIsim("");
        setSoyisim("");
        setTelefon("");
        setMail("");
        
        
        handleCloseGuncelle();
        

    };

    function handleDelete(e,id) {
        e.preventDefault();
        console.log(id);
        let secilenId = id;
        fetch(`https://localhost:44381/api/Kullanici/kullanici-silme?id=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }        
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                getKullaniciListFromAPI();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    function handleRolGuncelle() {
        
        fetch('https://localhost:44381/api/Kullanici/kullanici-guncelleme', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                id: id,
                ad: isim,
                soyad: soyisim,
                telefon: telefon,
                eposta: mail,
                sifre: sifre,
                kurumid: kurumId,
                birimid: birimId,
                rolid: rolId,
                aktifmi: true,
                silindimi: false
            })
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                getKullaniciListFromAPI();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setIsim("");
        setSoyisim("");
        setTelefon("");
        setMail("");
        

        handleCloseRolAta();
    };

    useEffect(() => {
        getKullaniciListFromAPI();
        getKullaniciRolListFromAPI();
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

    const getKullaniciListFromAPI = async () => {
        return fetch('https://localhost:44381/api/Kullanici/butun-kullanıcılar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kullanicilar: ", json);
                setKullaniciList(json);
            }).catch((error) => {
                console.error(error);
            });
    };

    const getKullaniciRolListFromAPI = async () => {
        const url = `https://localhost:44381/api/Rol/butun-roller`;
        const RolSettings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }

        };
        try {
            fetch(url, RolSettings)
                .then(res => res.json())
                .then(result => { setRolOptionList(result.map(function (rol) { return { value: rol.id, label: rol.ad } })); });


        } catch (e) {
            console.log(e);
            return e;
        }
    };

    const findKurum = async (kurumid) => {
        return fetch('https://localhost:44381/api/Kurum/id-ile-kurum-bulma/id?id={kurumid}', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kurum: ", json);
                setAdres(json.adres);
            }).catch((error) => {
                console.error(error);
            });
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
                    //THIS.setState({
                    //    kurumOptionList: result.map(function (kurum) { return { value: kurum.id, label: kurum.adi } });
                    //});

                });

        } catch (e) {
            console.log(e);
            return e;
        }
    };

    function onKurumChange(property, val) {
        setKurum(val);
        
    };

    function onKurumIdChange(property, val) {
        setKurumId(val);
        fetch('https://localhost:44381/api/Kurum/id-ile-kurum-bulma/id?id={val}', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kullanicilar: ", json);
                setAdres(json.adres);
            }).catch((error) => {
                console.error(error);
            });
    };

    function onBirimIdChnage(property, val) {
        setBirimId(val);
    };

    function onBirimChange(property, val) {
        setBirim(val);
    };

    function onRolIdChange(property, val) {
        setRolId(val);
    };
    function onRolChange(property, val) {
        setRol(val);
    };


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Kullanıcı ID</StyledTableCell>
                        <StyledTableCell align="left">Isim</StyledTableCell>
                        <StyledTableCell align="left">Soyisim</StyledTableCell>
                        <StyledTableCell align="left">Telefon</StyledTableCell>
                        <StyledTableCell align="left">Eposta</StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {KullaniciList.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.ad}</StyledTableCell>
                            <StyledTableCell align="left">{row.soyad}</StyledTableCell>
                            <StyledTableCell align="left">{row.telefon}</StyledTableCell>
                            <StyledTableCell align="left">{row.eposta}</StyledTableCell>
                            <StyledTableCell align="center"><Button onClick={(e) => handleClickRolAtaOpen(row.id, row.kurumid, row.birimid, row.rolid, row.ad, row.soyad, row.telefon, row.eposta, row.sifre)} color="primary" >Rol Ata</Button></StyledTableCell>
                            <StyledTableCell align="center"><Button onClick={(e) => handleClickGuncelleOpen(row.id, row.kurumid, row.birimid, row.rolid, row.ad, row.soyad, row.telefon, row.eposta, row.sifre)} color="primary" >Güncelle</Button></StyledTableCell>
                            <StyledTableCell align="center"><Button onClick={(e) => handleDelete(e, row.id)} color="primary" >Sil</Button></StyledTableCell>
                            <Dialog open={openGuncelle} onClose={handleCloseGuncelle} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Kullanıcı Bilgilerini Güncelle</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Mevcut kullanıcının sistemdeki bilgilerini güncelleybilirsiniz.
                                </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="ad"
                                        label="Isim"
                                        type="email"
                                        fullWidth
                                        value={isim}
                                        onChange={e => setIsim(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="soyad"
                                        label="Soyisim"
                                        type="email"
                                        fullWidth
                                        value={soyisim}
                                        onChange={e => setSoyisim(e.target.value)}
                                    />
                                    <Select
                                        label="Kurum"
                                        options={kurumOptionList}
                                        placeholder="Kurum"
                                        onChange={(val) => {
                                            onKurumIdChange('kurumid', val.value)
                                            onKurumChange('kurum', val.label)
                                            BirimloginUiInitialize(val.value);
                                        }}
                                        marginTop={15}
                                    />
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
                                    
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="eposta"
                                        label="Eposta"
                                        type="email"
                                        fullWidth
                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="telefon"
                                        label="Telefon"
                                        type="phone"
                                        fullWidth
                                        value={telefon}
                                        onChange={e => setTelefon(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseGuncelle} color="primary">
                                        Geri
                                    </Button>
                                    <Button onClick={GuncelleTrigger} color="primary">
                                        Güncelle
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </StyledTableRow>


                    ))}
                </TableBody>
            </Table>
            
            <Dialog open={openRolAta} onClose={handleCloseRolAta} aria-labelledby="form-dialog-title" fullWidth={true} fullHeight={true }>
                    
                <DialogTitle id="form-dialog-title">Kullanıcı Rol Atama</DialogTitle>
                <DialogContent height={1000}>
                    <DialogContentText>
                        Mevcut kullanıcının rol atamasını yapabilirsiniz.
                    </DialogContentText>
                    <Select 
                        label="Rol"
                        placeholder="Rol"
                        options={rolOptionList}
                        onChange={(val) => {
                            onRolIdChange('rolId', val.value)
                            onRolChange('rol', val.label)
                        }}
                        
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseRolAta} color="primary">
                        GERI
                    </Button>
                    <Button onClick={handleRolGuncelle} color="primary">
                        GUNCELLE
                    </Button>
                </DialogActions>
                </Dialog>
            

        </TableContainer>

    );
}