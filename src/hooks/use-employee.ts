import { useState, useEffect } from "react";
import { Employee } from "../types/employee-data";

interface UseEmployeesReturn {
	employees: Employee[];
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	loading: boolean;
	error: string;
	noResults: boolean;
}

const API_URL = import.meta.env.VITE_API_URL;

export const useEmployees = (): UseEmployeesReturn => {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const fetchEmployees = async () => {
		try {
			const response = await fetch(API_URL);
			if (!response.ok) throw new Error("Erro ao buscar funcionários");
			const data: Employee[] = await response.json();
			setEmployees(data);
		} catch (err) {
			setError("Falha ao carregar funcionários.");
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchEmployees();
	}, []);

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

	return {
		employees: filteredEmployees,
		searchTerm,
		setSearchTerm,
		loading,
		error,
		noResults
	};
};
