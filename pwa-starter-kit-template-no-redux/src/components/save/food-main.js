
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/app-route/app-route';
import '@polymer/app-route/app-location';

import '@granite-elements/granite-bootstrap/granite-bootstrap.js';

import './food-list';
import './program-detail';

export class FoodMain extends PolymerElement {

  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
    
      <app-location route="{{route}}" use-hash-as-path></app-location>

      <app-route route="[[route]]" pattern="/programs" active="{{programListActive}}"></app-route>
      <app-route route="[[route]]" pattern="/program/:id" data="{{programId}}" active="{{programIdActive}}"></app-route>


      <template is="dom-if" if="{{programListActive}}">
        <food-list></food-list>
      </template>
      
      <template is="dom-if" if="{{programIdActive}}">
        <food-detail id="[[programId.id]]"></food-detail>
      </template>
    `;
  }


  static get properties() {
    return {
      programListActive: {
        type: Boolean,
      },
      programIdActive: {
        type: Boolean,
      },
      programId: {
        tpe: String,
      },
      route: {
        type: Object,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.route.path) {
      this.route = { ... this.route, path: '/programs' }
    }
  }
}


customElements.define('food-main', FoodMain);