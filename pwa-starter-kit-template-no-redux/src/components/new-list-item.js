// Import PolymerElement class and html helper definition
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';


export class NewListItem extends PolymerElement {

    static get template() {
      return html`
      
      <style type="text/css">
        .new_add{
            margin: 40px;
            margin-left: 20px;
            padding: 10px;
            border: 1px solid #CCC;
            border-radius: 5px;
            height: 400px;
            width:315px;      
            text-align : justify;
  
        }
        .title{ 
          text-align:center;
          margin-top: 5x;
          padding:0px;
          border: 1px solid #CCC;
          padding:10px;
        }
        .descrip {
          height: 80px;
          width:300px;
        }
        .show{border:1px solid;}
        .rouge{ color: red; }
        .vert { color: green; }
        .petit { font-size: 100%; }
        .grand {font-size: 250%; }
        .justify {text-align: justify}

      </style>

      <form class="new_add" action="http://localhost:3000/nutrition/add" method="post" >
        <div>
          <div >
            <div >
              <label for="id">ID :</label>
            </div>
            <div >
            <input type="text" id="id" name="id">
            </div>
          </div>
          <div >
            <div >
              <label for="name">Name :</label>
            </div>
            <div >
            <input type="text" id="name" name="name">
            </div>
          </div>
          <div >
            <div>
              <label for="link">Link:</label>
            </div>
            <div >
            <input type="url" id="link" name="link">
            </div>
          </div>
          <div>
            <div >
              <label for="level">Level :</label>
            </div>
            <div>
            <input type="text" id="level" name="level">
            </div>
          </div>
          <div >
            <div >
              <label for="type">Type :</label>
            </div>
            <div class="col-md-3">
            <input type="text" id="type" name="type">
            </div>
          </div>
          <div >
            <div >
              <label for="description">Description:</label>
            </div>
            <div>
            <textarea class="descrip" id="description" name="description"></textarea>
            </div>
            <div>
              <div class="button">
                <button type="submit" value="post">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
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
    submit(){
      //var id=document.querySelectorAll('.new_id');
      //console.log(id);
    }
    ready() {
    super.ready();
    console.log('Element is ready!');
    }
}
  
customElements.define('new-list-item', NewListItem);