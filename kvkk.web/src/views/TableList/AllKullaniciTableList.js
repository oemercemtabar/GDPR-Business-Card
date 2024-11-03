import React, { Component, useState } from 'react'
import Table from '@material-ui/core/Table';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from 'react-bootstrap/Modal';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Button from "../../components/CustomButtons/Button.js";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function CenteredRolModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
            <CenteredRolModal />
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
      </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

class AllKullaniciTableList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rolModalShow: false,
            guncelleModalShow: false,
            ProductData: []
        };
    }

    componentDidMount() {

        axios.get('https://localhost:44381/api/Kullanici/butun-kullanıcılar').then(response => {

            console.log(response.data);

            this.setState({

                ProductData: response.data

            });

        });

    }

    render() {

        console.log(this.state.ProductData);

        return (
            <>
                <TableContainer component={Paper}>

                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            < TableRow >
                                < TableCell align="left" > Kullanıcı Id</TableCell >

                                < TableCell align="left" > Isim</TableCell >

                                < TableCell align="left" > Soyisim</TableCell >

                                < TableCell align="left" > Telefon</TableCell >

                                < TableCell align="left" > Eposta</TableCell >

                                < TableCell align="left" > Kurum Id</TableCell >

                                < TableCell align="left" > Birim Id</TableCell >

                                < TableCell align="left" > Rol Id</TableCell >

                                < TableCell align="left" > </TableCell >

                                < TableCell align="left" > </TableCell >

                                < TableCell align="left" > </TableCell >

                            </TableRow >

                        </TableHead >

                        < TableBody >

                            {
                                this.state.ProductData.map((p, index) => {

                                    return <TableRow key={index}>

                                        <TableCell component="th" scope="row">{p.id}</TableCell>

                                        <TableCell align="left">{p.ad}</TableCell>

                                        <TableCell align="left">{p.soyad}</TableCell>

                                        <TableCell align="left">{p.telefon}</TableCell>

                                        <TableCell align="left">{p.eposta}</TableCell>

                                        <TableCell align="left">{p.kurumid}</TableCell>

                                        <TableCell align="left">{p.birimid}</TableCell>

                                        <TableCell align="left">{p.rolid}</TableCell>
                                        <TableCell align="center"><CenteredRolModal/></TableCell>

                                        {/*<TableCell align="center"><Button onClick={() => this.setState({ rolModalShow: true })} color="primary" >Rol Ata</Button></TableCell>*/}

                                        <TableCell align="center"><Button onClick={() => this.setState({ guncelleModalShow: true })} color="primary" >Güncelle</Button></TableCell>

                                        <TableCell align="center"><Button onClick={"postKurumToAPI()"} color="primary" >Sil</Button></TableCell>


                                    </TableRow>

                                })

                            }


                        </TableBody >

                    </Table >


                </TableContainer >

               
            </>
        );

    }

}



export default AllKullaniciTableList