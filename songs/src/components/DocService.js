import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, {
      paperSize: 'Letter',
      fileName: 'Norms.pdf',
      margin: 5,
    });
  };
}

const Doc = new DocService();
export default Doc;
