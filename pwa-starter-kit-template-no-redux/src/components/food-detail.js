import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@granite-elements/granite-bootstrap/granite-bootstrap';

export class foodDetail extends PolymerElement {

  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
      <style>
        .food {
          margin: 10px;
          padding: 10px;
          border: solid 1px black;
          border-radius: 10px;
          min-height: 150px;
        }
        .back {
          width: 50px;
          height: 50px;
        }
        .img {
          float: left;
          border: 1px solid black;
          margin-right: 3em;
          margin-bottom: 2em;
          background-color: white;
          padding: 2em;
          height: 400px;
          width: 400px;
        }

        ul.food-thumbs {
          margin: 0;
          list-style: none;
        }

        ul.food-thumbs li {
          border: 1px solid black;
          display: inline-block;
          margin: 1em;
          background-color: white;
        }

        ul.food-thumbs img {
          height: 100px;
          width: 100px;
          padding: 1em;
        }

        ul.specs {
          clear: both;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        ul.specs > li{
          display: inline-block;
          width: 200px;
          vertical-align: top;
        }

        ul.specs > li > span{
          font-weight: bold;
          font-size: 1.2em;
        }

        ul.specs dt {
          font-weight: bold;
        }

        h1 {
          border-bottom: 1px solid gray;
        }
      </style>

      <div id="[[food.id]]" class="food clearfix">
        <h1 class="name">[[food.name]]</h1>
        <p class="description">[[food.description]]</p>
        <p iframe width="215" height="215" src=[[link]] frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        <ul class="specs">
          <li>
            <dl>
              <dt>Level</dt>
              <dd>[[food.level]]</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Type</dt>
              <dd>[[food.type]]</dd>
            </dl>
          </li>
        </ul>
      </div>
    `;
  }


  static get properties() {
    return {
      id: {
        type: String,
        observer: '_onIdChange',
      },
      food: {
        type: Object,
      },
    };
  }

  async _onIdChange() {
    const url = `src/components/data/food/${this.id}.json`;
    try {
      const response = await fetch(url);
      this.food = await response.json();
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }
}


customElements.define('food-detail', foodDetail);