import Link from "next/link";

export default function Home() {
	return (
		<main className="flex  flex-col items-center justify-between p-24">
			Dynamic breadcrumb are fun
			<ul>
				<li>
					<Link href="/dogs">Dogs</Link>
				</li>
				<li>
					<Link href="/cats">Cats</Link>
				</li>
				<li>
					<Link href="/cats/garfield">Garfield</Link>
				</li>
			</ul>
		</main>
	);
}
