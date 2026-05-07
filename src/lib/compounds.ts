import insulinJson from "../../content/compounds/insulin/compound.json";
import insulinSourcesJson from "../../content/compounds/insulin/sources.json";

export type RiskLevel = "Low" | "Moderate" | "High" | "Unknown";
export type Popularity = "Low" | "Medium" | "High";
export type Severity = "mild" | "moderate" | "severe";
export type EvidenceType = "controlled" | "anecdotal" | "mixed";
export type EvidenceScore = 1 | 2 | 3 | 4 | 5;

export type Source = {
  id: string;
  type: string;
  title: string;
  url: string;
  pmid?: string | null;
  doi?: string | null;
  year: number;
  studyType: string;
  addedReason: string;
};

export type TopStudy = {
  id: string;
  title: string;
  summary: string;
  citation: string;
  sourceId?: string;
  additionalSourceIds?: string[];
  keyFinding: string;
  limitations: string;
};

export type SideEffectDetail = {
  title: string;
  body: string;
  severity: Severity;
  sourceIds?: string[];
};

export type BloodworkEntry = {
  title: string;
  body: string;
  markers: string[];
  sourceIds?: string[];
};

export type MythEntry = {
  claim: string;
  reality: string;
  sourceIds?: string[];
};

export type TimelinePhase = {
  label: string;
  description: string;
  evidenceType: EvidenceType;
};

export type RelatedCompound = {
  slug: string;
  name: string;
  reason: string;
};

export type CompoundCallout = {
  slug: string;
  name: string;
  teaser: string;
  ctaText: string;
};

export type FreePreviewBlock = {
  contextSection: { heading: string; body: string };
  compoundCallouts: CompoundCallout[];
  platformValueSection: { heading: string; body: string };
  socialProofPlaceholders: { type: string; content: string }[];
};

export type Compound = {
  slug: string;
  name: string;
  category: string;
  oneLiner: string;
  isFreePreviewPage?: boolean;
  scores: {
    evidenceStrength: { score: EvidenceScore; justification: string };
    riskLevel: { level: RiskLevel; justification: string };
    popularity: { level: Popularity; justification: string };
  };
  beginner: {
    whatIsIt: string[];
    howItWorks: string;
    whatPeopleUseItFor: string[];
    sideEffects: string;
  };
  deepDive: {
    mechanismOfAction: string;
    evidenceLandscape: string;
  };
  topStudies: TopStudy[];
  dosageAndProtocols: {
    context: string;
    commonProtocols: string[];
    disclaimer: string;
  };
  timelineExpectations: {
    phase1: TimelinePhase;
    phase2: TimelinePhase;
    longTerm: TimelinePhase;
  };
  sideEffectsDeepDive: SideEffectDetail[];
  bloodworkMonitoring: BloodworkEntry[];
  mythsVsReality: MythEntry[];
  relatedCompounds: RelatedCompound[];
  sources: Source[];
  videoEmbedUrl?: string;
  insulinOnly?: FreePreviewBlock;
};

const insulin: Compound = {
  ...(insulinJson as unknown as Omit<Compound, "sources" | "videoEmbedUrl">),
  sources: insulinSourcesJson as Source[],
  videoEmbedUrl: "/videos/insulin-overview.mp4",
};

