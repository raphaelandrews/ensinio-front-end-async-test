export interface Languages {
    pt: string;
    en: string;
    es: string;
}

export interface FeatureItem {
    id: number;
    title: Languages;
    description: Languages;
}

export interface FeaturesData {
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
    data: FeatureItem[];
}