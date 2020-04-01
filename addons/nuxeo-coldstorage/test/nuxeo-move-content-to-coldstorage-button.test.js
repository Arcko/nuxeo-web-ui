/**
@license
(C) Copyright Nuxeo Corp. (http://nuxeo.com/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { fixture, flush, html, isElementVisible } from '@nuxeo/nuxeo-testing-helpers/test-helpers';
import '../elements/nuxeo-move-content-to-coldstorage-button.js';

suite('nuxeo-move-content-to-coldstorage-button', () => {
  suite('Button Visibility', () => {
    test('NOK?', () => {
      expect(false).to.be.true;
    });

    test('OK?', async () => {
      const document = {
        'entity-type': 'document',
        uid: '1',
        contextParameters: {
          permissions: ['WriteColdStorage'],
        },
        facets: [],
        properties: {
          'file:content': 'someContent',
        },
        type: 'File',
      };

      const button = await fixture(
        html`
          <nuxeo-move-content-to-coldstorage-button .document=${document}></nuxeo-move-content-to-coldstorage-button>
        `,
      );

      await flush();
      expect(isElementVisible(button)).to.be.true;
    });
  });
});
