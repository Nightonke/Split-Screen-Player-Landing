import { memo } from "react";
import type { FeaturesList } from "@/types/components";

const Features = ({ items }: FeaturesList) => {
	return (
		<div className="mb-16">
			<h2 className="mb-6 text-2xl font-semibold text-heading">Features</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{items.map((feature) => (
					<div key={feature.title} className="card-base p-5 md:p-6">
						<h3 className="mb-2.5 text-xl font-semibold text-gray-800 dark:text-white">
							{feature.title}
						</h3>
						<p className="text-base leading-relaxed text-body">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default memo(Features);
