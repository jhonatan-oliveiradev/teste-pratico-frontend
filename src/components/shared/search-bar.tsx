interface SearchBarProps {
	searchTerm: string;
	onSearch: (term: string) => void;
}

export function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Pesquisar"
				className="search-input"
				value={searchTerm}
				onChange={(e) => onSearch(e.target.value)}
			/>
			<button className="search-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
			</button>
		</div>
	);
}
