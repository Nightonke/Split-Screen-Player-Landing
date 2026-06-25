import type { LanguageSwitcherProps } from "@/types/components";

const LanguageSwitcher = ({ links, label }: LanguageSwitcherProps) => (
	<nav aria-label={label} className="flex flex-wrap items-center gap-2">
		<span className="text-sm font-medium text-muted">{label}</span>
		{links.map((link) => (
			<a
				key={link.locale}
				href={link.href}
				hrefLang={link.hrefLang}
				aria-current={link.isActive ? "page" : undefined}
				className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
					link.isActive
						? "border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-black"
						: "border-gray-300 text-body hover:border-gray-500 hover:text-heading dark:border-white/15 dark:hover:border-white/40"
				}`}
			>
				{link.label}
			</a>
		))}
	</nav>
);

export default LanguageSwitcher;
