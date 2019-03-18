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
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { LayoutBehavior } from '@nuxeo/nuxeo-ui-elements/nuxeo-layout-behavior.js';

/**
`nuxeo-picture-formats`
@group Nuxeo UI
@element nuxeo-picture-formats
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      label {
        opacity: .5;
        min-width: 30%;
        display: inline-block;
      }

      .item {
        @apply --layout-horizontal;
        @apply --layout-flex;
        @apply --layout-justified;
        line-height: 1.5em;
      }

      iron-icon {
        @apply --nuxeo-action;
      }

      iron-icon:hover {
        @apply --nuxeo-action-hover;
      }

    </style>

    <h3>[[label]]</h3>
    <div>
      <template is="dom-repeat" items="[[_getAdditionalFormats(document)]]" as="item">
        <div class="item">
          <label>[[item.name]]</label>
          <span>[[item.dimensions]]</span>
          <span>[[item.size]]</span>
          <span>[[item.format]]</span>
          <a id="download-[[index]]" href="[[item.data]]">
            <iron-icon icon="nuxeo:download"></iron-icon>
          </a>
          <paper-tooltip for="download-[[index]]">[[i18n('pictureViewLayout.download.tooltip')]]</paper-tooltip>
        </div>
      </template>
    </div>
`,

  is: 'nuxeo-picture-formats',
  behaviors: [LayoutBehavior],

  properties: {
    label: String,
    document: Object,
    additionalFormats: {
      type: Object,
      computed: '_getAdditionalFormats(document)',
    },
  },

  _getAdditionalFormats(document) {
    return (document && document.properties['picture:views']) ? document.properties['picture:views']
      .map((view) => {
        return {
          name: view.description,
          dimensions: `${view.width  } x ${  view.height}`,
          size: this.formatSize(view.content.length),
          format: view.info.format,
          data: view.content.data,
        };
      }) : [];
  },
});
