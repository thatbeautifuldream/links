import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

const links = [
	{
		to: "https://milindmishra.com",
		category: "Personal site",
		title: "milindmishra.com",
		description: "Explore projects, portfolio, and writings.",
	},
	{
		to: "https://resume.milind.app",
		category: "Resume",
		title: "resume.milind.app",
		description: "View or download the latest resume.",
	},
];

function App() {
	return (
		<div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
			<div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10">
				<div className="flex flex-col space-y-2">
					{links.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className="block rounded-xl border border-transparent bg-black p-10 text-white transition-colors hover:border-sky-500"
						>
							<p className="text-xs font-semibold tracking-widest text-gray-400 uppercase font-mono">
								{link.category}
							</p>
							<h2 className="mt-2 text-lg font-semibold">{link.title}</h2>
							<p className="mt-3 text-sm text-gray-400">{link.description}</p>
						</Link>
					))}
				</div>
			</div>

			<div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
			<div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
			<div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
			<div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
		</div>
	);
}
