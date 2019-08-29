import {project} from '@magicspace/core';

import {AUTHORING} from './@constants';

export default project({
  name: 'mr.universe',
  path: 'packages/core',
  extends: [
    {
      name: '@magicspace/templates/typescript',
      options: {
        ...AUTHORING,
      },
    },
  ],
});
