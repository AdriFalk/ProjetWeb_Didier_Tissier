// Import PolymerElement class and html helper definition
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class ProgItem extends PolymerElement {

    static get template() {
      return html`
      <style> 
        .last_add{
            margin: 10px;
            padding: 10px;
            border: solid 1px black;
            border-radius: 5px;
            min-height: 100px;
            min-width:315px; 
            columns:2;        
            text-align : center;
  
        } 
      </style>
      </style>
      
      <style type="text/css">
        .rouge{ color: red; }
        .vert { color: green; }
        .petit { font-size: 100%; }
        .grand {font-size: 250%; }
        .justify {text-align: justify}
      </style>

      <div id="[[id]]" class="last_add">
        <a href="view2#/programs/[[id]]"><h3 class="rouge ">[[name]]</h3></a>
        <div class="justify" >
            <p> [[description]] </p>  
            <p> Type: [[type]] &nbsp; &nbsp; Level: [[level]]</p> 
        </div>   
        <iframe class="center" width="215" height="215" src=[[link]] frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      `;
    }
  
    static get properties() {
      return {
            id : {type : String,},
            name :{type : String,},
            link : {type : String,},
            description :{type : String,},
            level: {type: String,},
            type: {type: String,}
      }
    }
    // Element class can define custom element reactions
    connectedCallback() {
    super.connectedCallback();
    console.log('Element created!');
    }

    ready() {
    super.ready();
    console.log('Element is ready!');
    }
}
  
customElements.define('youtube-embed', ProgItem);