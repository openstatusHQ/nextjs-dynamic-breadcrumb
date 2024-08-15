import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function BreadcrumbSlot() {
	// Fetch dog from the api
	const dog = await Promise.resolve({
		name: "Odie",
		url: "https://static.wikia.nocookie.net/garfield/images/a/ac/OdieCharacter.jpg",
	});

	return (
		<BreadcrumbList>
			{" "}
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/dogs">Dogs</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage className="capitalize">{dog.name}</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	);
}
