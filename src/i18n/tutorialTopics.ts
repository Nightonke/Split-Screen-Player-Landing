export const tutorialTopics = {
  toolbar: {
    slug: "customize-bottom-toolbar",
    category: "playback",
    images: {
      ios: ["01-settings", "03-available", "04-added-action", "05-home"],
      android: ["01-settings", "03-available", "04-reordered", "05-home"],
    },
    related: ["swipe"],
  },
  swipe: {
    slug: "swipe-compare-two-videos",
    category: "comparison",
    images: {
      ios: ["01-controls", "04-alignment", "02-directions", "06-result"],
      android: ["01-controls", "04-alignment", "02-directions", "07-reference-lines"],
    },
    related: ["toolbar"],
  },
  waterfall: {
    slug: "scrolling-video-waterfall",
    category: "layout",
    images: {
      ios: ["01-source", "02-select", "03-settings", "04-result"],
      android: ["01-source", "02-select", "03-settings", "04-result"],
    },
    related: ["counterflow", "toolbar"],
  },
  counterflow: {
    slug: "videos-scroll-opposite-directions",
    category: "layout",
    images: {
      ios: ["01-source", "02-settings", "03-direction", "04-result"],
      android: ["01-source", "02-settings", "03-direction", "04-result"],
    },
    related: ["waterfall", "toolbar"],
  },
  gallery: {
    slug: "create-dynamic-video-gallery",
    category: "gallery",
    images: {
      ios: ["01-select", "02-template", "03-style", "04-bookmark"],
      android: ["01-select", "02-template", "03-style", "04-bookmark"],
    },
    hero: "06-result",
    related: ["waterfall", "counterflow", "toolbar"],
  },
  photos: {
    slug: "independent-photo-slideshows",
    category: "gallery",
    images: {
      ios: ["02-select", "03-group", "04-settings", "05-result"],
      android: ["02-select", "03-group", "04-settings", "05-result"],
    },
    hero: "05-result",
    related: ["gallery", "toolbar"],
  },
  frames: {
    slug: "compare-sports-videos-frame-by-frame",
    category: "comparison",
    images: { ios: ["01-frame-mode", "02-next-frame", "03-slow-motion", "04-second-player"], android: ["01-frame-mode", "02-next-frame", "03-slow-motion", "04-return-checkpoint"] },
    related: ["checkpoints", "sync", "toolbar"],
  },
  checkpoints: {
    slug: "save-video-checkpoints",
    category: "comparison",
    images: { ios: ["01-help", "02-added", "03-move-away", "04-jumped"], android: ["01-help", "02-added", "03-list", "04-jumped"] },
    related: ["frames", "sync", "toolbar"],
  },
  sync: {
    slug: "sync-videos-different-start-times",
    category: "comparison",
    images: { ios: ["01-groups", "02-adjust-points", "03-preview", "04-enable"], android: ["01-groups", "02-adjust-points", "03-preview", "04-enable"] },
    hero: "05-applied",
    related: ["frames", "checkpoints", "toolbar"],
  },
  snapshot: {
    slug: "save-split-screen-comparison-image",
    category: "media",
    images: { ios: ["01-add-action", "02-arrange", null, "04-result"], android: ["01-add-action", "02-arrange", "03-save", "04-result"] },
    related: ["export", "bookmarks", "toolbar"],
  },
  bookmarks: {
    slug: "save-restore-video-workspace",
    category: "playback",
    images: { ios: ["01-saved", "02-close", "03-empty", "04-restored"], android: ["01-saved", "02-close", "03-empty", "04-restored"] },
    related: ["snapshot", "gallery", "toolbar"],
  },
  export: {
    slug: "export-split-screen-video",
    category: "media",
    images: { ios: ["01-range", "02-framing", "03-output", "05-complete"], android: ["01-range", "02-framing", "03-output", "05-complete"] },
    hero: "06-saved",
    related: ["snapshot", "sync", "toolbar"],
  },
  playback: {
    slug: "change-multiple-video-speeds",
    category: "playback",
    images: { ios: ["01-controls", "02-speed", "03-all-speed", "04-normal-speed"], android: ["01-controls", "02-speed", "03-all-speed", "04-hold-fast"] },
    related: ["frames", "global", "toolbar"],
  },
  global: {
    slug: "control-all-videos-together",
    category: "playback",
    images: { ios: ["01-play-all", "02-pause-all", "03-progress", "04-restart"], android: ["01-play-all", "02-pause-all", "03-progress", "04-restart"] },
    related: ["playback", "sync", "toolbar"],
  },
  timer: {
    slug: "set-video-sleep-timer",
    category: "playback",
    images: { ios: ["01-presets", "02-custom", "03-running", "04-paused"], android: ["01-presets", "02-custom", "03-running", "04-paused"] },
    related: ["global", "gallery", "toolbar"],
  },
  looks: {
    slug: "apply-video-filters",
    category: "playback",
    images: { ios: ["01-presets", "02-intensity", "03-single-player", "04-all-frames"], android: ["01-presets", "02-intensity", "03-single-player", "04-all-frames"] },
    hero: "05-all-result",
    related: ["transform", "gallery", "toolbar"],
  },
  transform: {
    slug: "fit-fill-rotate-mirror-videos",
    category: "layout",
    images: { ios: ["01-fit", "02-fill", "03-rotate", "04-mirror"], android: ["01-fit", "02-fill", "03-rotate", "05-mirror"] },
    related: ["focus", "looks", "toolbar"],
  },
  focus: {
    slug: "maximize-one-video-and-return",
    category: "layout",
    images: { ios: ["01-workspace", "02-first", "03-next", "04-restored"], android: ["01-workspace", "02-first", "03-next", "04-restored"] },
    related: ["transform", "bookmarks", "toolbar"],
  },
  audio: {
    slug: "listen-to-one-video-at-a-time",
    category: "playback",
    images: { ios: ["01-two-videos", "02-solo-first", "03-solo-next", "04-mute-all"], android: ["01-two-videos", "02-solo-first", "03-solo-next", "04-mute-all"] },
    related: ["global", "playlists", "toolbar"],
  },
  playlists: {
    slug: "switch-multiple-video-playlists",
    category: "playback",
    images: { ios: ["01-enable", "02-select", "05-list", "04-next-pair"], android: ["01-enable", "02-select", "05-list", "04-next-pair"] },
    hero: "03-first-pair",
    related: ["global", "bookmarks", "toolbar"],
  },
  filter: {
    slug: "filter-album-videos",
    category: "media",
    images: { ios: ["01-enable", "02-select", "03-matches", "04-result"], android: ["01-enable", "02-select", "03-matches", "04-result"] },
    related: ["playlists", "toolbar"],
  },
  documents: {
    slug: "watch-video-with-pdf-notes",
    category: "media",
    images: { ios: ["01-open", "02-file", "03-first-page", "04-next-page"], android: ["01-open", "02-file", "03-first-page", "04-next-page"] },
    related: ["files", "focus", "toolbar"],
  },
  files: {
    slug: "open-local-video-files-folders",
    category: "media",
    images: { ios: ["01-open", "02-select", "03-folder", "04-imported"], android: ["01-open", "02-folder", "03-permission", "04-imported"] },
    hero: "06-restored",
    related: ["bookmarks", "filter", "playlists"],
  },
  streams: {
    slug: "play-hls-rtsp-streams-together",
    category: "web",
    iosCapture: "iPhone 17 Pro Max",
    images: { ios: ["01-open", "02-addresses", "03-both", "04-fullscreen"], android: ["01-open", "02-hls", "03-rtsp", "04-both"] },
    related: ["audio", "bookmarks", "toolbar"],
  },
  "web-video": {
    slug: "open-web-video-in-another-player",
    category: "web",
    platforms: ["ios"],
    images: { ios: ["01-source", "02-detected", "03-transferred", "04-controls"], android: [] },
    related: ["youtube", "audio", "toolbar"],
  },
  youtube: {
    slug: "watch-two-youtube-videos",
    category: "web",
    platforms: ["ios"],
    images: { ios: ["01-source", "02-detected", "03-transferred", "04-both"], android: [] },
    related: ["web-video", "audio", "toolbar"],
  },
} as const;

export type TutorialTopic = keyof typeof tutorialTopics;
const legacyIosSlugs = {
  frames: "compare-sports-videos-frame-by-frame",
  sync: "sync-videos-different-start-times",
  export: "export-split-screen-video",
  documents: "video-pdf-web-multitasking",
  streams: "play-rtsp-live-streams",
} as const;
export type TutorialSlug = `${typeof tutorialTopics[TutorialTopic]["slug"]}-${"iphone-ipad" | "android"}` | typeof legacyIosSlugs[keyof typeof legacyIosSlugs];
export type GuideTopic = "comparison" | "layout" | "gallery" | "playback" | "media" | "web";

export function tutorialSlug(topic: TutorialTopic, platform: "ios" | "android"): TutorialSlug {
  if (platform === "ios" && topic in legacyIosSlugs) return legacyIosSlugs[topic as keyof typeof legacyIosSlugs];
  return `${tutorialTopics[topic].slug}-${platform === "ios" ? "iphone-ipad" : "android"}`;
}
