export const translate = sRNA => {
  if (typeof sRNA != "string") {
    return [];
  }
  if (sRNA.length % 3 != 0) {
    return "Invalid Codon";
  }
  const mapper = [
    { AUG: "Methionine" },
    { UUU: "Phenylalanine" },
    { UUC: "Phenylalanine" },
    { UUA: "Leucine" },
    { UUG: "Leucine" },
    { UCU: "Serine" },
    { UCC: "Serine" },
    { UCA: "Serine" },
    { UCG: "Serine" },
    { UAU: "Tyrosine" },
    { UAC: "Tyrosine" },
    { UGU: "Cysteine" },
    { UGC: "Cysteine" },
    { UGG: "Tryptophan" },
    { UAA: "STOP" },
    { UAG: "STOP" },
    { UGA: "STOP" }
  ];

  let i = 0;
  let aProteins = [];

  while (i < sRNA.length) {
    let sCodon = sRNA.substr(i, 3);
    let sProtein = "";
    sProtein = mapper.find(el => sCodon == Object.keys(el)[0]);
    if (!sProtein) {
      throw new Error("Invalid codon");
    } else if (sProtein[sCodon] === "STOP") {
      return aProteins;
    } else {
      aProteins.push(sProtein[sCodon]);
      i = i + 3;
    }
  }
  return aProteins;
};
