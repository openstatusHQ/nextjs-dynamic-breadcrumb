import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function BreadcrumbSlot() {
	// Fetch our cat information from the database
	const cat = await Promise.resolve({
		name: "Garfield",
		url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1920px-Garfield_the_Cat.svg.png",
	});
	return (
		<BreadcrumbList>
			{" "}
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/cats">Cats</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage className="capitalize">{cat.name}</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	);
}
