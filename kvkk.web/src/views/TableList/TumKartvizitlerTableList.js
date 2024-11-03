import React, { useState, useEffect } from 'react';
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
import DialogContent from '@material-ui/core/DialogContent';
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





const useStyles = makeStyles({
    table: {
        minWidth: 800,
        width: 1800,
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
    },
});

export default function TumKartvizitlerTableList() {
    const classes = useStyles();
    const [openGuncelle, setOpenGuncelle] = React.useState(false);
    const [KartvizitList, setKartvizitList] = useState([]);
    const [kartvizitId, setKartvizitId] = useState("");
    const [kurum, setKurum] = useState("");
    const [kurumId, setKurumId] = useState("");
    const [birimId, setBirimId] = useState("");
    const [kullaniciId, setKullaniciId] = useState("");
    const [birim, setBirim] = useState("");
    const [unvan, setUnvan] = useState("");
    const [ad, setAd] = useState("");
    const [soyad, setSoyad] = useState("");
    const [adres, setAdres] = useState("");
    const [il, setIl] = useState("");
    const [ilce, setIlce] = useState("");
    const [telefon, setTelefon] = useState("");
    const [mail, setMail] = useState("");
    const [fax, setFax] = useState("");
    

    function handleClickGuncelleOpen(id, kurum, birim, unvan, ad, soyad, adres, il, ilce, telefon, mail, fax, kurumid, birimid, kullaniciid) {
        setKartvizitId(id);
        setKurum(kurum);
        setBirim(birim);
        setUnvan(unvan);
        setAd(ad);
        setSoyad(soyad);
        setAdres(adres);
        setIl(il);
        setIlce(ilce);
        setTelefon(telefon);
        setMail(mail);
        setKurumId(kurumid);
        setBirimId(birimid);
        setKullaniciId(kullaniciId);
        setFax(fax);
        setOpenGuncelle(true);

    };

    const handleGuncelle = () => {
        fetch('https://localhost:44381/api/Kartvizit/kartvizit-güncelleme', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                id: kartvizitId,
                kurumadi: kurum,
                ad: ad,
                soyad: soyad,
                unvan: unvan,
                birim: birim,
                il: il,
                ilce: ilce,
                kurumid: ilce,
                adres: adres,
                telefon: telefon,
                eposta: mail,
                fax: fax,
                aktifmi: true,
                silindimi: false,
                izinvarmi: false,
                kurumid: kurumId,
                birimid: birimId,
                kullaniciid: kullaniciId
            })
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                getKartvizitListFromAPI();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setAd("");
        setSoyad("");
        setUnvan("");
        setKartvizitId("");
        setKurum("");
        setBirim("");
        setIl("");
        setIlce("");
        setKurumId("");
        setBirimId("");
        setAdres("");
        setTelefon("");
        setMail("");
        setFax("");
        setKullaniciId("");

        handleCloseGuncelle();


    };
    
    
    const handleCloseGuncelle = () => {
        setOpenGuncelle(false);
    };

    function handleDelete(e,kartvizitid) {
        e.preventDefault();
        fetch(`https://localhost:44381/api/Kartvizit/kartvizit-silme/id?id=${kartvizitid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                getKartvizitListFromAPI();
                handleCloseGuncelle();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    

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
                console.log("List of Kartvizitler: ", json);
                setKartvizitList(json);
            }).catch((error) => {
                console.error(error);
            });
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Kurum</StyledTableCell>
                        <StyledTableCell align="left">Birim</StyledTableCell>
                        <StyledTableCell align="left">Unvan</StyledTableCell>
                        <StyledTableCell align="left">Isim</StyledTableCell>
                        <StyledTableCell align="left">Soyisim</StyledTableCell>
                        <StyledTableCell align="left">Adres/Il/Ilce</StyledTableCell>
                        <StyledTableCell align="left">Telefon</StyledTableCell>
                        <StyledTableCell align="left">Eposta</StyledTableCell>
                        <StyledTableCell align="left">Fax</StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {KartvizitList.map((row) => (

                        <StyledTableRow key={row.id}>
                            
                            <StyledTableCell align="left">{row.kurumadi}</StyledTableCell>
                            <StyledTableCell align="left">{row.birim}</StyledTableCell>
                            <StyledTableCell align="left">{row.unvan}</StyledTableCell>
                            <StyledTableCell align="left">{row.ad}</StyledTableCell>
                            <StyledTableCell align="left">{row.soyad}</StyledTableCell>
                            <StyledTableCell align="left">{row.adres} {row.il} {row.ilce}</StyledTableCell>
                            <StyledTableCell align="left">{row.telefon}</StyledTableCell>
                            <StyledTableCell align="left">{row.eposta}</StyledTableCell>
                            <StyledTableCell align="left">{row.fax}</StyledTableCell>
                            <StyledTableCell align="center"><Button onClick={(e) => handleClickGuncelleOpen(row.id, row.kurumadi, row.birim, row.unvan, row.ad, row.soyad, row.adres, row.il, row.ilce, row.telefon, row.eposta, row.fax, row.kurumiad, row.birimid, row.kullaniciid)} color="primary" >Güncelle</Button></StyledTableCell>
                            
                            <Dialog open={openGuncelle} onClose={handleCloseGuncelle} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Kartvizit Bilgilerini Güncelle</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Kullanıcılar tarafından sisteme yüklenilen mevcut kartvizitleri güncelleyebilir ya da sistemden temelli silebilirsiniz.
                                </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="kurum"
                                        label="Kurum"
                                        type="email"
                                        fullWidth
                                        value={kurum}
                                        onChange={e => setKurum(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="birim"
                                        label="Birim"
                                        type="email"
                                        fullWidth
                                        value={birim}
                                        onChange={e => setBirim(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="unvan"
                                        label="Unvan"
                                        type="email"
                                        fullWidth
                                        value={unvan}
                                        onChange={e => setUnvan(e.target.value)}

                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="ad"
                                        label="Isim"
                                        type="email"
                                        fullWidth
                                        value={ad}
                                        onChange={e => setAd(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="soyad"
                                        label="Soyisim"
                                        type="email"
                                        fullWidth
                                        value={soyad}
                                        onChange={e => setSoyad(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="adres"
                                        label="Adres"
                                        type="email"
                                        fullWidth
                                        value={adres}
                                        onChange={e => setAdres(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="il"
                                        label="Il"
                                        type="email"
                                        fullWidth
                                        value={il}
                                        onChange={e => setIl(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="ilce"
                                        label="Ilce"
                                        type="email"
                                        fullWidth
                                        value={ilce}
                                        onChange={e => setIlce(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="telefon"
                                        label="Telefon"
                                        type="email"
                                        fullWidth
                                        value={telefon}
                                        onChange={e => setTelefon(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="mail"
                                        label="Eposta"
                                        type="email"
                                        fullWidth
                                        value={mail}
                                        onChange={e => setMail(e.target.value)}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="fax"
                                        label="Fax"
                                        type="email"
                                        fullWidth
                                        value={fax}
                                        onChange={e => setFax(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseGuncelle} color="primary">
                                        Geri
                                    </Button>
                                    <Button onClick={handleGuncelle} color="primary">
                                        Güncelle
                                    </Button>
                                    <Button onClick={(e) => handleDelete(e,kartvizitId)} color="primary">
                                        Sil
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </StyledTableRow>


                    ))}
                </TableBody>
            </Table>

            

        </TableContainer>

    );
}