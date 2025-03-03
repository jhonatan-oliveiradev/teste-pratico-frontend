import { Employee } from "../../types/employee-data";

import { EmployeeCard } from "./employee-card";
import { EmployeeRow } from "./employee-row";

interface EmployeeTableProps {
	employees: Employee[];
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
	return (
		<div className="table-container">
			<table className="employee-table desktop-table">
				<thead>
					<tr>
						<th className="photo-column">FOTO</th>
						<th>NOME</th>
						<th>CARGO</th>
						<th>DATA DE ADMISSÃO</th>
						<th>TELEFONE</th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee) => (
						<EmployeeRow key={employee.id} employee={employee} />
					))}
				</tbody>
			</table>

			<div className="mobile-employee-list">
				<div className="mobile-header">
					<span>FOTO</span>
					<span>NOME</span>
					<span>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							xmlns="http://www.w3.org/2000/svg"
							style={{ fill: "white", borderRadius: "50%" }}
						>
							<circle cx="5" cy="5" r="5" />
						</svg>
					</span>
				</div>
				{employees.map((employee) => (
					<EmployeeCard key={employee.id} employee={employee} />
				))}
			</div>
		</div>
	);
}
