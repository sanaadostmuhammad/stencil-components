import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'UdemyWCAdvanced',
  // plugins: [
  //   sass({
  //     injectGlobalPaths: [
  //       'src/global/variables.scss',
  //       'src/global/mixins.scss'
  //     ]
  //   })
  // ],
  globalStyle: 'src/global/variables.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
