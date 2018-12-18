import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class Miniature extends PolymerElement{
    static get template() {
        return html`
        <style>
        </style>
        <div style="min-height: 150px; background-image: url('"http://fontaine.trainingparc.com/wp-content/uploads/sites/10/2016/10/FormatFactorytrainint-parc-grenoble-cardio-training-4.jpg"'); 
         onclick="window.location.href='http://fontaine.trainingparc.com/cardio/'; >
            <div style="padding: 10px;min-height: 150px">
                <div style="background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.6); height: 150px">
                    <div><p style="font-size: 14px;line-height: 14px;text-align: center">
                        <h4 style="text-align: center"><strong><span style="color: #ffffff">[[title]]</strong></h4>
                        <p style="font-size: 14px;line-height: 20px;text-align: center"><span style="color: #ffffff"><strong>machines de dernières générations</strong></span></p>
                    </div>
                </div>
            </div>
        </div>  
        `;
    }
    static get properties() {
        return {
            title :{type : String,},
            backgroundUrl : {type : String,},
            subTitle :{type : String,},
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
      
   customElements.define('miniature-index', Miniature);