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

export default function AdminIstekListesi() {


    const classes = useStyles();
    const [openAktifMi, setOpenAktifMi] = React.useState(false);
    const [PaylasimList, setPaylasimList] = useState([]);
    const options = [
        { value: true, label: 'Izin Ver' },
        { value: false, label: 'Reddet' },
        
    ]
    var name1 = "";
    var name2 = "";
    const [id, setId] = useState("");
    const [paylasankullaniciid, setPaylasanKullaniciId] = useState("");
    const [paylasimisteyenkullaniciid, setPaylasimIsteyenKullaniciId] = useState("");
    const [paylasimistektarih, setPaylasimIstekTarih] = useState("");
    const [kartvizitid, setKartvizitId] = useState("");
    const [paylasimsure, setPaylasimSure] = useState(0);
    const [aktifmi, setAktifMi] = useState(false);
    const [bittimi, setBittiMi] = useState(false);
    const [paylasimYapanKullanici, setPaylasimYapanKullanici] = useState([]);
    const [paylasimIsteyenKullanici, setPaylasimIsteyenKullanici] = useState([]);
    


    function handleClickAktifMiOpen(id, paylasankullaniciid, paylasimisteyenkullaniciid, kartvizitid, paylasimistektarih, paylasimsure, aktifmi, bittmi) {
        setId(id);
        setPaylasanKullaniciId(paylasankullaniciid);
        setPaylasimIsteyenKullaniciId(paylasimisteyenkullaniciid);
        setKartvizitId(kartvizitid);
        setPaylasimIstekTarih(paylasimistektarih);
        setPaylasimSure(paylasimsure);
        setAktifMi(aktifmi);
        setBittiMi(bittimi);

        setOpenAktifMi(true);
    };

    const handleCloseAktifMi = () => {
        setOpenAktifMi(false);
    };

    function getPaylasimYapanKullanici(e,paylasimyapankullaniciid) {
        fetch(`https://localhost:44381/api/Kullanici/id-ile-kullanici/id?id=${paylasimyapankullaniciid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("Paylaşım Yapan Kullanıcı: ", json);
                setPaylasimYapanKullanici(json);
                var kullaniciPaylasan = [];
                kullaniciPaylasan.push(paylasimYapanKullanici);
                return kullaniciPaylasan.ad + " " + kullaniciPaylasan.soyad;
            }).catch((error) => {
                console.error(error);
            });
    };

    function getPaylasimIsteyenKullanıcıId(paylasimisteyenkullaniciid) {

        fetch(`https://localhost:44381/api/Kullanici/id-ile-kullanici/id?id={paylasimisteyenkullaniciid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("Paylaşım Isteyen Kullanıcı: ", json);
                setPaylasimIsteyenKullanici(json);
                return paylasimIsteyenKullanici.ad + " " + paylasimIsteyenKullanici.soyad;
            }).catch((error) => {
                console.error(error);
            });

    };

   

    function handleAktifMi() {

        fetch(`https://localhost:44381/api/Paylasim/paylasim-guncelleme`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                id: id,
                paylasankullaniciid: paylasankullaniciid,
                paylasimisteyenkullaniciid: paylasimisteyenkullaniciid,
                kartvizitid: kartvizitid,
                paylasimistektarih: paylasimistektarih,
                paylasimsure: paylasimsure,
                aktifmi: aktifmi,
                bittimi: bittimi,
            })
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                getPaylasimListFromAPI();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setId("");
        setPaylasanKullaniciId("");
        setPaylasimIsteyenKullanici("");
        setKartvizitId("");
        setPaylasimIstekTarih("");
        setPaylasimSure("");
        setAktifMi(false);
        setBittiMi(false);


        handleCloseAktifMi();
    };

    useEffect(() => {
        getPaylasimListFromAPI();
    }, []);

    

    const getPaylasimListFromAPI = async () => {
        return fetch('https://localhost:44381/api/Paylasim/butun-paylasimlar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Paylasimlar: ", json);
                setPaylasimList(json);
            }).catch((error) => {
                console.error(error);
            });
    };


    function onPaylasimChangeId(property, val) {
        setId(val);
    };

    function onPaylasimAktifMiChange(property, val) {
        setAktifMi(val);
        setBittiMi(!val);
    };



    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Paylaşım ID</StyledTableCell>
                        <StyledTableCell align="left">Paylaşan ID</StyledTableCell>
                        <StyledTableCell align="left">Paylaşım Isteyen ID</StyledTableCell>
                        <StyledTableCell align="left">Kartvizit ID</StyledTableCell>
                        <StyledTableCell align="left">Paylaşım Istek Tarihi</StyledTableCell>
                        <StyledTableCell align="left">Paylaşım Süresi(Saat)</StyledTableCell>
                        <StyledTableCell align="left">Paylaşım Onaylandı Mı?</StyledTableCell>
                        <StyledTableCell align="left">Paylaşım Bitti Mi?</StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {PaylasimList.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                            <StyledTableCell align="left">{row.paylasankullaniciid}</StyledTableCell>
                            <StyledTableCell align="left">{row.paylasimisteyenkullaniciid}</StyledTableCell>
                            <StyledTableCell align="left">{row.kartvizitid}</StyledTableCell>
                            <StyledTableCell align="left">{row.paylasimistektarih}</StyledTableCell>
                            <StyledTableCell align="left">{row.paylasimsure}</StyledTableCell>
                            <StyledTableCell align="left">{row.aktifmi ? "Evet" : "Hayır"}</StyledTableCell>
                            <StyledTableCell align="left">{row.bittmi ? "Evet" : "Hayır"}</StyledTableCell>
                            <StyledTableCell align="center"><Button onClick={(e) => handleClickAktifMiOpen(row.id, row.paylasankullaniciid, row.paylasimisteyenkullaniciid, row.kartvizitid, row.paylasimistektarih, row.paylasimsure, row.aktifmi, row.bittimi)} color="primary" >ONAYLA</Button></StyledTableCell>
                            
                        </StyledTableRow>


                    ))}
                </TableBody>
            </Table>

            <Dialog open={openAktifMi} onClose={handleCloseAktifMi} aria-labelledby="form-dialog-title" fullWidth={true} fullHeight={true}>

                <DialogTitle id="form-dialog-title">Kullanıcı Paylaşım Istek Onaylama</DialogTitle>
                <DialogContent height={1000}>
                    <DialogContentText>
                        Paylaşım isteğininin durumunu buradan güncelleyebilirsiniz.
                    </DialogContentText>
                    <Select
                        label="Paylasim Onay"
                        placeholder="Paylasim Onay"
                        options={options}
                        onChange={(val) => {
                            onPaylasimAktifMiChange('aktifmi', val.value)
                        }}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAktifMi} color="primary">
                        GERI
                    </Button>
                    <Button onClick={handleAktifMi} color="primary">
                        GUNCELLE
                    </Button>
                </DialogActions>
            </Dialog>


        </TableContainer>

    );
}