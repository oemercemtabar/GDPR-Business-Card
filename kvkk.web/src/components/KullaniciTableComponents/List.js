import React, { Component } from 'react';

import axios from 'axios';
class List extends Component {
    constructor(props) {
        super(props);

        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.state = {
            requiredItem: 0,
            ProductData: []
        }
    }

    componentDidMount() {

        axios.get('https://localhost:44381/api/Kullanici/butun-kullanıcılar').then(response => {

            console.log(response.data);

            this.setState({

                ProductData: response.data

            });

        });

    }

    replaceModalItem(index) {
        this.setState({
            requiredItem: index
        });
    }

    saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        let tempbrochure = this.state.ProductData;
        tempbrochure[requiredItem] = item;
        this.setState({ ProductData: tempbrochure });
    }

    deleteItem(index) {
        let tempBrochure = this.state.ProductData;
        tempBrochure.splice(index, 1);
        this.setState({ ProductData: tempBrochure });
    }

    render() {
        const ProductData = this.state.ProductData.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.kullaniciid}</td>
                    <td>{item.isim}</td>
                    <td>{item.soyisim}</td>
                    <td>{item.telefon}</td>
                    <td>{item.eposta}</td>
                    <td>{item.kurumid}</td>
                    <td>{item.birimid}</td>
                    <td>{item.rolid}</td>
                    <td>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                            onClick={() => this.replaceModalItem(index)}>Güncelle</button> {" "}
                        <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>Sil</button>
                    </td>
                </tr>
            )
        });

        const requiredItem = this.state.requiredItem;
        let modalData = this.state.ProductData[requiredItem];
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h1>Editable Bootstrap Modal In React</h1>
                    <h6>Bootstrap 4.0.0-beta.3</h6>
                </div>
                <table className="table table-striped">
                    <tbody>
                        {ProductData}
                    </tbody>
                </table>
                {/*<Modal*/}
                {/*    id={modalData.id}*/}
                {/*    ad={modalData.ad}*/}
                {/*    saveModalDetails={this.saveModalDetails}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default List;