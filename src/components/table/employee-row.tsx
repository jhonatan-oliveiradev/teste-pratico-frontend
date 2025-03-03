import { Employee } from "../../types/employee-data";
import { formatDate } from "../../utils/format-date";
import { formatPhone } from "../../utils/format-phone";

interface EmployeeRowProps {
	employee: Employee;
}

export const EmployeeRow = ({ employee }: EmployeeRowProps) => (
	<tr>
		<td className="photo-cell">
			<img
				src={employee.image || "../public/placeholder.svg"}
				alt={employee.name}
				className="employee-photo"
			/>
		</td>
		<td>{employee.name}</td>
		<td>{employee.job}</td>
		<td>{formatDate(employee.admission_date)}</td>
		<td>{formatPhone(employee.phone)}</td>
	</tr>
);
