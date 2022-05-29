import React from 'react'
import './Tiket.css'
import { FooterDefault } from '../../Asset/Components/Footer/FooterDefault'
import { NavbarDefault } from '../../Asset/Components/Navbar/NavbarDefault'

import arrowBack from '../../Asset/Img/Tiket/fi_arrow-left.svg'
import checkListBlue from '../../Asset/Img/Tiket/checklist.svg'
import sbsElement1 from '../../Asset/Img/Tiket/sbsElement1.svg'
import sbsElement2 from '../../Asset/Img/Tiket/checklist-3.svg'
import checkListGreen from '../../Asset/Img/Tiket/checklist-green.svg'
import unduhPic from '../../Asset/Img/Tiket/fi_download.svg'
import { PdfViewer } from '../../Asset/Components/PdfViewer/PdfViewer'



export const Tiket = () => {
  return (
    <>
        <NavbarDefault/>

        <div className='container-tiket'>

            <section className='header-tiket'>
            <div className='header-left'>
                <div className='arrow-back'>
                <a href='http://localhost:3000/Detail'><img src={arrowBack} alt='#'></img></a>
                </div>
                <div className='title-tiket'>
                    <h5>Tiket</h5>
                    <p>Order ID: xxxxxxxx</p>
                </div>
            </div>
            <div className='header-right'></div>
            <div className='stepByStep'>
                <img src={checkListBlue} alt='#'></img>
                <p>Pilih Metode</p>
                <img className='sbsElement1' src={sbsElement1} alt='#'></img>
                <img src={checkListBlue} alt='#'></img>
                <p>Bayar</p>
                <img className='sbsElement1' src={sbsElement1} alt='#'></img>
                <img src={sbsElement2} alt='#'></img>
                <p>Tiket</p>
            </div>
            </section>

            <section className='content-tiket'>
            <div className='content-notif'>
                <img src={checkListGreen} alt='#'></img>
                <h4>Pembayaran Berhasil</h4>
                <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
            </div>
            <div className='content-invoice'>
                <div className='invoice-ket'>
                    <ul>
                        <h6>Invoice</h6>
                        <p>*no invoice</p>
                    </ul>
                    <button><img src={unduhPic} alt='#'></img><label>&ensp;Unduh</label></button>
                </div>
                <div className='invoice-pdf'>
                <PdfViewer/>
                </div>
                
            </div>
            

            </section>

        </div>

        <FooterDefault/>
    </>
  )
}
