import {PluginInterface, PluginParams} from '../types/interface';

export const GlacierMelt = (): PluginInterface => {
  const metadata = {
    kind: 'execute',
  };

  /**
   * Execute's strategy description here.
   */
  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {
    return inputs.map(input => {
      // 2.4 g of ice per g of C according to
      // https://kencaldeira.wordpress.com/2018/03/24/how-much-ice-is-melted-by-each-carbon-dioxide-emission/
      input['glacier-melt'] = input['carbon'] * 2.4;

      return input;
    });
  };

  return {
    metadata,
    execute,
  };
};
