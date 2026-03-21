import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "m-shaka's notes",
	tagline: "",
	favicon: undefined,

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://m-shaka.github.io",
	baseUrl: "/notes/",

	organizationName: "m-shaka",
	projectName: "notes",

	onBrokenLinks: "throw",

	headTags: [
		{
			tagName: "meta",
			attributes: {
				name: "robots",
				content: "noindex",
			},
		},
	],

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "ja",
		locales: ["ja"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					routeBasePath: "/",
					remarkPlugins: [remarkMath],
					rehypePlugins: [rehypeKatex],
					admonitions: {
						keywords: ["definition"],
						extendDefaults: true,
					},
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	stylesheets: [],

	themeConfig: {
		docs: {
			sidebar: {
				hideable: true,
			},
		},
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "m-shaka's notes",
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "ノート",
				},
			],
		},
		footer: {
			style: "dark",
			copyright: `Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
