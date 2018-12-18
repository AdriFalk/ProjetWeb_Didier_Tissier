import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@granite-elements/granite-bootstrap/granite-bootstrap';

export class ProgramDetail extends PolymerElement {

  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
      <style>
        .program {
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

        ul.program-thumbs {
          margin: 0;
          list-style: none;
        }

        ul.program-thumbs li {
          border: 1px solid black;
          display: inline-block;
          margin: 1em;
          background-color: white;
        }

        ul.program-thumbs img {
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

      <div id="[[program.id]]" class="program clearfix">
        <h1 class="name">[[program.name]]</h1>
        <p class="description">[[program.description]]</p>
        <p iframe width="215" height="215" src=[[link]] frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        <ul class="specs">
          <li>
            <dl>
              <dt>Level</dt>
              <dd>[[program.level]]</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Type</dt>
              <dd>[[program.type]]</dd>
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
      program: {
        type: Object,
      },
    };
  }

  async _onIdChange() {
    const url = `src/components/data/programs/details/${this.id}.json`;
    try {
      const response = await fetch(url);
      this.program = await response.json();
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }
}


customElements.define('program-detail', ProgramDetail);