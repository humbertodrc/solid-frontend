/* eslint-disable react-hooks/exhaustive-deps */
import { useContextProduct } from '../../hooks/useContextProduct';
import ReportGenerator from "./Report";
import { useEffect } from 'react';

export const ReportPrint = () => {
	// Datos para el informe
	const {products:reportData} = useContextProduct();

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
  }, [reportData]);

	return (
		<>
			<h2>ReportPrint</h2>
			<p>Revisar reportes en la consola</p>
		</>
	);
};
