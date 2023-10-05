// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, arrayDna) => {
  return {
    specimenNum: number,
    dna: arrayDna,
    mutate() {
      console.log("Original DNA:", this.dna);

      const randomIndex = Math.floor(Math.random() * this.dna.length);
      console.log("Selected Base:", this.dna[randomIndex]);

      let newBase = returnRandBase();
      while (newBase === this.dna[randomIndex]) {
        newBase = returnRandBase();
      }

      this.dna[randomIndex] = newBase;

      console.log("Mutated DNA:", this.dna);
      return this.dna;
    },

    compareDNA(otherOrganism) {
      const commonBases = this.dna.filter(
        (base, i) => base === otherOrganism.dna[i]
      ).length;

      const percentage = ((commonBases / this.dna.length) * 100).toFixed(2);
      console.log(
        `specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${percentage}% DNA in common.`
      );
    },

    willLikelySurvive() {
      const baseCandG = this.dna.reduce((count, base) => {
        if (base === "C" || base === "G") {
          return count + 1;
        }
        return count;
      }, 0);

      const percentageSurvive = ((baseCandG / this.dna.length) * 100).toFixed(
        2
      );

      return percentageSurvive >= 60 ? true : false;
    },

    complementStrand() {
      console.log("Original DNA:", this.dna);

      const complementDna = this.dna.map((base) => {
        switch (base) {
          case "A":
            return "T";
          case "T":
            return "A";
          case "C":
            return "G";
          case "G":
            return "C";
          default:
            return base;
        }
      });

      console.log("Complement DNA:", complementDna);
      return complementDna;
    },
  };
};

// Test mutation
console.log("Mutations:");
const organism = pAequorFactory(1, mockUpStrand());
organism.mutate();

//Test compare DNA
console.log("\nCompatibility:");
const organism1 = pAequorFactory(1, mockUpStrand());
const organism2 = pAequorFactory(2, mockUpStrand());

console.log(`specimen #${organism1.specimenNum}, DNA ${organism1.dna}`);
console.log(`specimen #${organism2.specimenNum}, DNA ${organism2.dna}`);

organism1.compareDNA(organism2);

//Test survive
console.log("\nSurvival:");
const organism3 = pAequorFactory(2, mockUpStrand());

const { percentageSurvive, survivalResult } = organism.willLikelySurvive();
console.log(
  `Specimen with DNA ${organism.dna} have ${
    survivalResult ? "high" : "low"
  } chance of survival.`
);

//Creating n instances of pAequor that can survive in their natural environment
function createPAequorInstances(n) {
  console.log(
    `\n${n} instances of pAequor that can survive in their natural environment:`
  );
  const pAequorInstances = [];

  let i = 1;
  while (pAequorInstances.length < n) {
    const instance = pAequorFactory(i, mockUpStrand());
    if (instance.willLikelySurvive()) {
      pAequorInstances.push(instance);
    }
    i++;
  }

  pAequorInstances.forEach((instance, i) => {
    console.log(
      `${i + 1} Specimen #${instance.specimenNum} DNA - ${instance.dna}`
    );
  });
}

createPAequorInstances(30);

//Complementary DNA strand
console.log("\nComplementary DNA strand:");
const organism4 = pAequorFactory(1, ["A", "T", "C", "G", "A"]);
const complementedDNA = organism4.complementStrand();
