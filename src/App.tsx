import "./App.css";
import { ProductForm } from './components/products/ProductForm';
import {ProductList} from "./components/products/ProductList";
import {ReportPrint} from './components/reports/ReportPrint';
import ProductProvider from "./context/ProductProvider";

function App() {
	return (
		<main>
			<h1 className="text-3xl font-bold">S.O.L.I.D</h1>
			<ProductProvider>
        <ProductList />
				<ProductForm />
				{/* <ReportPrint /> */}
			</ProductProvider>
		</main>
	);
}

export default App;
