import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// import pdfFile1 from '../../../Asset/Pdf/[REFINED] FE - Challenge Chapter 7.pdf'

export const PdfViewer = () => {
  return (
    <>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
    
        <Viewer fileUrl="/src/Asset/Pdf/Pengantar Implementasi dan Pengujian Sistem.pdf" />
        </Worker>
    </>
  )
}
