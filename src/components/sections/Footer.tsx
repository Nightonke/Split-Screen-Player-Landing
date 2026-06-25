import { siteConfig } from "@config/site";
import SocialLinks from "@/sections/SocialLinks";
import type { FooterProps } from "@/types/components";
import LanguageSwitcher from "@/ui/LanguageSwitcher";
import ThemeToggle from "@/ui/ThemeToggle";

const Logo = ({ name, logo, href }: { name: string; logo: string; href: string }) => (
	<a href={href} className="flex items-center gap-3 group">
		<div className="relative w-10 h-10">
			<div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 dark:from-white/5 dark:to-white/10 rounded-lg blur-sm group-hover:blur-md transition-all" />
			<img
				src={logo}
				alt={`${name} Logo`}
				className="relative w-full h-full rounded-lg object-cover border border-gray-200/50 dark:border-white/10"
			/>
		</div>
		<span className="text-xl font-bold text-heading group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{name}</span>
	</a>
);

const LegalLinks = ({ privacyHref, termsHref, privacyLabel, termsLabel, className = "" }: {
	privacyHref: string;
	termsHref: string;
	privacyLabel: string;
	termsLabel: string;
	className?: string;
}) => (
	<div className={`flex items-center gap-2 text-base ${className}`}>
		<a
			href={privacyHref}
			className="flex items-center gap-2 text-body hover:text-heading transition-colors font-medium"
		>
			<span>{privacyLabel}</span>
		</a>
		<span className="text-gray-400 dark:text-gray-500">•</span>
		<a
			href={termsHref}
			className="flex items-center gap-2 text-body hover:text-heading transition-colors font-medium"
		>
			<span>{termsLabel}</span>
		</a>
	</div>
);

const Footer = ({ name, logo, description, homeHref, privacyHref, termsHref, labels, languageLinks }: FooterProps) => {
	const currentYear = new Date().getFullYear();
	const startYear = 2025;
	const copyrightText = currentYear > startYear 
		? `© ${startYear}-${currentYear} ${labels.allRightsReserved}`
		: `© ${labels.allRightsReserved}`;

	return (
		<footer className="py-10 bg-gray-50 dark:bg-black">
			<div className="container mx-auto px-3 md:px-6">
				<div className="mb-8 h-px w-full bg-gray-200 dark:bg-gray-800" />

				{/* Mobile Layout */}
				<div className="flex flex-col gap-6 md:hidden">
					<div className="flex items-center justify-between">
						<Logo name={name} logo={logo} href={homeHref} />
						<ThemeToggle />
					</div>

					<p className="text-lg text-body leading-relaxed">{description}</p>
					<LanguageSwitcher links={languageLinks} label={labels.languageLabel} />

					<div className="flex items-center justify-between">
						<div className="flex gap-3">
							<SocialLinks items={siteConfig.socialLinks} />
						</div>
						<LegalLinks
							privacyHref={privacyHref}
							termsHref={termsHref}
							privacyLabel={labels.privacy}
							termsLabel={labels.terms}
						/>
					</div>

					<div className="text-center">
						<div className="text-base text-body">{copyrightText}</div>
					</div>
				</div>

				{/* Desktop Layout */}
				<div className="hidden md:flex flex-col gap-4">
					<div className="flex items-start justify-between">
						<div className="flex flex-col gap-3 max-w-3xl">
							<Logo name={name} logo={logo} href={homeHref} />
							<p className="text-lg text-body leading-relaxed">{description}</p>
						</div>
						<ThemeToggle />
					</div>

					<div className="flex items-center justify-between pt-6 border-t border-gray-200/30 dark:border-gray-700/30">
						<div className="flex items-center gap-6">
							<div className="text-base text-body">{copyrightText}</div>
						</div>
						<LegalLinks
							privacyHref={privacyHref}
							termsHref={termsHref}
							privacyLabel={labels.privacy}
							termsLabel={labels.terms}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
