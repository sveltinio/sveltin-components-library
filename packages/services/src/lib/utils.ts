import type { IUmamiTrackerSettings } from './types.js';

export function isEmptyObject<Type extends IUmamiTrackerSettings>(obj: Type): boolean {
	return Object.keys(obj).length === 0;
}

export function isPropValueSet<Type>(value: Type) {
	switch (typeof value) {
		case 'boolean':
			return true;
		case 'number':
			return value > 0;
		case 'string':
			return value != '';
	}
}
