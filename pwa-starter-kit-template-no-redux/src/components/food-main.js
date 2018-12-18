
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/app-route/app-route';
import '@polymer/app-route/app-location';

import '@granite-elements/granite-bootstrap/granite-bootstrap.js';

import './food-list';

export class FoodMain extends PolymerElement {

  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
    
      <app-location route="{{route}}" use-hash-as-path></app-location>

      <app-route route="[[route]]" pattern="/foods" active="{{foodListActive}}"></app-route>
      <app-route route="[[route]]" pattern="/food/:id" data="{{foodId}}" active="{{foodIdActive}}"></app-route>


      <template is="dom-if" if="{{foodListActive}}">
        <food-list></food-list>
      </template>
      
    `;
  }


  static get properties() {
    return {
      foodListActive: {
        type: Boolean,
      },
      foodIdActive: {
        type: Boolean,
      },
      foodId: {
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
      this.route = { ... this.route, path: '/foods' }
    }
  }
}


customElements.define('food-main', FoodMain);