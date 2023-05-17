export type BreakpointMatch = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Screens = {
	[key in BreakpointMatch]: {
		min: string;
		max?: string;
	};
};

export type BreakpointsQueries = {
	[key in keyof Screens]?: boolean;
};

export type CSSPositionMatch = 'relative' | 'fixed' | 'sticky';

export type ResourceContent = {
	resource: string;
	metadata: YAMLFrontmatter;
	html?: string;
};

export class ResourceContentUtils {
	static getCoverPath(resourcesFolder: string, item: ResourceContent): string {
		if (item.metadata && item.metadata.cover != undefined) {
			return `${resourcesFolder}/${item.resource}/${item.metadata.slug}/${item.metadata.cover}`;
		}
		return '';
	}

	static getURL(base: string, item: ResourceContent): string {
		return `${base}/${item.resource}/${item.metadata.slug}`;
	}

	static getMetadataURL(
		base: string,
		resourceName: string,
		mdName: string,
		mdValue: string
	): string {
		return `${base}/${resourceName}/${mdName}/${mdValue}`;
	}
}

import type { TocEntry } from './components/toc/types.js';
export type { TocEntry };

import type { PagesNavigatorItem } from './components/pages-navigator/types.js';
export type { PagesNavigatorItem };

export type YAMLFrontmatter = {
	title: string;
	slug: string;
	draft: boolean;
	headings?: Array<TocEntry>;
	author?: string;
	headline?: string;
	created_at?: string;
	updated_at?: string;
	cover?: string;
	[key: string]: string | undefined | Array<TocEntry> | boolean;
};

import type { CardBadge } from './components/responsive-card/types.js';
export type { CardBadge };
