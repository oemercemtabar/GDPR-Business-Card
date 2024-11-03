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

import moment from 'moment';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: "#9500ae",
            color: theme.palette.common.white,
            marginLeft: 0
        },
        body: {
            fontSize: 14,
            marginLeft: "500px"
        },
    }),
)(TableCell);


const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
                marginLeft: 5,
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

export default function KullaniciIstekListesi() {
    const classes = useStyles();
    const [paylasimList, setPaylasimList] = useState([]);
    const [paylasimIsteyen, setPaylasimIsteyen] = useState([]);
    const [paylasimYapan, setPaylasimYapan] = useState([]);
    const kullanici = JSON.parse(localStorage.getItem('kullanici'));

    useEffect(() => {
        getPaylasimListFromAPI();
    }, []);

    const getPaylasimListFromAPI = async () => {
        return fetch(`https://localhost:44381/api/Paylasim/paylasim-isteyen-kullaniciid/butun-paylasimlar?paylasimisteyenkullaniciid=${kullanici.id}`, {
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

//    function PaylasanKisi(paylasankisiid) {
//        console.log(paylasankisiid);
//;        fetch(`https://localhost:44381/api/Kullanici/id-ile-kullanici/id?id={paylasankisiid}`, {
//            method: 'GET',
//            headers: {
//                'Content-Type': 'application/json',

//                Accept: 'application/json',
//            },
//        })
//            .then((response) => response.json())
//            .then((json) => {
//                console.log("List of Paylasimlar: ", json);
//                setPaylasimYapan(json);
//                console.log(paylasimYapan);
//                return paylasimYapan.ad;
//            }).catch((error) => {
//                console.error(error);
//            });
//    };
//    function PaylasimIsteyenKisi(paylasimisteyenkullaniciid){
//        fetch(`https://localhost:44381/api/Kullanici/id-ile-kullanici/id?id=${paylasimisteyenkullaniciid}`, {
//            method: 'GET',
//            headers: {
//                'Content-Type': 'application/json',

//                Accept: 'application/json',
//            },
//        })
//            .then((response) => response.json())
//            .then((json) => {
//                console.log("List of Paylasimlar: ", json);
//                setPaylasimIsteyen(json);
//                return kullanici.ad;
//            }).catch((error) => {
//                console.error(error);
//            });
//    };
    /*console.log(moment(new Date()));*/

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                       
                        <StyledTableCell align="left">Paylaşım Yapan ID</StyledTableCell>
                        <StyledTableCell align="left">Paylaşım İsteyen ID</StyledTableCell>
                        <StyledTableCell align="left">Kartvizit ID</StyledTableCell>
                        <StyledTableCell align="left">Paylaşım Tarih</StyledTableCell>
                        <StyledTableCell align="left">Paylaşım Süre</StyledTableCell>
                        <StyledTableCell align="left">Aktif Mi?</StyledTableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paylasimList.map((row) => (
                        
                        <StyledTableRow key={row.id}>

                            <StyledTableCell align="left">{row.paylasankullaniciid}</StyledTableCell>
                            <StyledTableCell align="left">{row.paylasimisteyenkullaniciid}</StyledTableCell>
                            <StyledTableCell align="left">{row.kartvizitid}</StyledTableCell>
                            <StyledTableCell align="left">{row.paylasimistektarih}</StyledTableCell>
                            <StyledTableCell align="left">{row.paylasimsure}</StyledTableCell>

                            <StyledTableCell align="left"><Button color="primary" >{row.aktifmi ? "Evet" : "Hayır"}</Button></StyledTableCell>


                        </StyledTableRow>
                    


                    ))}
                </TableBody>
            </Table>



        </TableContainer>

    );
}