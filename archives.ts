export type ArchiveItem = {
  id: string
  title: string
  author: string
  year: string
  subject: string
  /** Image of the document's first page, e.g. "/archives/relativity-cover.jpg". Leave null to show a skeleton. */
  coverImage: string | null
  /** Link to the PDF, e.g. "/archives/relativity.pdf" or an external URL. Leave null until uploaded. */
  pdfUrl: string | null
}

export const archives: ArchiveItem[] = [
  { id: 'a01', title: 'On the Electrodynamics of Moving Bodies', author: 'Albert Einstein', year: '1905', subject: 'Physics', coverImage: null, pdfUrl: null },
  { id: 'a02', title: 'Mathematical Principles of Natural Philosophy', author: 'Isaac Newton', year: '1687', subject: 'Physics', coverImage: null, pdfUrl: null },
  { id: 'a03', title: 'A Dynamical Theory of the Electromagnetic Field', author: 'James Clerk Maxwell', year: '1865', subject: 'Physics', coverImage: null, pdfUrl: null },
  { id: 'a04', title: 'On the Constitution of Atoms and Molecules', author: 'Niels Bohr', year: '1913', subject: 'Physics', coverImage: null, pdfUrl: null },
  { id: 'a05', title: "Planck's Law and the Light Quantum Hypothesis", author: 'Satyendra Nath Bose', year: '1924', subject: 'Physics', coverImage: null, pdfUrl: null },
  { id: 'a06', title: 'A New Radiation', author: 'C. V. Raman', year: '1928', subject: 'Physics', coverImage: null, pdfUrl: null },
  { id: 'a07', title: 'The Maximum Mass of Ideal White Dwarfs', author: 'S. Chandrasekhar', year: '1931', subject: 'Astrophysics', coverImage: null, pdfUrl: null },
  { id: 'a08', title: 'Invariant Variation Problems', author: 'Emmy Noether', year: '1918', subject: 'Mathematics', coverImage: null, pdfUrl: null },
  { id: 'a09', title: 'Research on Radioactive Substances', author: 'Marie Curie', year: '1903', subject: 'Chemistry', coverImage: null, pdfUrl: null },
  { id: 'a10', title: 'The Chemical History of a Candle', author: 'Michael Faraday', year: '1861', subject: 'Chemistry', coverImage: null, pdfUrl: null },
  { id: 'a11', title: 'Writing a Research Essay: A Primer', author: 'Pioneer Editorial', year: '2026', subject: 'Writing', coverImage: null, pdfUrl: null },
  { id: 'a12', title: 'Foundations of the Scientific Method', author: 'Pioneer Editorial', year: '2026', subject: 'Methods', coverImage: null, pdfUrl: null },
]
