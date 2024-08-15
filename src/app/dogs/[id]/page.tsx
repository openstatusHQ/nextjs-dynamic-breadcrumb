import Image from "next/image";
export default async function CatPage({ params }: { params: { id: string } }) {
	const dog = await Promise.resolve({
		name: "Odie",
		url: "https://static.wikia.nocookie.net/garfield/images/a/ac/OdieCharacter.jpg",
	});

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-xl">{dog.name}</h1>

			<Image src="/odie.png" alt={dog.name} width={200} height={200} />
		</div>
	);
}
