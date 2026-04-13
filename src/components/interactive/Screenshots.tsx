import { memo, useState } from "react";
import type { ScreenshotsGallery } from "@/types/components";
import { areImagesEqual } from "@/types/content";
import DeviceToggle from "@/ui/DeviceToggle";

const Screenshots = ({ images }: ScreenshotsGallery) => {
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];
  // 1. 定义视频核心配置：指定视频路径，复用iphone第一个截图作为视频封面
  const IPHONE_VIDEO_URL = "/assets/screenshots/iphone/video.mp4";
  // 封面图兼容：若iphone无截图则用空值，避免报错
  const VIDEO_THUMBNAIL = images.iphone?.[0] || '';

	return (
		<div className="mb-16">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-heading">
					Screenshots
				</h2>
				<DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} />
			</div>
			<div className="relative overflow-hidden">
				<div className="screenshots-scrollbar overflow-x-scroll pb-4" style={{ maxHeight: '600px', scrollbarGutter: 'stable' }}>
					<div className="flex gap-6">
						{currentImages.map((image: string, index: number) => (
							<button
								key={`${activeDevice}-${index}`}
								type="button"
								className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
							>
                {/* 核心判断：仅iphone设备+第一个位置渲染视频，其余保持原有图片 */}
                {activeDevice === "iphone" && index === 0 ? (
                  // 视频标签：完全复用原有图片的样式、尺寸，添加播放控件+封面
                  <video
                    src={IPHONE_VIDEO_URL}
                    poster={VIDEO_THUMBNAIL} // 视频未播放时显示的封面（复用原截图）
                    controls // 原生播放控件（播放/暂停/进度/音量）
                    preload="none" // 优化性能：不自动预加载视频
                    loading="lazy" // 懒加载：滚动到才加载
                    className={`rounded-xl border border-gray-300 dark:border-white/10 object-cover shadow-lg ${activeDevice === "iphone"
                      ? "aspect-[9/19.5] w-[260px]"
                      : "aspect-[4/3] w-[360px]"
                    }`}
                    alt={`App demo video`}
                    autoPlay
                    muted
                    playsInline
                    loop
                  />
                ) : (
                  // 原有图片逻辑：完全保留，无任何改动
                  <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className={`rounded-xl border border-gray-300 dark:border-white/10 object-cover shadow-lg ${activeDevice === "iphone"
                      ? "aspect-[9/19.5] w-[260px]"
                      : "aspect-[4/3] w-[360px]"
                    }`}
                    loading="lazy"
                  />
                )}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Screenshots, areImagesEqual);