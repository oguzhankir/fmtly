/** Output size or work estimate above this uses a Web Worker (fmtly rule). */
export const GENERATE_WORKER_THRESHOLD_BYTES = 500 * 1024;

/** UUID v4/v7 text is ~36 chars plus separator; use worker when batch is huge. */
export const UUID_BATCH_WORKER_MIN_COUNT = 12_000;

/** Fake-data: use worker when row count is large or estimated output exceeds threshold. */
export const FAKE_DATA_WORKER_MIN_ROWS = 8_000;
