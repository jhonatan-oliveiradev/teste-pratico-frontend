export const formatPhone = (phone: string): string => {
	const cleaned = phone.replace(/\D/g, "");

	const isInternational = cleaned.startsWith("55");
	const numberWithoutCountryCode = isInternational ? cleaned.slice(2) : cleaned;
	const ddd = numberWithoutCountryCode.slice(0, 2);
	const mainNumber = numberWithoutCountryCode.slice(2);

	if (mainNumber.length < 8 || mainNumber.length > 9) return phone;

	const formattedNumber =
		mainNumber.length === 9
			? `${mainNumber.slice(0, 5)}-${mainNumber.slice(5)}`
			: `${mainNumber.slice(0, 4)}-${mainNumber.slice(4)}`;

	return isInternational
		? `+55 (${ddd}) ${formattedNumber}`
		: `(${ddd}) ${formattedNumber}`;
};
