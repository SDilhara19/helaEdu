import React from "react";
import pdfCatholics from '@assets/temp/pdfCatholics.pdf';
import pdfGeography from '@assets/temp/pdfGeography.pdf';
import pdfICT from '@assets/temp/pdfICT.pdf';
import pdfMaths from '@assets/temp/pdfMaths.pdf';
import test from '@assets/temp/test.pdf'
const pdfMapping = {
  mathematics: pdfMaths,
  science: test,
  geography: pdfGeography,
  businessstudies:test,
  catholicism: pdfCatholics,
  healthscience: test,
  ict: pdfICT,
  
};

function PdfBook({ subject }) {
  const pdfFile = pdfMapping[subject.toLowerCase()];

  return (
    <div className="pdf">
      <p className="flex justify-end p-0 m-0 text-xl">{subject}</p>
      <object data={pdfFile} type="application/pdf" height="100%" width="100%">
      
        <param name="src" value={pdfFile} />
      </object>
    </div>
  );
}

export default PdfBook;
