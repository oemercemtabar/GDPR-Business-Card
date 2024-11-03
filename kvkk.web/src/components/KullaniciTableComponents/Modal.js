import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            id: '',
            ad: '',
            soyad: '',
            telefon: '',
            eposta: '',
            kurumid: '',
            birimid: '',
            rolid: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            ad: nextProps.ad,
            soyad: nextProps.soyad,
            telefon: nextProps.telefon,
            eposta: nextProps.eposta,
            kurumid: nextProps.kurumid,
            birimid: nextProps.birimid,
            rolid: nextProps.rolid,
        });
    }

    KullaniciIdHandler(e) {
        this.setState({ id: e.target.value });
    }
    IsimHandler(e) {
        this.setState({ ad: e.target.value });
    }
    SoyisimHandler(e) {
        this.setState({ soyad: e.target.value });
    }
    TelefonHandler(e) {
        this.setState({ telefon: e.target.value });
    }

    EpostaHandler(e) {
        this.setState({ eposta: e.target.value });
    }
    KurumIdHandler(e) {
        this.setState({ kurumid: e.target.value });
    }
    BirimIdHandler(e) {
        this.setState({ birimid: e.target.value });
    }
    RolIdHandler(e) {
        this.setState({ rolid: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">KullaniciId:</span><input value={this.state.id} onChange={(e) => this.KullaniciIdHandler(e)} /></p>
                            <p><span className="modal-lable">Isim:</span><input value={this.state.ad} onChange={(e) => this.IsimHandler(e)} /></p>
                            <p><span className="modal-lable">Soyisim:</span><input value={this.state.soyad} onChange={(e) => this.SoyisimHandler(e)} /></p>
                            <p><span className="modal-lable">Telefon:</span><input value={this.state.telefon} onChange={(e) => this.TelefonHandler(e)} /></p>
                            <p><span className="modal-lable">Eposta:</span><input value={this.state.eposta} onChange={(e) => this.EpostaHandler(e)} /></p>
                            <p><span className="modal-lable">KurumId:</span><input value={this.state.kurumid} onChange={(e) => this.KurumIdHandler(e)} /></p>
                            <p><span className="modal-lable">BirimId:</span><input value={this.state.birimid} onChange={(e) => this.BirimIdHandler(e)} /></p>
                            <p><span className="modal-lable">RolId:</span><input value={this.state.rolid} onChange={(e) => this.RolIdHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;