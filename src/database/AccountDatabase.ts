import { BaseDatabase } from "./BaseDatabase";
import { TAccountDB } from "../types";

export class AccountDatabase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "accounts";
  public async findAccounts() {
    const accountsDB: TAccountDB[] = await BaseDatabase.connection(
      AccountDatabase.TABLE_ACCOUNTS
    );
    return accountsDB;
  }
  public async findAccountById(id: string) {
    const [accountDB]:
      | TAccountDB[]
      | undefined[] = await BaseDatabase.connection(
      AccountDatabase.TABLE_ACCOUNTS
    ).where({ id });
    return accountDB;
  }
  public async insertAccount(newAccountDB: TAccountDB) {
    await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).insert(
      newAccountDB
    );
  }
}
