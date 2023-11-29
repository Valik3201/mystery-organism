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

## Usage

The `pAequorFactory` function creates instances of P. aequor. It provides methods to mutate DNA, compare DNA with other instances, and assess the likelihood of survival.

```javascript
// Example Usage

// Test mutation
console.log("Mutations:");
const organism = pAequorFactory(1, mockUpStrand());
organism.mutate();

// Test compare DNA
console.log("\nCompatibility:");
const organism1 = pAequorFactory(1, mockUpStrand());
const organism2 = pAequorFactory(2, mockUpStrand());

console.log(`Specimen #${organism1.specimenNum}, DNA: ${organism1.dna.join(',')}`);
console.log(`Specimen #${organism2.specimenNum}, DNA: ${organism2.dna.join(',')}`);

organism1.compareDNA(organism2);

// Test survival
console.log("\nSurvival:");
const organism3 = pAequorFactory(2, mockUpStrand());

const { percentageSurvive, survivalResult } = organism.willLikelySurvive();
console.log(
  `Specimen with DNA ${organism.dna.join(',')} has a ${
    survivalResult ? "high" : "low"
  } chance of survival.`
);

// Creating n instances of pAequor that can survive in their natural environment
createPAequorInstances(30);

// Complementary DNA strand
console.log("\nComplementary DNA strand:");
const organism4 = pAequorFactory(1, ["A", "T", "C", "G", "A"]);
const complementedDNA = organism4.complementStrand();
```

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.
