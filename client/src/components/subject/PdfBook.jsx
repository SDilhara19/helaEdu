import React from "react";
import pdf from "@assets/temp/test.pdf";
function PdfBook() {
  return (
    <div className="pdf">
      <object data={pdf} type="application/pdf" height="100%" width="100%">
        <param name="src" value={pdf} />
      </object>
    </div>
  );
}

export default PdfBook;
