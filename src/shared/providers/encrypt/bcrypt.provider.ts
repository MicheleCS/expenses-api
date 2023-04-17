import { IEncryptProvider } from "./encryptProvider";
import * as bcrypt from "bcrypt";

export class BcryptProvider implements IEncryptProvider {
  createHash(text: string): string {
    return bcrypt.hashSync(text, 10);
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(payload, hashed);
  }
}