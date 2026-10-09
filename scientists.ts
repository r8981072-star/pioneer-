export type Work = {
  title: string
  year: string
  description: string
}

export type Scientist = {
  slug: string
  name: string
  lifespan: string
  origin: string
  field: 'Physics' | 'Chemistry' | 'Mathematics' | 'Astrophysics' | 'Engineering' | 'Optics'
  image: string
  headline: string
  about: string
  works: Work[]
}

export const scientists: Scientist[] = [
  {
    slug: 'isaac-newton',
    name: 'Isaac Newton',
    lifespan: '1643 – 1727',
    origin: 'England',
    field: 'Physics',
    image: '/scientists/isaac-newton.jpg',
    headline: 'Laws of motion and universal gravitation',
    about:
      'Newton unified the motion of objects on Earth and in the heavens under a single set of laws. His work on mechanics, optics, and mathematics laid the foundation of classical physics for over two centuries.',
    works: [
      { title: 'Philosophiæ Naturalis Principia Mathematica', year: '1687', description: 'Introduced the three laws of motion and the law of universal gravitation.' },
      { title: 'Opticks', year: '1704', description: 'Showed that white light is made of a spectrum of colours, using prisms and careful experiment.' },
      { title: 'Method of Fluxions (calculus)', year: '1660s', description: 'Developed calculus, independently of Leibniz, as a tool to describe change and motion.' },
    ],
  },
  {
    slug: 'albert-einstein',
    name: 'Albert Einstein',
    lifespan: '1879 – 1955',
    origin: 'Germany',
    field: 'Physics',
    image: '/scientists/albert-einstein.jpg',
    headline: 'Relativity and the quantum of light',
    about:
      'Einstein transformed our understanding of space, time, and gravity. He received the 1921 Nobel Prize in Physics for explaining the photoelectric effect, a key step toward quantum theory.',
    works: [
      { title: 'Annus Mirabilis papers', year: '1905', description: 'Four papers on the photoelectric effect, Brownian motion, special relativity, and mass–energy equivalence (E = mc²).' },
      { title: 'General Theory of Relativity', year: '1915', description: 'Described gravity as the curvature of spacetime caused by mass and energy.' },
      { title: 'Bose–Einstein statistics', year: '1924', description: 'Extended S. N. Bose’s work, predicting a new state of matter now called a Bose–Einstein condensate.' },
    ],
  },
  {
    slug: 'marie-curie',
    name: 'Marie Curie',
    lifespan: '1867 – 1934',
    origin: 'Poland / France',
    field: 'Chemistry',
    image: '/scientists/marie-curie.jpg',
    headline: 'Pioneer of radioactivity',
    about:
      'Curie was the first person to win Nobel Prizes in two different sciences — Physics (1903) and Chemistry (1911). Her research on radioactivity opened new paths in medicine and atomic physics.',
    works: [
      { title: 'Discovery of polonium and radium', year: '1898', description: 'With Pierre Curie, isolated two new radioactive elements from pitchblende ore.' },
      { title: 'Research on Radioactive Substances', year: '1903', description: 'Her doctoral thesis, a landmark study of radioactivity.' },
      { title: 'Treatise on Radioactivity', year: '1910', description: 'A comprehensive textbook summarising the young science of radioactivity.' },
    ],
  },
  {
    slug: 'galileo-galilei',
    name: 'Galileo Galilei',
    lifespan: '1564 – 1642',
    origin: 'Italy',
    field: 'Astrophysics',
    image: '/scientists/galileo-galilei.jpg',
    headline: 'Father of observational astronomy',
    about:
      'Galileo championed experiment and observation as the path to knowledge. His telescope discoveries supported the idea that Earth orbits the Sun.',
    works: [
      { title: 'Sidereus Nuncius (Starry Messenger)', year: '1610', description: 'Reported the moons of Jupiter, the rugged surface of the Moon, and countless new stars.' },
      { title: 'Dialogue Concerning the Two Chief World Systems', year: '1632', description: 'Compared the Copernican and Ptolemaic models of the universe.' },
      { title: 'Two New Sciences', year: '1638', description: 'Founded the modern study of motion and the strength of materials.' },
    ],
  },
  {
    slug: 'niels-bohr',
    name: 'Niels Bohr',
    lifespan: '1885 – 1962',
    origin: 'Denmark',
    field: 'Physics',
    image: '/scientists/niels-bohr.jpg',
    headline: 'Architect of the quantum atom',
    about:
      'Bohr proposed that electrons occupy fixed energy levels in atoms, explaining atomic spectra. He won the 1922 Nobel Prize in Physics and shaped the interpretation of quantum mechanics.',
    works: [
      { title: 'On the Constitution of Atoms and Molecules', year: '1913', description: 'Introduced the Bohr model of the hydrogen atom.' },
      { title: 'Principle of Complementarity', year: '1927', description: 'Argued that wave and particle descriptions are complementary views of nature.' },
      { title: 'Liquid-drop model of fission', year: '1939', description: 'With John Wheeler, explained the mechanism of nuclear fission.' },
    ],
  },
  {
    slug: 'max-planck',
    name: 'Max Planck',
    lifespan: '1858 – 1947',
    origin: 'Germany',
    field: 'Physics',
    image: '/scientists/max-planck.gif',
    headline: 'Originator of quantum theory',
    about:
      'Planck proposed that energy is emitted in discrete packets, or quanta, to explain black-body radiation. This idea launched quantum physics and earned him the 1918 Nobel Prize.',
    works: [
      { title: 'Planck’s law of black-body radiation', year: '1900', description: 'Correctly described the spectrum of light emitted by a hot body.' },
      { title: 'Quantum hypothesis (E = hν)', year: '1900', description: 'Introduced Planck’s constant, linking energy and frequency.' },
      { title: 'Treatise on Thermodynamics', year: '1897', description: 'An influential textbook on the laws of heat and energy.' },
    ],
  },
  {
    slug: 'richard-feynman',
    name: 'Richard Feynman',
    lifespan: '1918 – 1988',
    origin: 'United States',
    field: 'Physics',
    image: '/scientists/richard-feynman.jpg',
    headline: 'Quantum electrodynamics and the art of teaching',
    about:
      'Feynman helped develop quantum electrodynamics, sharing the 1965 Nobel Prize. He is also celebrated as one of the most gifted teachers of physics.',
    works: [
      { title: 'Feynman diagrams', year: '1948', description: 'A visual language for calculating how particles interact.' },
      { title: 'The Feynman Lectures on Physics', year: '1963 – 1965', description: 'A legendary introductory physics course, now freely available online.' },
      { title: 'QED: The Strange Theory of Light and Matter', year: '1985', description: 'A popular explanation of quantum electrodynamics for general readers.' },
    ],
  },
  {
    slug: 'james-clerk-maxwell',
    name: 'James Clerk Maxwell',
    lifespan: '1831 – 1879',
    origin: 'Scotland',
    field: 'Physics',
    image: '/scientists/james-clerk-maxwell.jpg',
    headline: 'Unifier of electricity, magnetism, and light',
    about:
      'Maxwell showed that electricity, magnetism, and light are manifestations of the same phenomenon. His equations are among the most important in all of physics.',
    works: [
      { title: 'A Dynamical Theory of the Electromagnetic Field', year: '1865', description: 'Proposed that light is an electromagnetic wave.' },
      { title: 'A Treatise on Electricity and Magnetism', year: '1873', description: 'The definitive presentation of his electromagnetic theory.' },
      { title: 'Maxwell–Boltzmann distribution', year: '1860', description: 'Described the statistical spread of speeds of gas molecules.' },
    ],
  },
  {
    slug: 'michael-faraday',
    name: 'Michael Faraday',
    lifespan: '1791 – 1867',
    origin: 'England',
    field: 'Chemistry',
    image: '/scientists/michael-faraday.jpg',
    headline: 'Self-taught master of experiment',
    about:
      'Born into poverty with little formal schooling, Faraday became one of history’s greatest experimentalists. His discoveries made electric motors and generators possible.',
    works: [
      { title: 'Electromagnetic induction', year: '1831', description: 'Discovered that a changing magnetic field produces an electric current.' },
      { title: 'Laws of electrolysis', year: '1834', description: 'Quantified how electricity drives chemical reactions.' },
      { title: 'The Chemical History of a Candle', year: '1861', description: 'Famous public lectures that made science accessible to young audiences.' },
    ],
  },
  {
    slug: 'werner-heisenberg',
    name: 'Werner Heisenberg',
    lifespan: '1901 – 1976',
    origin: 'Germany',
    field: 'Physics',
    image: '/scientists/werner-heisenberg.jpg',
    headline: 'The uncertainty principle',
    about:
      'Heisenberg created matrix mechanics, the first complete formulation of quantum mechanics, and received the 1932 Nobel Prize in Physics.',
    works: [
      { title: 'Matrix mechanics', year: '1925', description: 'A mathematical framework for quantum theory based on observable quantities.' },
      { title: 'Uncertainty principle', year: '1927', description: 'Showed that position and momentum cannot both be known with perfect precision.' },
      { title: 'The Physical Principles of the Quantum Theory', year: '1930', description: 'Lectures explaining the foundations of the new quantum mechanics.' },
    ],
  },
  {
    slug: 'erwin-schrodinger',
    name: 'Erwin Schrödinger',
    lifespan: '1887 – 1961',
    origin: 'Austria',
    field: 'Physics',
    image: '/scientists/erwin-schrodinger.jpg',
    headline: 'Wave mechanics',
    about:
      'Schrödinger formulated the wave equation that describes how quantum systems evolve. He shared the 1933 Nobel Prize in Physics with Paul Dirac.',
    works: [
      { title: 'Schrödinger equation', year: '1926', description: 'The central equation of wave mechanics in quantum theory.' },
      { title: 'Schrödinger’s cat thought experiment', year: '1935', description: 'Illustrated puzzles in applying quantum theory to everyday objects.' },
      { title: 'What Is Life?', year: '1944', description: 'Inspired a generation of scientists to study the physical basis of heredity.' },
    ],
  },
  {
    slug: 'paul-dirac',
    name: 'Paul Dirac',
    lifespan: '1902 – 1984',
    origin: 'England',
    field: 'Physics',
    image: '/scientists/paul-dirac.jpg',
    headline: 'Predicted antimatter',
    about:
      'Dirac combined quantum mechanics with special relativity, leading to the prediction of antimatter. He shared the 1933 Nobel Prize in Physics.',
    works: [
      { title: 'Dirac equation', year: '1928', description: 'A relativistic equation for the electron that naturally includes spin.' },
      { title: 'The Principles of Quantum Mechanics', year: '1930', description: 'A classic, elegant textbook still studied today.' },
      { title: 'Prediction of the positron', year: '1931', description: 'Proposed the anti-electron, discovered experimentally in 1932.' },
    ],
  },
  {
    slug: 'c-v-raman',
    name: 'C. V. Raman',
    lifespan: '1888 – 1970',
    origin: 'India',
    field: 'Optics',
    image: '/scientists/c-v-raman.jpg',
    headline: 'The Raman effect',
    about:
      'Raman discovered that light changes wavelength when scattered by molecules. He won the 1930 Nobel Prize in Physics — the first Asian to win a Nobel Prize in science.',
    works: [
      { title: 'A New Radiation (Raman effect)', year: '1928', description: 'Reported inelastic scattering of light, now the basis of Raman spectroscopy.' },
      { title: 'Indian Journal of Physics', year: '1926', description: 'Founded a journal to publish research from Indian scientists.' },
      { title: 'Raman Research Institute', year: '1948', description: 'Established an institute in Bangalore dedicated to fundamental research.' },
    ],
  },
  {
    slug: 'satyendra-nath-bose',
    name: 'Satyendra Nath Bose',
    lifespan: '1894 – 1974',
    origin: 'India',
    field: 'Physics',
    image: '/scientists/satyendra-nath-bose.jpg',
    headline: 'Bose statistics and the boson',
    about:
      'Bose derived Planck’s radiation law using a new way of counting particles. Einstein translated and championed his paper, and the class of particles called bosons is named in his honour.',
    works: [
      { title: 'Planck’s Law and the Light Quantum Hypothesis', year: '1924', description: 'Introduced the statistics that govern photons and other bosons.' },
      { title: 'Bose–Einstein condensate (with Einstein)', year: '1924 – 1925', description: 'Predicted a state of matter first created in a laboratory in 1995.' },
      { title: 'Science in the mother tongue', year: '1948', description: 'Founded the Bangiya Bigyan Parishad to teach science in Bengali.' },
    ],
  },
  {
    slug: 'subrahmanyan-chandrasekhar',
    name: 'S. Chandrasekhar',
    lifespan: '1910 – 1995',
    origin: 'India / United States',
    field: 'Astrophysics',
    image: '/scientists/subrahmanyan-chandrasekhar.jpg',
    headline: 'The life and death of stars',
    about:
      'Chandrasekhar calculated the maximum mass a white dwarf star can have before collapsing. He shared the 1983 Nobel Prize in Physics for his work on stellar structure and evolution.',
    works: [
      { title: 'The Chandrasekhar limit', year: '1931', description: 'Showed white dwarfs above about 1.4 solar masses cannot support themselves.' },
      { title: 'An Introduction to the Study of Stellar Structure', year: '1939', description: 'A foundational text in theoretical astrophysics.' },
      { title: 'The Mathematical Theory of Black Holes', year: '1983', description: 'A rigorous treatment of black holes in general relativity.' },
    ],
  },
  {
    slug: 'emmy-noether',
    name: 'Emmy Noether',
    lifespan: '1882 – 1935',
    origin: 'Germany',
    field: 'Mathematics',
    image: '/scientists/emmy-noether.jpg',
    headline: 'Symmetry and conservation',
    about:
      'Noether proved that every symmetry in nature corresponds to a conservation law — a cornerstone of modern physics. She also helped found modern abstract algebra.',
    works: [
      { title: 'Noether’s theorem', year: '1918', description: 'Linked symmetries to conservation of energy, momentum, and more.' },
      { title: 'Ideal Theory in Rings', year: '1921', description: 'A landmark paper in abstract algebra introducing Noetherian rings.' },
      { title: 'The “Noether boys”', year: '1920s', description: 'Mentored a generation of influential mathematicians in Göttingen.' },
    ],
  },
  {
    slug: 'lise-meitner',
    name: 'Lise Meitner',
    lifespan: '1878 – 1968',
    origin: 'Austria / Sweden',
    field: 'Physics',
    image: '/scientists/lise-meitner.jpg',
    headline: 'Explained nuclear fission',
    about:
      'Meitner, with her nephew Otto Frisch, gave the first theoretical explanation of nuclear fission. Element 109, meitnerium, is named in her honour.',
    works: [
      { title: 'Discovery of protactinium-231', year: '1918', description: 'Identified a long-lived isotope of protactinium with Otto Hahn.' },
      { title: 'Explanation of nuclear fission', year: '1939', description: 'Showed uranium nuclei can split, releasing enormous energy.' },
      { title: 'Studies of beta and gamma radiation', year: '1920s', description: 'Pioneering experimental work on radioactive decay.' },
    ],
  },
  {
    slug: 'nikola-tesla',
    name: 'Nikola Tesla',
    lifespan: '1856 – 1943',
    origin: 'Serbia / United States',
    field: 'Engineering',
    image: '/scientists/nikola-tesla.jpg',
    headline: 'Alternating current power',
    about:
      'Tesla’s inventions in alternating-current electricity power much of the modern world. He was a visionary of wireless technology.',
    works: [
      { title: 'AC induction motor', year: '1888', description: 'A practical motor driven by a rotating magnetic field.' },
      { title: 'Polyphase AC system', year: '1888', description: 'Made long-distance electricity transmission efficient.' },
      { title: 'Tesla coil', year: '1891', description: 'A resonant transformer producing high-voltage, high-frequency current.' },
    ],
  },
  {
    slug: 'homi-j-bhabha',
    name: 'Homi J. Bhabha',
    lifespan: '1909 – 1966',
    origin: 'India',
    field: 'Physics',
    image: '/scientists/homi-j-bhabha.jpg',
    headline: 'Cosmic rays and nuclear science in India',
    about:
      'Bhabha made important contributions to particle physics and built India’s institutions for fundamental research and nuclear science.',
    works: [
      { title: 'Bhabha scattering', year: '1935', description: 'Calculated how electrons and positrons scatter off each other.' },
      { title: 'Cascade theory of cosmic-ray showers', year: '1937', description: 'With Walter Heitler, explained showers of particles from cosmic rays.' },
      { title: 'Tata Institute of Fundamental Research', year: '1945', description: 'Founded a leading centre for research in physics and mathematics.' },
    ],
  },
  {
    slug: 'ibn-al-haytham',
    name: 'Ibn al-Haytham',
    lifespan: 'c. 965 – c. 1040',
    origin: 'Basra (present-day Iraq)',
    field: 'Optics',
    image: '/scientists/ibn-al-haytham.jpg',
    headline: 'Father of modern optics',
    about:
      'Ibn al-Haytham insisted that theories be tested through controlled experiments — an early form of the scientific method. He correctly explained that vision occurs when light enters the eye.',
    works: [
      { title: 'Book of Optics (Kitāb al-Manāẓir)', year: 'c. 1011 – 1021', description: 'A seven-volume treatise on light, vision, and reflection.' },
      { title: 'Studies of the camera obscura', year: 'c. 1020', description: 'Explained how light passing through a small hole forms an image.' },
      { title: 'Doubts Concerning Ptolemy', year: 'c. 1028', description: 'A critical review of Ptolemy’s astronomy — a model of scientific scepticism.' },
    ],
  },
]
