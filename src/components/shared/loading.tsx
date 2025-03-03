import Spinner from "./spinner";

const Loading = () => (
	<div className="loading-container">
		<Spinner />
		<span className="sr-only">Carregando...</span>
	</div>
);

export default Loading;
