import ReportGenerator from "./Report";
import { useEffect } from 'react';

export const ReportPrint = () => {
	// Datos para el informe
	const reportData = [
		{name: "John Doe", age: 30},
		{name: "Jane Smith", age: 25},
		// Agrega más datos según sea necesario
	];

	const reportGenerator = new ReportGenerator();

	// Generar un informe en formato PDF
	const pdfReport = reportGenerator.generatePDF(reportData);
	console.log("--- Informe en PDF ---");
	console.log(pdfReport);

	// Generar un informe en formato CSV
  const getReport = async () => {
    const csvReport = await reportGenerator.generateCSV(reportData);
    console.log("--- Informe en CSV ---");
    console.log(csvReport);
  };
  

  useEffect(() => {
    getReport();
  }, []);

	return (
		<>
			<h2>ReportPrint</h2>
			<p>Revisar reportes en la consola</p>
		</>
	);
};
