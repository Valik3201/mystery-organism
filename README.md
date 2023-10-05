# Challenge Project: Mysterious Organism

This project is part of the **[Codecademy](https://github.com/Codecademy)** Full Stack Developer Course. It involves simulating the study of a mysterious organism, Pila aequor (P. aequor), found at the bottom of the ocean near hydrothermal vents.

## Project Overview

### Context
You are part of a research team that has discovered a new organism with unique DNA properties. The organism, P. aequor, is found near hydrothermal vents in the deep sea. The small DNA samples and frequent mutations due to the hydrothermal vents make P. aequor an intriguing specimen for study.

### Project Goals
- Create objects that simulate the DNA of P. aequor for research purposes.
- Implement a factory function to generate instances of P. aequor with distinct DNA sequences.
- Simulate the organism's high rate of mutation.
- Develop methods to compare DNA sequences between different organisms.
- Assess the likelihood of survival based on the DNA composition.

## Getting Started

To run the project, make sure you have [Node.js](https://nodejs.org/) installed. Clone the repository and run the necessary scripts.

```bash
# Clone the repository
git clone https://github.com/your-username/mysterious-organism.git

# Navigate to the project directory
cd mysterious-organism

# Install dependencies
npm install

# Run the project
npm start
```

## Usage

The `pAequorFactory` function creates instances of P. aequor. It provides methods to mutate DNA, compare DNA with other instances, and assess the likelihood of survival.

```javascript
// Example Usage
const { pAequorFactory, mockUpStrand } = require('./helperFunctions');

const organism = pAequorFactory(1, mockUpStrand());
console.log("Original DNA:", organism.dna);

// Perform mutations
organism.mutate();
organism.mutate();

// Compare DNA with another instance
const otherOrganism = pAequorFactory(2, mockUpStrand());
organism.compareDNA(otherOrganism);

// Assess likelihood of survival
console.log("Survival Probability:", organism.willLikelySurvive());
```

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.
