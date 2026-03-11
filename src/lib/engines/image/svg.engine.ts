// SVG optimizer — lazy loads svgo, runs entirely in browser

export type SvgoResult = {
	data: string;
	originalSize: number;
	optimizedSize: number;
	savings: string;
};

export async function optimizeSvg(svgString: string): Promise<SvgoResult> {
	const { optimize } = await import('svgo/browser');
	const result = optimize(svgString, {
		multipass: true,
		plugins: [
			'removeDoctype',
			'removeComments',
			'removeMetadata',
			'cleanupIds',
			'removeUselessDefs',
			'convertColors',
			'removeUnusedNS',
			'cleanupNumericValues',
			'convertTransform'
		]
	});
	return {
		data: result.data,
		originalSize: svgString.length,
		optimizedSize: result.data.length,
		savings: ((1 - result.data.length / svgString.length) * 100).toFixed(1)
	};
}
