import React, { type ReactNode } from "react";
import clsx from "clsx";
import type { Props } from "@theme/Admonition/Type/Note";
import AdmonitionLayout from "@theme/Admonition/Layout";
import AdmonitionTypeNote from "@theme/Admonition/Type/Note";
import AdmonitionTypeTip from "@theme/Admonition/Type/Tip";
import AdmonitionTypeInfo from "@theme/Admonition/Type/Info";
import AdmonitionTypeWarning from "@theme/Admonition/Type/Warning";
import AdmonitionTypeDanger from "@theme/Admonition/Type/Danger";
import AdmonitionTypeCaution from "@theme/Admonition/Type/Caution";

const defaultProps = {
	icon: <>📖</>,
	title: <>定義</>,
};

function AdmonitionTypeDefinition(props: Props): ReactNode {
	return (
		<AdmonitionLayout
			{...defaultProps}
			{...props}
			className={clsx("alert alert--secondary", props.className)}
		>
			{props.children}
		</AdmonitionLayout>
	);
}

const AdmonitionTypes = {
	note: AdmonitionTypeNote,
	tip: AdmonitionTypeTip,
	info: AdmonitionTypeInfo,
	warning: AdmonitionTypeWarning,
	danger: AdmonitionTypeDanger,
	caution: AdmonitionTypeCaution,
	definition: AdmonitionTypeDefinition,
};

export default AdmonitionTypes;
