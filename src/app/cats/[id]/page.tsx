import Image from "next/image";
export default async function CatPage({ params }: { params: { id: string } }) {
	const cat = await Promise.resolve({
		name: "Garfield",
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1920px-Garfield_the_Cat.svg.png",
	});

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-xl">{cat.name}</h1>

			<Image src="/garfield.png" alt={cat.name} width={200} height={200} />
		</div>
	);
}
