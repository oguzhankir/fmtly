export type EngineParseError = {
	message: string;
	plainLanguageExplanation?: string;
	line?: number;
	column?: number;
};

export type ParseResult =
	| { success: true; data: unknown }
	| { success: false; error: EngineParseError };

export type FormatResult =
	| { success: true; output: string }
	| { success: false; error: EngineParseError };

export type ConvertResult =
	| { success: true; output: string }
	| { success: false; error: EngineParseError };
