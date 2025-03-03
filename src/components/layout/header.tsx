import logoImg from "../../../public/logo.svg";

export function Header() {
	return (
		<header className="header">
			<div className="logo">
				<a href="/">
					<img src={logoImg} alt="Logotipo: BeTalent" />
				</a>
			</div>
		</header>
	);
}
