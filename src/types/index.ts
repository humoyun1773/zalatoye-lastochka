export type Language = 'uz' | 'ru' | 'en';

export interface DistrictInfo {
  id: string;
  nameUz: string;
  nameRu: string;
  nameEn: string;
  population: string;
  targetDrivers: number;
  activeRoutes: number;
  coverageStatus: 'active' | 'expanding' | 'planned';
}

export interface InvestmentTier {
  shares: number;
  sharePercentage: number;
  capital: number;
  monthlyProfit: number;
  totalProfit16Months: number;
  refundMonth17: number;
  totalReturn: number;
}
