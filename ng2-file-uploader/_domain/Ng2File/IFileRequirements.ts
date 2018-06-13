export interface IFileRequirements {
  minSizeBytes?: {
    value: number,
    errorMessage: string
  },
  maxSizeBytes?: {
    value: number,
    errorMessage: string
  },
  types?: {
    value: Array<string>,
    errorMessage: string
  }
}
