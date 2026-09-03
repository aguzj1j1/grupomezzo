export interface PipelineStepItem {
  readonly title: string;
  readonly description: string;
}

export interface PipelineStep {
  readonly num: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly items?: readonly PipelineStepItem[];
}

export interface Benefit {
  readonly title: string;
  readonly description: string;
}

export interface ImpactItem {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectItem {
  readonly image: string;
  readonly title: string;
  readonly location: string;
  readonly category: string;
  readonly description: string;
}

export interface CapabilitySlide {
  readonly num: string;
  readonly title: string;
  readonly description: string;
}

export interface AllianceItem {
  readonly name: string;
  readonly description: string;
  readonly logo?: string;
  readonly logoAlt?: string;
}
