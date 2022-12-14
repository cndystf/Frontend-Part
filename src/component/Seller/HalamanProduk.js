import React from "react";
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import jam from "../../images/halamanproduk.png";
import exp from "../../images/exp-product.png";
import seller from "../../images/seller.png";

// function ModalSukses(props) {
//     return (
//         <Modal
//             {...props}
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     <h6>Harga tawarmu berhasil dikirim ke penjual</h6>
//                 </Modal.Title>
//             </Modal.Header>
//         </Modal>
//     )
// }

// function ModalTawar(props) {
//     const [modalShow2, setModalShow2] = React.useState(false);
//     return (
//         <Modal
//             {...props}
//             size="sm"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     <h6>Masukkan Harga Tawarmu</h6>
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <p className="" style={{ fontSize: '14px' }}>
//                     Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.
//                 </p>
//                 <div className="row p-1">
//                     <div className="col-3 m-auto ">
//                         <img src={profilpenjual} alt='profilpenjual' className="" style={{ widht: '48' }} />
//                     </div>
//                     <div className="col-9 " style={{ fontSize: '14px', lineHeight: '20px', paddingTop: '18px', paddingLeft: '5px' }}>
//                         <b className="">Jam Tangan Casio</b>
//                         <p>Rp 250.000</p>
//                     </div>
//                 </div>
//                 <div>
//                     <form>
//                         <div class="mb-3">
//                             <label for="harga_tawar" class="form-label">Harga Tawar</label>
//                             <input type="text" class="form-control rounded " id="harga_tawar" placeholder="Rp 0,00" />
//                         </div>
//                         <button type="submit" class="btn btn-custom me-3 mb-2 " onClick={props.onHide}>Kirim</button>
//                     </form>
//                 </div>
//             </Modal.Body>
//             {/* <Modal.Footer>
//                 <Button onClick={props.onHide}>Close</Button>
//             </Modal.Footer> */}
//         </Modal>
//     )
// }

export default function HalamanProduk() {
    // const [modalShow, setModalShow] = React.useState(false);
    return (
        <><Navigation /><div className="seller-halaman-produk">
            <div className="container">
                <div className="col-md-6 sm-12" style={{ width: '100%' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={jam}
                                alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={jam}
                                alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={jam}
                                alt="Third slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={jam}
                                alt="Fourth slide" />
                        </Carousel.Item>
                    </Carousel>

                    <div className="product-description">
                        <div className="card">
                            <span style={{ fontWeight: "bold" }}>Deskripsi</span>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                <br></br>
                                <br></br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 sm-12" style={{ width: '100%' }}>
                    <div className="about-product">
                        <div className="card">
                            <span style={{ fontWeight: "bold" }}>Jam Tangan Casio</span>
                            <span style={{ fontSize: "12px", color: "#8A8A8A", marginTop: "5px" }}>Aksesoris</span>
                            <br></br>
                            Rp 250.000
                            <button className="btn-publish">Terbitkan</button>
                            <Link to="/edit-product"><button className="btn-edit">Edit</button></Link>
                        </div>
                    </div>
                    <div className="about-seller">
                        <div className="card">
                            <img src={seller} alt="seller" width="48px" height="48px" />
                            <div className="card-body">
                                <span className="card-title">Nama Penjual</span>
                                <p className="card-text">
                                    Kota
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}


        {/* <div className="container">
        <div className="container-fluid">
            <div className="row mx-auto mb-3">
                <div className="col-xl-6 col-sm-12">
                    <img className="img-fluid center-cropped rounded" src={halamanproduk} alt="halamanproduk" style={{ width: '600px', height: '436px' }} />
                    <h5>Deskripsi</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-xl-4 col-sm-12">
                    <div className="card mt-1 p-2 rounded mb-2">
                        <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                        <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                        <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                        <button
                            className="btn btn-custom me-3 mb-2 "
                            onclick="/"
                            id="Terbitkan"
                        > Terbitkan
                        </button>
                        <button
                            className="btn btn-custom me-3 mb-2 "
                            onclick="/"
                            id="Edit"
                        > Edit
                        </button>
                        <p>or</p>
                        <button
                            className="btn btn-custom me-3 mb-2 "
                            onClick={() => setModalShow(true)}
                            id="Terbitkan"
                        > Saya tertarik dan ingin nego
                        </button>

                    </div>
                    <div className="card">
                        <div className="row">
                            <div className="col-2 m-auto pl-2">
                                <img src={profilpenjual} alt='profilpenjual' className="w-100 " />
                            </div>
                            <div className="col-10">
                                <h5 className="">Nama Penjual</h5>
                                <p>Kota</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ModalTawar
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
        </div> */}