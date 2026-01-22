import type { JSONSchema } from '@plone/types';

type SchemaPropertiesWithDefault = Record<
  string,
  { default?: unknown } | undefined
>;

export function applySchemaDefaults<TData extends { [x: string]: unknown }>(
  schema: JSONSchema,
  data: TData,
): TData {
  const formData = { ...data };
  const properties = (schema.properties as SchemaPropertiesWithDefault) ?? {};

  Object.keys(properties).forEach((key) => {
    const defaultValue = properties[key]?.default;
    if (defaultValue !== undefined && formData[key] === undefined) {
      formData[key] = defaultValue;
    }
  });

  return formData;
}
