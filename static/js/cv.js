const areaCv = document.getElementById('area-cv')
const resumeButton = document.getElementById('resume-button')

const pdfOptions = {
  margin: [8, 8, 8, 8],
  filename: 'Gerangel_Berroteran_CV.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: {
    scale: 2,
    useCORS: true,
    letterRendering: true,
  },
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
  },
  pagebreak: {
    mode: ['avoid-all', 'css', 'legacy'],
  },
}

function generateResume() {
  document.body.classList.add('is-exporting')
  html2pdf()
    .set(pdfOptions)
    .from(areaCv)
    .save()
    .finally(() => {
      document.body.classList.remove('is-exporting')
    })
}

if (resumeButton && areaCv) {
  resumeButton.addEventListener('click', generateResume)
}
