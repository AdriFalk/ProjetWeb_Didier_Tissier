// Import PolymerElement class and html helper definition
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class FoodListItem extends PolymerElement {

    static get template() {
      return html`
      
      <style type="text/css">
        .rouge{ color: red; }
        .black{ color: black; }
        .noir{background-color: #383838; color:white;}
        .gris{background-color: rgb(169,169,169); color:white;}
        .vert { color: green; }
        .petit { font-size: 100%; }
        .grand {font-size: 250%; }
        .justify {text-align: justify}
        .data-table{
          border: solid 1px black;
          border-radius: 0px;
          margin-top: 15px;
          margin-right: auto;
          margin-left: auto;
        }
      </style>

      <div id=[[id]] class="texteToggleSize">
        <table class="data-table" style="width: 100%;" cellspacing="0" cellpadding="0"><colgroup> <col width=auto> <col width=auto> <col width=auto></colgroup>
        <tbody>
            <tr class="noir">
            <td>Data for [[id]]</td>
            <td>Cooked</td>
          </tr>
          <tr class="odd">
            <td>Calories (kcal for 100g)</td>
            <td>[[calories]]</td>
          </tr>
          <tr class="gris">
            <td colspan="3">Main data</td>
          </tr>
          <tr>
            <td>Protein (g for 100g)</td>
            <td>[[protein]]</td>
          </tr>
          <tr class="odd">
            <td>Carbohydrate (g for 100g)</td>
            <td>[[carbohydrate]]</td>
          </tr>
          <tr>
            <td>Lipids (g for 100g)</td>
            <td>[[lipid]]</td>
            </tr>
          <tr>
          <tr class="gris">
            <td colspan="3">Minerals</td>
          </tr>
          <tr class="odd">
            <td>Potassium (mg fo 100g)</td>
            <td>[[potassium]]</td>
          </tr>
          <tr>
            <td>Phosphorus (mg for 100g)</td>
            <td>[[phosphorus]]</td>
          </tr>
          <tr class="gris">
            <td colspan="3">Trace elements</td>
          </tr>
          <tr class="odd">
            <td>Iron (mg for 100g)</td>
            <td>[[iron]]</td>
          </tr>
          <tr>
            <td>Zinc (mg for 100g)</td>
            <td>[[zinc]]</td>
          </tr>
        </tbody>
       </table>
      </div>
      `;
    }
  
    static get properties() {
      return {
            id : {type : String,},
            calories :{type : String,},
            protein : {type : String,},
            carbohydrate :{type : String,},
            lipid: {type: String,},
            b5vitamin: {type: String,},
            cvitamin: {type: String,},
            potassium: {type: String,},
            phosphorus: {type: String,},
            sodium: {type: String,},
            calcium: {type: String,},
            iron: {type: String,},
            zinc: {type: String,}
      }
    }
    // Element class can define custom element reactions
    connectedCallback() {
    super.connectedCallback();
    //console.log('Element created!');
    }

    ready() {
    super.ready();
    //console.log('Element is ready!');
    }
}
  
customElements.define('food-list-item', FoodListItem);
