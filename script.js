const { PDFDocument } = PDFLib;

document.querySelectorAll('.tool-card').forEach(card => {
  card.onclick = () => {
    const tool = card.dataset.tool;
    document.getElementById('tool-title').textContent = card.querySelector('h3').textContent;
    document.getElementById('tool-modal').style.display = 'block';
    window.currentTool = tool;
  };
});

document.querySelector('.close').onclick = () => {
  document.getElementById('tool-modal').style.display = 'none';
};

let files = [];
const dropArea = document.getElementById('drop-area');
dropArea.ondrop = e => {
  e.preventDefault();
  files = [...e.dataTransfer.files];
  dropArea.textContent = `${files.length} file(s) selected`;
};
dropArea.ondragover = e => e.preventDefault();

document.getElementById('file-input').onchange = e => {
  files = [...e.target.files];
  dropArea.textContent = `${files.length} file(s) selected`;
};

document.getElementById('process-btn').onclick = async () => {
  if (!files.length) return alert("Upload files first");

  const progress = document.querySelector('.progress div');
  progress.style.width = '0%';

  if (window.currentTool === 'merge') {
    const mergedPdf = await PDFDocument.create();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach(p => mergedPdf.addPage(p));
      progress.style.width = `${((i+1)/files.length)*100}%`;
    }
    const pdfBytes = await mergedPdf.save();
    download(pdfBytes, "merged.pdf");
  }
};

function download(bytes, filename) {
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.getElementById('download-link');
  a.href = url; a.download = filename; a.style.display = 'block';
  a.textContent = `Download ${filename}`;
}
