export type SchemaOptions = {
  idAttribute?: string | Function;
}

export type IterableSchemaOptions = {
  schemaAttribute?: string | Function;
}

export type UnionSchemaOptions = {
  schemaAttribute: string | Function;
}

export type NormalizeOptions = {
  assignEntity?: Function;
  mergeIntoEntity?: Function;
}

export type NormalizeInput = Object | Array<Object>;

export type NormalizeOutput = {
  result: any;
  entities?: any;
}

export class Schema {
  constructor (key: string, options?: SchemaOptions);

  define(schema: SchemaMap): void;
  getKey(): string;
  getIdAttribute(): string;
}

export class IterableSchema {
  constructor (schema: SchemaValue, options?: IterableSchemaOptions);

  getItemSchema(): SchemaValue;
}

export class UnionSchema {
  constructor (schema: SchemaValue, options: UnionSchemaOptions);

  getItemSchema(): SchemaValue;
}

export type SchemaValue = Schema | IterableSchema | UnionSchema | SchemaMap;

export type SchemaMap = {
  [key: string]: SchemaValue;
}

export function arrayOf(
  schema: SchemaValue,
  options?: IterableSchemaOptions
): IterableSchema;

export function valuesOf(
  schema: SchemaValue,
  options?: IterableSchemaOptions
): IterableSchema;

export function unionOf(
  schema: SchemaValue,
  options?: UnionSchemaOptions
): UnionSchema;

export function normalize(
  input: NormalizeInput,
  schema: SchemaValue,
  options?: NormalizeOptions
): NormalizeOutput;
