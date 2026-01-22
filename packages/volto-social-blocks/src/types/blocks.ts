import type {
  BlockEditProps,
  BlockViewProps,
  BlocksFormData,
} from '@plone/types';

export type BlockEditPropsWithData<TData extends BlocksFormData> =
  BlockEditProps & {
    data: TData;
  };

export type BlockViewPropsWithData<TData extends BlocksFormData> =
  BlockViewProps & {
    data: TData;
  };

export type BlockDataFormWrapperProps<TData extends BlocksFormData> = {
  data: TData;
  block: BlockEditProps['block'];
  onChangeBlock: BlockEditProps['onChangeBlock'];
} & Partial<Pick<BlockEditProps, 'blocksConfig' | 'navRoot' | 'contentType'>>;
