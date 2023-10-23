import jsPDF from 'jspdf';
import { json2csv } from 'json-2-csv';

// Implementa una clase para generar informes en formato PDF que cumpla con el Open-Closed Principle
class ReportGenerator {
  generatePDF(data: any) {
    const doc = new jsPDF();
    doc.text('Informe', 10, 10);
    doc.text(JSON.stringify(data), 10, 20);
    return doc.output('datauristring');
  }

  async generateCSV(data: any) {
    try {
      const csv = await json2csv(data);
      return csv;
    } catch (error) {
      console.error(error);
      throw new Error('Error en la generación del informe');
    }
  }
}

export default ReportGenerator;


