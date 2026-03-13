import { isSupportedLocale } from '$lib/utils/locale-routing.js';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): boolean => isSupportedLocale(param)) satisfies ParamMatcher;
