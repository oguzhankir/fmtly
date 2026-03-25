declare module 'xmlschema.js' {
	type ValidatorFactory = (xsd: string) => {
		validate: (xml: string) => Promise<unknown>;
	};

	const mod: ValidatorFactory;
	export default mod;
}
