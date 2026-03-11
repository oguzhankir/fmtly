<script lang="ts">
    import { onMount } from "svelte";
    import PdfDropZone from "./PdfDropZone.svelte";
    import {
        ChevronLeft,
        ChevronRight,
        ZoomIn,
        ZoomOut,
        File as FileIcon,
    } from "lucide-svelte";

    let pdfData: ArrayBuffer | null = $state(null);
    let fileName = $state("");
    let fileSize = $state(0);
    let pageCount = $state(0);
    let currentPage = $state(1);
    let scale = $state(1.5);
    let loading = $state(false);
    let error = $state<string | null>(null);
    let canvasEl: HTMLCanvasElement | undefined = $state(undefined);

    const ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5, 2];

    async function handleFiles(files: File[]) {
        const file = files[0];
        if (!file) return;
        error = null;
        loading = true;
        fileName = file.name;
        fileSize = file.size;

        try {
            pdfData = await file.arrayBuffer();
            const engine = await import("../../engines/pdf/pdfjs.engine");
            pageCount = await engine.getPageCount(pdfData!);
            currentPage = 1;
            await renderCurrent();
        } catch (e) {
            error =
                "Could not read PDF. The file may be corrupted or password-protected.";
            pdfData = null;
        } finally {
            loading = false;
        }
    }

    async function renderCurrent() {
        if (!pdfData || !canvasEl) return;
        loading = true;
        try {
            const engine = await import("../../engines/pdf/pdfjs.engine");
            await engine.renderPageToCanvas(
                pdfData,
                currentPage,
                canvasEl,
                scale,
            );
        } catch {
            error = "Failed to render page.";
        } finally {
            loading = false;
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            renderCurrent();
        }
    }
    function nextPage() {
        if (currentPage < pageCount) {
            currentPage++;
            renderCurrent();
        }
    }
    function zoomIn() {
        const i = ZOOM_LEVELS.indexOf(scale);
        if (i < ZOOM_LEVELS.length - 1) {
            scale = ZOOM_LEVELS[i + 1];
            renderCurrent();
        }
    }
    function zoomOut() {
        const i = ZOOM_LEVELS.indexOf(scale);
        if (i > 0) {
            scale = ZOOM_LEVELS[i - 1];
            renderCurrent();
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "ArrowLeft") prevPage();
        else if (e.key === "ArrowRight") nextPage();
        else if (e.key === "+" || e.key === "=") zoomIn();
        else if (e.key === "-") zoomOut();
    }

    function formatSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    });
</script>

<div class="viewer-panel">
    {#if !pdfData}
        <div class="drop-wrapper">
            <PdfDropZone onfiles={handleFiles} />
        </div>
    {:else}
        <!-- Toolbar -->
        <div class="toolbar">
            <div class="nav-group">
                <button
                    onclick={prevPage}
                    disabled={currentPage <= 1}
                    class="tb-btn"><ChevronLeft size={16} /></button
                >
                <span class="page-info">Page {currentPage} of {pageCount}</span>
                <button
                    onclick={nextPage}
                    disabled={currentPage >= pageCount}
                    class="tb-btn"><ChevronRight size={16} /></button
                >
            </div>
            <div class="zoom-group">
                <button
                    onclick={zoomOut}
                    disabled={scale <= ZOOM_LEVELS[0]}
                    class="tb-btn"><ZoomOut size={16} /></button
                >
                <span class="zoom-info">{Math.round(scale * 100)}%</span>
                <button
                    onclick={zoomIn}
                    disabled={scale >= ZOOM_LEVELS[ZOOM_LEVELS.length - 1]}
                    class="tb-btn"><ZoomIn size={16} /></button
                >
            </div>
            <div class="file-info">
                <FileIcon size={13} />
                {fileName} — {formatSize(fileSize)}
            </div>
        </div>

        <!-- Canvas -->
        <div class="canvas-container">
            {#if loading}
                <div class="loading-overlay">Rendering…</div>
            {/if}
            {#if error}
                <div class="error-msg">{error}</div>
            {/if}
            <canvas bind:this={canvasEl}></canvas>
        </div>
    {/if}
</div>

<style>
    .viewer-panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }
    .drop-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-8);
    }
    .toolbar {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        flex-shrink: 0;
        flex-wrap: wrap;
    }
    .nav-group,
    .zoom-group {
        display: flex;
        align-items: center;
        gap: var(--space-1);
    }
    .tb-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: var(--radius-md);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .tb-btn:hover:not(:disabled) {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .tb-btn:disabled {
        opacity: 0.4;
        cursor: default;
    }
    .page-info,
    .zoom-info {
        font-size: var(--text-xs);
        color: var(--text-secondary);
        min-width: 80px;
        text-align: center;
    }
    .zoom-info {
        min-width: 50px;
    }
    .file-info {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        display: flex;
        align-items: center;
        gap: var(--space-1);
        margin-left: auto;
    }
    .canvas-container {
        flex: 1;
        overflow: auto;
        display: flex;
        justify-content: center;
        padding: var(--space-4);
        background: var(--bg-base);
        position: relative;
    }
    .canvas-container canvas {
        max-width: 100%;
        height: auto;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
    }
    .loading-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: color-mix(in srgb, var(--bg-base) 80%, transparent);
        font-size: var(--text-sm);
        color: var(--text-tertiary);
        z-index: 1;
    }
    .error-msg {
        position: absolute;
        top: var(--space-4);
        left: 50%;
        transform: translateX(-50%);
        padding: var(--space-2) var(--space-4);
        background: var(--status-invalid-bg);
        color: var(--status-invalid);
        font-size: var(--text-sm);
        border-radius: var(--radius-md);
        z-index: 2;
    }
</style>
