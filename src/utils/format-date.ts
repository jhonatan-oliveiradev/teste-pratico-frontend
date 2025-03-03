export const formatDate = (dateInput: Date | string): string => {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

	return date.toLocaleDateString("pt-BR");
};

export const formatLongDate = (dateInput: Date | string): string => {
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	return date.toLocaleDateString("pt-BR", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	});
};
