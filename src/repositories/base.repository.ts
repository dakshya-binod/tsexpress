import { BaseModel } from "../models/base.model";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class BaseRepository<TModel extends BaseModel>{
  protected data: TModel[];

  constructor() {
    this.initialize();
  }

  protected initialize(): void {
    this.data = [];
  }

  public getAll(): TModel[] {
    return this.data;
  }

  public single(predicate: (item: TModel) => boolean): TModel {
    const filter = this.data.filter(item => predicate(item));
    if (filter.length > 1) {
      throw "More than single result";
    }
    return filter.length === 0 ? null : filter[0];
  }
}
