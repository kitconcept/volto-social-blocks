import type React from 'react';
import config from '@plone/volto/registry';

export function getRegistryComponent<TProps>(
  name: string,
): React.ComponentType<TProps> | undefined {
  const component = config.getComponent(name)?.component as unknown;

  if (
    typeof component === 'function' ||
    (typeof component === 'object' && component !== null)
  ) {
    return component as React.ComponentType<TProps>;
  }

  return undefined;
}
