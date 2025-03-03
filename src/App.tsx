import { useState } from "react";
import { useEmployees } from "./hooks/use-employee";

import { Header } from "./components/layout/header";
import { SearchBar } from "./components/shared/search-bar";
import { EmployeeTable } from "./components/table/employee-table";
import Loading from "./components/shared/loading";

import "./App.css";

function App() {
	const { employees, loading, error } = useEmployees();
	const [searchTerm, setSearchTerm] = useState("");

	const filteredEmployees = employees.filter((employee) => {
		const lowerCaseSearchTerm = searchTerm.toLowerCase();
		return (
			employee.name.toLowerCase().includes(lowerCaseSearchTerm) ||
			employee.job.toLowerCase().includes(lowerCaseSearchTerm) ||
			employee.phone.includes(searchTerm) ||
			new Date(employee.admission_date)
				.toLocaleDateString()
				.includes(lowerCaseSearchTerm)
		);
	});

	const noResults = filteredEmployees.length === 0;

	return (
		<div className="app">
			<Header />

			<main className="main-content">
				<div className="title-search-container">
					<h1 className="title">Funcionários</h1>
					<SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
				</div>

				{loading ? (
					<Loading />
				) : error ? (
					<p className="error-message">{error}</p>
				) : noResults ? (
					<p className="no-results-message">Nenhum funcionário encontrado.</p>
				) : (
					<EmployeeTable employees={filteredEmployees} />
				)}
			</main>
		</div>
	);
}

export default App;
