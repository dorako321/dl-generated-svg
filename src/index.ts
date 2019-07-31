export default function downloadSvg(svg: Node, ext: string, fileName: string = 'export.svg') {
    let a = document.createElement("a");
    const xml = new XMLSerializer().serializeToString(svg);
    const blob: string = window.URL.createObjectURL(new Blob([xml], {
        type: "image/svg+xml"
    }));

    a.href = blob;
    a.download = fileName;
    a.setAttribute("style", "display: none");
    document.body.appendChild(a);

    a.click();
    if (a.parentNode != null) {
        a.parentNode.removeChild(a);
    }
    window.URL.revokeObjectURL(blob);
}