const bpc157: Compound = {
  slug: "bpc-157",
  name: "BPC-157",
  category: "Repair peptide",
  oneLiner:
    "A synthetic peptide popular for soft-tissue and gut healing — heavy on rodent data, light on human trials.",
  scores: {
    evidenceStrength: {
      score: 2,
      justification:
        "Strong, repeatable signal in rodent models for tendon, ligament, muscle, and gut healing. Almost no peer-reviewed human RCTs. The case for using it rests on animal studies and self-reported anecdote, not controlled human evidence.",
    },
    riskLevel: {
      level: "Moderate",
      justification:
        "Short-term toxicity in rodents is low and side-effect reports in humans are mostly mild. But long-term human safety, sourcing purity, and any cancer-relevant effects on growth pathways are not established.",
    },
    popularity: {
      level: "High",
      justification:
        "Heavy anecdotal use in the recovery and biohacking communities, despite no regulatory approval and no large human trials.",
    },
  },
  beginner: {
    whatIsIt: [
      "BPC-157 (Body Protection Compound 157) is a synthetic 15-amino-acid peptide derived from a sequence found in human gastric juice. It was first studied in the early 1990s as a candidate for treating ulcers and inflammatory bowel disease.",
      "In the optimisation world it’s used off-label by people trying to speed up recovery from tendon, ligament, joint, and gut injuries. It is not approved by the FDA, MHRA, or TGA for any human use, and is not a regulated pharmaceutical.",
      "Most product on the market is sold for ‘research purposes only’. Purity, dosing accuracy, and contamination risk vary widely between sources.",
    ],
    howItWorks:
      "BPC-157 appears to help the body build new tiny blood vessels into damaged tissue, recruit repair cells, and dial down inflammation in the area. The result, in animals, is faster and cleaner healing of muscle, tendon, ligament, gut, and bone.",
    whatPeopleUseItFor: [
      "Soft-tissue injuries — tendinopathy, ligament strains, muscle tears",
      "Joint pain attributed to tendon or ligament involvement",
      "Gut inflammation, leaky-gut symptoms, NSAID-related stomach irritation",
      "Post-surgical recovery support (anecdotal)",
      "Stacked with TB-500 in the so-called ‘Wolverine’ protocol for stubborn injuries",
    ],
    sideEffects:
      "Most reports describe mild and self-limiting issues — injection-site reactions, transient GI changes, occasional headaches. The bigger unknowns are long-term safety, effects on growth-pathway-driven cancers, and contamination from unregulated supply chains.",
  },
  deepDive: {
    mechanismOfAction:
      "Across rodent models, BPC-157 has been shown to upregulate VEGFR2 expression and promote angiogenesis, modulate the nitric oxide system, increase early growth response factor 1 (EGR-1) activity, and influence dopaminergic, serotonergic, and GABAergic systems. It also appears to upregulate growth-hormone receptor expression in fibroblasts, which is one proposed mechanism for the tendon-healing effects observed in animals. Human pharmacokinetics and tissue-level activity are not well characterised.",
    evidenceLandscape:
      "The published evidence for BPC-157 is overwhelmingly preclinical. Multiple independent rodent studies replicate accelerated healing of Achilles tendons and medial collateral ligaments, protection of GI mucosa against NSAID and alcohol injury, and angiogenic activity in cell and animal work. Human evidence is essentially absent — there are no large peer-reviewed placebo-controlled RCTs, and the compound holds no regulatory approval. The use case rests on extrapolation from rodent data plus self-reported anecdote, which is a different evidentiary standard from the one that supports compounds like insulin or GLP-1 agonists.",
  },
  topStudies: [
    {
      id: "bpc-study-1",
      title: "Accelerated Achilles tendon healing",
      summary:
        "Rats with surgically transected Achilles tendons healed faster and with better functional outcomes when given BPC-157, compared to saline controls.",
      citation: "[Sikiric et al., rodent model]",
      keyFinding:
        "BPC-157 administration improved both biomechanical strength and histological recovery of transected Achilles tendons relative to saline controls.",
      limitations:
        "Rodent-only model; no human trials replicating these findings; surgical-transection model may not generalise to chronic tendinopathy.",
    },
    {
      id: "bpc-study-2",
      title: "Medial collateral ligament repair",
      summary:
        "BPC-157 improved biomechanical and histological recovery of MCL injuries in rats, with effects observed in both systemic and local administration.",
      citation: "[Rodent model]",
      keyFinding:
        "Both systemic and local BPC-157 dosing accelerated MCL recovery in rats on biomechanical and histological measures.",
      limitations:
        "Rodent-only; small sample sizes; no human equivalents.",
    },
    {
      id: "bpc-study-3",
      title: "Protection of GI mucosa",
      summary:
        "Across multiple rodent studies, BPC-157 protected against NSAID-induced and alcohol-induced stomach lesions and improved markers of intestinal inflammation.",
      citation: "[Rodent model]",
      keyFinding:
        "Replicated protective effect against NSAID- and alcohol-induced gastric lesions in rats, with corresponding improvements in inflammatory markers.",
      limitations:
        "Rodent-only; oral bioavailability and translation to chronic human GI conditions are not established.",
    },
    {
      id: "bpc-study-4",
      title: "Endothelial and angiogenic effects",
      summary:
        "Cell and animal work shows upregulation of VEGFR2, suggesting a plausible mechanism for the angiogenesis-driven healing observed at injury sites.",
      citation: "[In vitro + rodent]",
      keyFinding:
        "Upregulation of VEGFR2 and downstream angiogenic signalling provides a candidate mechanism for the healing effects observed in rodent injury models.",
      limitations:
        "Mechanistic data only; no demonstration that the same pathway drives the same effect size in humans.",
    },
    {
      id: "bpc-study-5",
      title: "Human evidence is sparse",
      summary:
        "As of writing, there are no large, peer-reviewed, placebo-controlled human RCTs for BPC-157. The compound is not approved as a medicine in any major regulator.",
      citation: "[Humans — gap]",
      keyFinding:
        "No published large, peer-reviewed, placebo-controlled human RCTs exist for BPC-157.",
      limitations:
        "This is the gap itself — the case for use rests on extrapolation from animal models plus anecdote.",
    },
  ],
  dosageAndProtocols: {
    context:
      "BPC-157 is not an approved medicine in any major jurisdiction and there are no validated human dosing protocols. The patterns described here are anecdotal community usage, not clinical recommendations.",
    commonProtocols: [
      "Self-reported subcutaneous protocols typically run 250–500 mcg per day, split once or twice, for 4–8 weeks before cycling off.",
      "Some users dose locally near the injured site rather than systemically, on the rationale of higher local concentration. There is no controlled human evidence comparing systemic vs local administration.",
      "Oral capsule formulations are sometimes used for gut-specific symptoms, on the rationale of local action. Systemic effect from oral peptide use is unlikely given typical peptide bioavailability.",
    ],
    disclaimer:
      "This content is for educational purposes only and is not medical advice. BPC-157 is not approved by the FDA, MHRA, or TGA for any human use. The Performance Index does not recommend, prescribe, or endorse the use of any compound. Always consult a licensed healthcare professional.",
  },
  timelineExpectations: {
    phase1: {
      label: "Week 1–2",
      description:
        "Most users report little to no noticeable change in the first 1–2 weeks. Some describe a subtle reduction in baseline gut irritation or a small drop in injury-site pain.",
      evidenceType: "anecdotal",
    },
    phase2: {
      label: "Week 2–6",
      description:
        "This is where most anecdotal reports cluster. People describe meaningful reductions in tendon, joint, or gut pain, and the ability to tolerate loading or food categories that previously triggered symptoms. There is no controlled human data confirming this timeline.",
      evidenceType: "anecdotal",
    },
    longTerm: {
      label: "Long-term",
      description:
        "Long-term human outcomes are unknown. Most self-reported protocols cycle on for 4–8 weeks and then off. Repeated indefinite use has not been studied.",
      evidenceType: "anecdotal",
    },
  },
  sideEffectsDeepDive: [
    {
      title: "Injection-site reactions",
      body: "Redness, mild bruising, or transient irritation at the injection site is the most commonly reported issue.",
      severity: "mild",
    },
    {
      title: "Mild GI changes",
      body: "Nausea, loose stools, or appetite changes are reported anecdotally — usually mild and self-limiting.",
      severity: "mild",
    },
    {
      title: "Headaches and lightheadedness",
      body: "Reported by a minority of users, sometimes attributed to vasomotor effects from the angiogenic activity.",
      severity: "mild",
    },
    {
      title: "Unknown long-term effects",
      body: "Effects on cancer risk, hormonal axes, and chronic immune signalling have not been characterised in humans. This is the most important unknown.",
      severity: "severe",
    },
    {
      title: "Sourcing and contamination",
      body: "Unregulated supply chain means heavy-metal contamination, bacterial endotoxins, or under/over-dosed product are realistic risks.",
      severity: "moderate",
    },
  ],
  bloodworkMonitoring: [
    {
      title: "Baseline panel",
      body: "Before starting, a CBC, comprehensive metabolic panel, and lipid panel give you something to compare against later.",
      markers: ["CBC", "CMP", "lipid panel"],
    },
    {
      title: "Inflammation markers",
      body: "hs-CRP and ESR can be useful baseline markers, especially if you’re using BPC-157 for an inflammatory or gut-related complaint.",
      markers: ["hs-CRP", "ESR"],
    },
    {
      title: "Liver and kidney function",
      body: "ALT, AST, creatinine and eGFR are sensible to recheck after a cycle, even though no specific hepatic or renal toxicity has been characterised in humans.",
      markers: ["ALT", "AST", "creatinine", "eGFR"],
    },
    {
      title: "Symptom tracking",
      body: "Track the actual outcome you started for — pain on a 0–10 scale, loaded range of motion, gut symptom frequency. Without numbers it’s easy to confuse hope for healing.",
      markers: [],
    },
  ],
  mythsVsReality: [
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
  relatedCompounds: [
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
  sources: [],
};

export const compounds: Record<string, Compound> = {
  insulin,
  "bpc-157": bpc157,
};

export function getCompound(slug: string): Compound | undefined {
  return compounds[slug];
}

export function listCompoundSlugs(): string[] {
  return Object.keys(compounds);
}
