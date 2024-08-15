import Link from "next/link";

export default function CatsPage() {
	return (
		<div className="flex  flex-col items-center">
			<h1>The dogs of OpenStatus</h1>
			<ul>
				<li>
					<Link href="/dogs/odie">Odie</Link>
				</li>
			</ul>
		</div>
	);
}
