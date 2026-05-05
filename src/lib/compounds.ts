export type RiskLevel = "Low" | "Moderate" | "High" | "Unknown";
export type Popularity = "Low" | "Medium" | "High";

export type ResearchFinding = {
  title: string;
  summary: string;
  population: string;
};

export type Myth = {
  claim: string;
  reality: string;
};

export type Related = {
  slug: string;
  name: string;
  reason: string;
};

export type Compound = {
  slug: string;
  name: string;
  category: string;
  oneLiner: string;
  evidenceScore: 1 | 2 | 3 | 4 | 5;
  evidenceJustification: string;
  riskLevel: RiskLevel;
  riskJustification: string;
  popularity: Popularity;
  whatItIs: string[];
  mechanismEasy: string;
  mechanismAdvanced: string;
  uses: string[];
  research: ResearchFinding[];
  timeline: {
    weeks1to2: string;
    weeks2to6: string;
    longTerm: string;
  };
  sideEffects: {
    title: string;
    body: string;
  }[];
  monitoring: {
    title: string;
    body: string;
  }[];
  videoEmbedUrl?: string;
  myths: Myth[];
  related: Related[];
};

export const compounds: Record<string, Compound> = {
  "bpc-157": {
    slug: "bpc-157",
    name: "BPC-157",
    category: "Repair peptide",
    oneLiner:
      "A synthetic peptide popular for soft-tissue and gut healing — heavy on rodent data, light on human trials.",
    evidenceScore: 2,
    evidenceJustification:
      "Strong, repeatable signal in rodent models for tendon, ligament, muscle, and gut healing. Almost no peer-reviewed human RCTs. The case for using it rests on animal studies and self-reported anecdote, not controlled human evidence.",
    riskLevel: "Moderate",
    riskJustification:
      "Short-term toxicity in rodents is low and side-effect reports in humans are mostly mild. But long-term human safety, sourcing purity, and any cancer-relevant effects on growth pathways are not established.",
    popularity: "High",
    whatItIs: [
      "BPC-157 (Body Protection Compound 157) is a synthetic 15-amino-acid peptide derived from a sequence found in human gastric juice. It was first studied in the early 1990s as a candidate for treating ulcers and inflammatory bowel disease.",
      "In the optimisation world it’s used off-label by people trying to speed up recovery from tendon, ligament, joint, and gut injuries. It is not approved by the FDA, MHRA, or TGA for any human use, and is not a regulated pharmaceutical.",
      "Most product on the market is sold for ‘research purposes only’. Purity, dosing accuracy, and contamination risk vary widely between sources.",
    ],
    mechanismEasy:
      "BPC-157 appears to help the body build new tiny blood vessels into damaged tissue, recruit repair cells, and dial down inflammation in the area. The result, in animals, is faster and cleaner healing of muscle, tendon, ligament, gut, and bone.",
    mechanismAdvanced:
      "Across rodent models, BPC-157 has been shown to upregulate VEGFR2 expression and promote angiogenesis, modulate the nitric oxide system, increase early growth response factor 1 (EGR-1) activity, and influence dopaminergic, serotonergic, and GABAergic systems. It also appears to upregulate growth-hormone receptor expression in fibroblasts, which is one proposed mechanism for the tendon-healing effects observed in animals. Human pharmacokinetics and tissue-level activity are not well characterised.",
    uses: [
      "Soft-tissue injuries — tendinopathy, ligament strains, muscle tears",
      "Joint pain attributed to tendon or ligament involvement",
      "Gut inflammation, leaky-gut symptoms, NSAID-related stomach irritation",
      "Post-surgical recovery support (anecdotal)",
      "Stacked with TB-500 in the so-called ‘Wolverine’ protocol for stubborn injuries",
    ],
    research: [
      {
        title: "Accelerated Achilles tendon healing",
        summary:
          "Rats with surgically transected Achilles tendons healed faster and with better functional outcomes when given BPC-157, compared to saline controls.",
        population: "Rodent model — Sikiric et al.",
      },
      {
        title: "Medial collateral ligament repair",
        summary:
          "BPC-157 improved biomechanical and histological recovery of MCL injuries in rats, with effects observed in both systemic and local administration.",
        population: "Rodent model",
      },
      {
        title: "Protection of GI mucosa",
        summary:
          "Across multiple rodent studies, BPC-157 protected against NSAID-induced and alcohol-induced stomach lesions and improved markers of intestinal inflammation.",
        population: "Rodent model",
      },
      {
        title: "Endothelial and angiogenic effects",
        summary:
          "Cell and animal work shows upregulation of VEGFR2, suggesting a plausible mechanism for the angiogenesis-driven healing observed at injury sites.",
        population: "In vitro + rodent",
      },
      {
        title: "Human evidence is sparse",
        summary:
          "As of writing, there are no large, peer-reviewed, placebo-controlled human RCTs for BPC-157. The compound is not approved as a medicine in any major regulator.",
        population: "Humans — gap",
      },
    ],
    timeline: {
      weeks1to2:
        "Most users report little to no noticeable change in the first 1–2 weeks. Some describe a subtle reduction in baseline gut irritation or a small drop in injury-site pain.",
      weeks2to6:
        "This is where most anecdotal reports cluster. People describe meaningful reductions in tendon, joint, or gut pain, and the ability to tolerate loading or food categories that previously triggered symptoms. There is no controlled human data confirming this timeline.",
      longTerm:
        "Long-term human outcomes are unknown. Most self-reported protocols cycle on for 4–8 weeks and then off. Repeated indefinite use has not been studied.",
    },
    sideEffects: [
      {
        title: "Injection-site reactions",
        body: "Redness, mild bruising, or transient irritation at the injection site is the most commonly reported issue.",
      },
      {
        title: "Mild GI changes",
        body: "Nausea, loose stools, or appetite changes are reported anecdotally — usually mild and self-limiting.",
      },
      {
        title: "Headaches and lightheadedness",
        body: "Reported by a minority of users, sometimes attributed to vasomotor effects from the angiogenic activity.",
      },
      {
        title: "Unknown long-term effects",
        body: "Effects on cancer risk, hormonal axes, and chronic immune signalling have not been characterised in humans. This is the most important unknown.",
      },
      {
        title: "Sourcing and contamination",
        body: "Unregulated supply chain means heavy-metal contamination, bacterial endotoxins, or under/over-dosed product are realistic risks.",
      },
    ],
    monitoring: [
      {
        title: "Baseline panel",
        body: "Before starting, a CBC, comprehensive metabolic panel, and lipid panel give you something to compare against later.",
      },
      {
        title: "Inflammation markers",
        body: "hs-CRP and ESR can be useful baseline markers, especially if you’re using BPC-157 for an inflammatory or gut-related complaint.",
      },
      {
        title: "Liver and kidney function",
        body: "ALT, AST, creatinine and eGFR are sensible to recheck after a cycle, even though no specific hepatic or renal toxicity has been characterised in humans.",
      },
      {
        title: "Symptom tracking",
        body: "Track the actual outcome you started for — pain on a 0–10 scale, loaded range of motion, gut symptom frequency. Without numbers it’s easy to confuse hope for healing.",
      },
    ],
    videoEmbedUrl: undefined,
    myths: [
      {
        claim: "BPC-157 is FDA-approved.",
        reality:
          "It is not approved by the FDA for any indication. It is sold under a ‘research only’ label and explicitly flagged by the FDA as an unapproved substance.",
      },
      {
        claim: "It heals every tendon injury.",
        reality:
          "Healing is well-replicated in rodents. Human evidence is anecdotal. It’s reasonable to be optimistic; it’s not reasonable to treat it as proven.",
      },
      {
        claim: "Oral BPC-157 works the same as injectable.",
        reality:
          "Oral bioavailability of peptides is poor. Some users report local gut benefits from oral capsules, but systemic effects on tendons or joints are unlikely to be equivalent.",
      },
      {
        claim: "Because it’s a peptide, it’s safer than a drug.",
        reality:
          "Peptide is a chemistry term, not a safety category. Long-term human safety data simply doesn’t exist yet.",
      },
    ],
    related: [
      {
        slug: "tb-500",
        name: "TB-500",
        reason:
          "Often stacked with BPC-157 for soft-tissue recovery (the ‘Wolverine’ stack).",
      },
      {
        slug: "ipamorelin",
        name: "Ipamorelin",
        reason:
          "A growth-hormone secretagogue sometimes used alongside BPC-157 for recovery.",
      },
    ],
  },
};

export function getCompound(slug: string): Compound | undefined {
  return compounds[slug];
}

export function listCompoundSlugs(): string[] {
  return Object.keys(compounds);
}
