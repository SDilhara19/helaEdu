import React from "react";
import pdfBusiness from '@assets/temp/pdfBusiness&AccountingStudies.pdf';
import pdfCatholics from '@assets/temp/pdfCatholics.pdf';
import pdfGeography from '@assets/temp/pdfGeography.pdf';
import pdfHealthScience from '@assets/temp/pdfHealthScience.pdf';
import pdfICT from '@assets/temp/pdfICT.pdf';
import pdfMaths from '@assets/temp/pdfMaths.pdf';
import pdfScience from '@assets/temp/pdfScience.pdf';

const pdfMapping = {
  mathematics: pdfMaths,
  science: pdfScience,
  geography: pdfGeography,
  businessstudies: pdfBusiness,
  catholism: pdfCatholics,
  healthscience: pdfHealthScience,
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
