/**
 * describes all fields, that should exist in each file object,
 * for correct data representation
 *
 * base browser File() class also 'implements' this interface
 *
 * it should be used for uploaded files data restore (without native file content)
 */
export interface IFileData {
  name: string,
  type: string,
  size: number,
  lastModifiedDate?: Date,
  lastModified?: number
}
