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
  },
  extension?: {
    value: Array<string>,
    errorMessage: string
  },
  maxFileNameLength?: {
    value: number,
    errorMessage: string
  }
}
