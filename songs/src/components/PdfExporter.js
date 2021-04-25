import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

var columns = [
  { title: 'A', dataKey: 'A' },
  { title: 'B', dataKey: 'B' },
  { title: 'C', dataKey: 'C' },
];

var rows = [
  { A: 'A', B: 'B', C: 'C' },
  { A: 'A', B: 'B', C: 'C' },
];

function createPdf() {
  console.log('Inside createPDF');
  var doc = new jsPDF('p', 'pt');
  doc.setFontSize(20);
  doc.setTextColor(40);
  //doc.setFontStyle('normal');
  doc.text('YOLO', 10, 20);

  doc.autoTable(columns, rows, {
    startY: doc.autoTableEndPosY() + 70,
    margin: { horizontal: 10 },
    styles: { overflow: 'linebreak' },
    bodyStyles: { valign: 'top' },
    columnStyles: { email: { cellWidth: 'wrap' } },
    theme: 'striped',
  });

//   doc.autoTable(columns, rows, {
//     startY: doc.autoTableEndPosY() + 70,
//     margin: { horizontal: 10 },
//     styles: { overflow: 'linebreak' },
//     bodyStyles: { valign: 'top' },
//     columnStyles: { email: { cellWidth: 'wrap' } },
//     theme: 'striped',
//   });
//   doc.save('repro.pdf');
// }

class PdfExporter extends React.Component {
  render() {
    return (
      <div>
        Pdf Exporter Autotable issue does not exist here.
        <br />
        <button onClick={createPdf}>Click here to the Download PDF</button>
      </div>
    );
  }
}

export default PdfExporter;
