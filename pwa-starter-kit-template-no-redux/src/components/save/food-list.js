import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

// Import template repeater
import '@polymer/polymer/lib/elements/dom-repeat.js';

import '@granite-elements/granite-bootstrap/granite-bootstrap';

import './food-list-item.js'

export class FoodList extends PolymerElement {

    static get template() {
      return html`
      <style include="granite-bootstrap">

        .container {
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        .food{
          padding-right: 15px;
          padding-left: 15px;
          margin-top: 25px;
          margin-left: auto;
        }
        .visuallyhidden {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
        .row {
          margin-right: -15px;
          margin-left: -15px;
        }

      </style>

      <div class="container">
        <div class="row">
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
          <label for="search" class="visuallyhidden">Search:
          </label>
          <input 
            type="text" 
            name="search"
            class="form-control" 
            id="search"  
            placeholder="Search foods"
            >
        </div>
        <div class="col-md-1">
          <button type="search" on-click="_inputChange">Search</button>
        </div>

        <div class="food">
        <div class="row">
          <template 
            id="foodList" is="dom-repeat" items="[[foods]]" >
            <div class="col-md-4">
              <food-list-item
                id= "[[item.id]]"
                calories="[[ item.calories]]" 
                protein="[[item.protein]]" 
                carbohydrate="[[item.carbohydrate]]" 
                lipid="[[item.lipid]]"
                potassium="[[item.potassium]]"
                phosphorus="[[item.phosphorus]]"
                sodium="[[item.sodium]]"
                calcium="[[item.calcium]]"
                iron="[[item.iron]]"
                zinc="[[item.zinc]]">
              </food-list-item>
            </div>
          </template>
        </div>     
        </div>
    </div>

      `;
    }
  
    static get properties() {
      return {
        foods: {
          type: Array,
        },
        filterText: {
          type: String,
        }, 
        current: {
          type: Array,
        },
        currentFoods: {
          type: String,
          computed: '_getCurrentFoods(foods, filterText)',
        }
      }
    }


    _getCurrentFoods() {
      return this.foods.filter((item) => item.id.match(new RegExp(this.filterText, 'i'))).length;
    }

    _inputChange() {
      this.filterText = this.$.search.value;
      this.$.foodList.render();
    }

    async _getData() {
     try {
      const response = await fetch('http://localhost:3000/nutrition');
      this.foods = await response.json();
      }
      catch (err) {
        console.log('fetch failed', err);
      }
    }

    constructor() {
    super();
    this.foods=[];
    this._getData();   
  }
  }
  
  customElements.define('food-list', FoodList);