import React, { type ReactNode } from "react";
import Layout from "@theme-original/DocItem/Layout";
import type LayoutType from "@theme/DocItem/Layout";
import type { WrapperProps } from "@docusaurus/types";
import { useDoc } from "@docusaurus/plugin-content-docs/client";

type Props = WrapperProps<typeof LayoutType>;

const RAW_BASE =
	"https://raw.githubusercontent.com/m-shaka/notes/main/";

function OpenRawMarkdownButton(): ReactNode {
	const { metadata } = useDoc();
	const filePath = metadata.source.replace(/^@site\//, "");
	const url = `${RAW_BASE}${filePath}`;

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			title="Markdownを開く"
			style={{
				position: "fixed",
				bottom: "1rem",
				right: "1rem",
				zIndex: 100,
				padding: "0.5rem 1rem",
				borderRadius: "0.375rem",
				border: "1px solid var(--ifm-color-emphasis-300)",
				backgroundColor: "var(--ifm-background-surface-color)",
				cursor: "pointer",
				fontSize: "0.875rem",
				textDecoration: "none",
				color: "var(--ifm-font-color-base)",
			}}
		>
			Raw MD
		</a>
	);
}

export default function LayoutWrapper(props: Props): ReactNode {
	return (
		<>
			<Layout {...props} />
			<OpenRawMarkdownButton />
		</>
	);
}
