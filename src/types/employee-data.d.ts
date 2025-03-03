export interface Employee {
	id: number;
	name: string;
	job: string;
	admission_date: string;
	phone: string;
	image?: string;
}

export interface EmployeeList {
	employees: Employee[];
}
