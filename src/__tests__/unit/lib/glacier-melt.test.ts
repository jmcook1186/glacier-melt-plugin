import {GlacierMelt} from '../../../lib/glacier-melt';

describe('lib/my-custom-plugin: ', () => {
  describe('MyCustomPlugin(): ', () => {
    it('has metadata field.', () => {
      const pluginInstance = GlacierMelt();

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(pluginInstance.metadata).toHaveProperty('kind');
      expect(typeof pluginInstance.execute).toBe('function');
    });

    describe('execute(): ', () => {
      it('applies logic on provided inputs array.', async () => {
        const pluginInstance = GlacierMelt();
        const inputs = [{}];

        const response = await pluginInstance.execute(inputs, {});
        expect(response).toEqual(inputs);
      });
    });
  });
});
