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
        <div>Number of foods in the list: [[currentFoods]]</div> 
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
        currentFoods: {
          type: String,
          computed: '_getCurrentFoods(foods, filterText)',
        },
        criterium: {
          type: String,
        },
        descendingSort: {
          type: Boolean,
        }
      }
    }

    _descendingChange() {
      this.descendingSort = this.$.descending.checked;
      this.$.foodList.render();
    }

    _programSorter(a, b) {
      var invert = 1;
      if (this.descendingSort) invert = -1;
      if ( a[this.criterium] === b[this.criterium] ) return 0;
      if ( a[this.criterium] < b[this.criterium] ) return -1*invert;
      if ( a[this.criterium] > b[this.criterium] ) return 1*invert;   
  }

    _getCurrentFoods() {
      return this.foods.filter((item) => item.id.match(new RegExp(this.filterText, 'i'))).length;

    }

    _inputChange() {
      this.filterText = this.$.search.value;
      this.$.foodList.render();
    }

    _foodFilter(item) {
      return item.id.match(new RegExp(this.filterText, 'i'));
    }

    _sortingChanged() {
      this.criterium = this.$.sort.selectedOptions[0].value;
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
    this.criteria = [
      { name: "calories", label: "Calories"},
      { name: "protein", label: "Protein" },
      { name: "carbohydrate", label: "Carbohydrate"}
    ];

    this.criterium = this.criteria[0].name;
    this._getData();   
  }
  }
  
  customElements.define('food-list', FoodList);