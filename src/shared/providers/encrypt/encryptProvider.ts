export interface IEncryptProvider {
  createHash(text: string): string;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}