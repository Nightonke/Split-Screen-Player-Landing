import { memo, useState } from "react";
import type { ScreenshotsGallery } from "@/types/components";
import type { ScreenshotItem } from "@/types/content";
import { areImagesEqual } from "@/types/content";
import DeviceToggle from "@/ui/DeviceToggle";

const Screenshots = ({ images, labels }: ScreenshotsGallery) => {
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	return (
		<div className="mb-16">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-heading">
					{labels.screenshots}
				</h2>
				<DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} labels={labels} />
			</div>
			<div className="relative overflow-hidden">
				<div className="screenshots-scrollbar overflow-x-scroll pb-4" style={{ maxHeight: '600px', scrollbarGutter: 'stable' }}>
					<div className="flex gap-6">
						{currentImages.map((item: ScreenshotItem, index: number) => (
							<button
								key={`${activeDevice}-${index}`}
								type="button"
								onClick={() => window.openLightbox?.(index, activeDevice)}
								className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
								aria-label={`${labels.goToImage} ${index + 1}`}
							>
                <img
                  src={item.src}
                  alt={item.alt || `Screenshot ${index + 1}`}
                  className={`rounded-xl border border-gray-300 dark:border-white/10 object-cover shadow-lg ${activeDevice === "iphone"
                    ? "aspect-[9/19.5] w-[260px]"
                    : "aspect-[2048/2732] w-[360px]"
                  }`}
                  loading="lazy"
                />
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Screenshots, areImagesEqual);
