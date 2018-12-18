import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class LastAdd extends PolymerElement {

    static get template() {
      return html`
      <style> .last_add{
        margin: 10px;
        padding: 10px;
        border: solid 1px black;
        border-radius: 5px;
        min-height: 100px;
        width:315px; 
        height: 415px;
        text-align : center;
       
      } </style>
      <style type="text/css">
        .rouge{ color: red; }
        .vert { color: green; }
        .petit { font-size: 100%; }
        .grand {font-size: 250%; }
      </style> 
      <div class="last_add" >
        <h3 class="rouge ">[[title]]</h3>
        <iframe width="215" height="215" src=[[link]] frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>[[description]]</p>   
        </div>
      `;
    }
  
    static get properties() {
      return {
            id : {type : String,},
            title :{type : String,},
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
  
customElements.define('youtube-embed-last', LastAdd);