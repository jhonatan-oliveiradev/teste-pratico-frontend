import { useState } from "react";
import { Employee } from "../../types/employee-data";

import { formatPhone } from "../../utils/format-phone";
import { formatDate } from "../../utils/format-date";

interface EmployeeRowProps {
	employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeRowProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="employee-card" onClick={() => setIsExpanded(!isExpanded)}>
			<div className="employee-card-content">
				<div className="employee-photo-container">
					<img
						src={employee.image || "../public/placeholder.svg"}
						alt={employee.name}
						className="employee-photo"
					/>
				</div>
				<div className="employee-name">
					{employee.name}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={`chevron-icon ${isExpanded ? "active" : ""}`}
					>
						<polyline points="9 18 15 12 9 6"></polyline>
					</svg>
				</div>
			</div>
			{isExpanded && (
				<div className="employee-details">
					<p>
						<strong>Cargo:</strong> {employee.job}
					</p>
					<p>
						<strong>Admissão:</strong> {formatDate(employee.admission_date)}
					</p>
					<p>
						<strong>Telefone:</strong> {formatPhone(employee.phone)}
					</p>
				</div>
			)}
		</div>
	);
}
