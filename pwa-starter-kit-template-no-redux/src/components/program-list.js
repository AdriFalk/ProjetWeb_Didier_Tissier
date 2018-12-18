import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

// Import template repeater
import '@polymer/polymer/lib/elements/dom-repeat.js';

import '@granite-elements/granite-bootstrap/granite-bootstrap';

import './program-list-item.js'
import './new-list-item.js'

export class ProgramList extends PolymerElement {

    static get template() {
      return html`
      <style include="granite-bootstrap">

        [class*="col-"] {
          text-align: center;
        }
        hr {
          width:100%;
          border: 1px solid #CCC;
        }
        .container {
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        @media (min-width: 768px) {
          .container {
            width: 750px;
          }
        }
        @media (min-width: 992px) {
          .container {
            width: 970px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            width: 1170px;
          }
        }
        .row {
          margin-right: -15px;
          margin-left: -15px;
        }
      </style>

      <div class="container">
          <div class="row">
              <div class="col-md-4">
                <label for="search">Search
                </label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="search"  
                  placeholder="Search programs"
                  on-input="_inputChange">
              </div>
              <div class="col-md-4">
                <label for="sort">Sort by
                </label>
                <select
                  id="sort"
                  class="form-control"
                  on-change='_sortingChanged'>
                  <template is="dom-repeat" items="[[criteria]]">
                    <option 
                      value="[[item.name]]">
                      [[item.label]]
                    </option>
                  </template>
                </select>
              </div>
              <div class="col-md-4">
                <label for="descending">Descending sort
                </label>
                  <input 
                    id="descending" 
                    type="checkbox" 
                    class="form-control-lg"
                    on-change="_descendingChange">
              </div>
          </div>

          <div class="programs">
          <div class="row">
            <template 
              id="programList" is="dom-repeat" items="[[programs]]" filter="_programFilter" sort="_programSorter">
                <div class="col-md-4">
                  <program-list-item
                    id= "[[item.id]]"
                    name="[[item.name]]" 
                    description="[[item.description]]" 
                    type="[[item.type]]" 
                    level="[[item.level]]"
                    link="[[item.link]]">
                  </program-list-item>
                </div>
            </template>
          </div>
          <div>Number of programs in the list: [[currentPrograms]]</div>
          <hr />
          <new-list-item>
          </new-list-item>
      </div>
      `;
    }
  
    static get properties() {
      return {
        programs: {
          type: Array,
        },
        filterText: {
          type: String,
        }, 
        currentPrograms: {
          type: String,
          computed: '_getCurrentPrograms(programs, filterText)',
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
      this.$.programList.render();
    }

    _programSorter(a, b) {
      var invert = 1;
      if (this.descendingSort) invert = -1;
      if ( a[this.criterium] === b[this.criterium] ) return 0;
      if ( a[this.criterium] < b[this.criterium] ) return -1*invert;
      if ( a[this.criterium] > b[this.criterium] ) return 1*invert;   
  }

    _getCurrentPrograms() {
      return this.programs.filter((item) => item.name.match(new RegExp(this.filterText, 'i'))).length;
    }

    _inputChange() {
      this.filterText = this.$.search.value;
      this.$.programList.render();
    }

    _programFilter(item) {
      return item.name.match(new RegExp(this.filterText, 'i'));
    }

    _sortingChanged() {
      this.criterium = this.$.sort.selectedOptions[0].value;
      this.$.programList.render();
    }

    async _getData() {
     try {
      const response = await fetch('http://localhost:3000/trainingVideo');
      this.programs = await response.json();
      }
      catch (err) {
        console.log('fetch failed', err);
      }
    }

    constructor() {
    super();
    this.programs=[];
    this.criteria = [
      { name: "name", label: "Alphabetical"},
      { name: "type", label: "Type" },
      { name: "level", label: "Level"}
    ];

    this.criterium = this.criteria[0].name;
    this._getData();
  }

  }
  
  customElements.define('program-list', ProgramList);