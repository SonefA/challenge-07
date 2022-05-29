import React from "react";
import './Detail.css'
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import carImage from '../../Asset/Img/Main/image 1.svg'
import userLogo from "../../Asset/Img/Main/fi_users.svg"
import settingLogo from "../../Asset/Img/Main/fi_settings.svg"
import calendarLogo from "../../Asset/Img/Main/fi_calendar.svg"
import { NavbarDefault } from "../../Asset/Components/Navbar/NavbarDefault";

export const Detail = () => {
  return (
  <>
    <section className="nav">
    <NavbarDefault/>
    </section>
    
    <div className="container-detail">
      <div className="tentang-paket">
        <h5>Tentang Paket</h5>
        <h6>Include</h6>
        <ul>
          <li>Apa saja yang termasuk paket misal durasi max 12 jam</li>
          <li>Sudah termasuk bensin selama 12 jam</li>
          <li>Sudah termasuk Tiket Wisata</li>
          <li>Sudah termasuk pajak</li>
        </ul>
        <h6>Exclude</h6>
        <ul>
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>
            Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
            20.000/jam
          </li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
        <Accordion className="lainnya" defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><h5>Refund, Reschedule, Overtime</h5></Accordion.Header>
            <Accordion.Body>
              <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>TIdak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Button className="btn-pembayaran" variant="success">Lanjutkan Pembayaran</Button>{' '}
      </div>

      <div className="info-mobil">
      <div className="detail-card-mobil" id="1">
        <Card className="card-detail" style={{ width: "405px" }}>
          <Card.Img className="mobil-img" variant="top" src={carImage} />
          <Card.Body>
            <Card.Title><h6>Nama/Tipe Mobil</h6></Card.Title>
            <Card.Text>
   
                <><img className="detail-userLogo" src={userLogo} alt="#"></img>&ensp;4 orang&emsp;</>
                <><img className="detail-settingLogo" src={settingLogo} alt="#"></img>&ensp;Manual&emsp;</>
                <><img className="detail-calendarLogo" src={calendarLogo} alt="#"></img>&ensp;Tahun 2020&emsp;</>
                <br/>
                <label className="total">Total</label>
                <label className="harga">Rp 430.000</label>
              
            </Card.Text>
            <Button className="btn-pembayaran2" variant="success">Lanjutkan Pembayaran</Button>{' '}
          </Card.Body>
        </Card>
      </div>
      </div>
    </div>
    </>
  );
};