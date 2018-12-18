import { html } from '@polymer/lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';
import ('./program-list');
import('./youtube-embed.js');
class MyView1 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        .rect{
          margin: 10px;
          margin-top:0px;
        }
        .rect1{
          float:left;
          width:50%;
        }
        .rect2{
          margin-left:51%;
        }
        .hide{display:none;}
        .slides_container {
          max-width: 1000px;
          position: relative;
          margin: auto;
        }
        .previous_button, .next_button {
          cursor: pointer;
          position: absolute;
          top: 50%;
          width: auto;
          margin-top: -22px;
          padding: 16px;
          color: white;
          font-weight: bold;
          font-size: 18px;
          transition: 0.6s ease;
          border-radius: 0 3px 3px 0;
          user-select: none;
        }
        .next_button {
          right: 0;
          border-radius: 3px 0 0 3px;
        }
        .previous_button:hover, .next_button:hover {
          background-color: rgba(0,0,0,0.8);
        }
        .dot {
          cursor: pointer;
          height: 15px;
          width: 15px;
          margin: 0 2px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.6s ease;
        }
        
      </style>
      <div class="rect"> 
        <div class="rect1" style=" min-height: 150px; background-image: url(http://localhost:3000/images/Training.jpg)" onclick="window.location.href='/view2';">
          <div style="padding: 10px;min-height: 150px">
            <div style="background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.5); height: 150px; margin-top : -10px">
              <div><p style="font-size: 14px;line-height: 14px;text-align: center">
                <h4 style="text-align: center"><strong><span style="color: #ffffff">Training</strong></h4>
                <p style="font-size: 14px;line-height: 20px;text-align: center"><span style="color: #ffffff"><strong>Choisissez votre training</strong></span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="rect2" style="min-height: 150px; background-image: url(http://localhost:3000/images/Nutrition.jpg)" onclick="window.location.href='/view3';">
          <div style="padding: 10px;min-height: 150px">
            <div style="background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.5); height: 150px; margin-top : -10px">
              <div><p style="font-size: 14px;line-height: 14px;text-align: center">
                <h4 style="text-align: center"><strong><span style="color: #ffffff">Nutrition</strong></h4>
                <p style="font-size: 14px;line-height: 20px;text-align: center"><span style="color: #ffffff"><strong>Mangez sainement</strong></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
      <h2>Last added</h2>
      <youtube-embed
      name="32 Minute Home Cardio Workout with No Equipment" 
      description="You want to start in cardio but you live in city ?  Watch this new training and begin ready for the next IronFest !" 
      type ="Cardio"
      level= "beginner"
      link="https://www.youtube.com/embed/qWy_aOlB45Y"></youtube-embed>
      </section>
   
  <div class="slides_container">
    <div  class='mySlides' >
    <img  src="http://localhost:3000/images/slideShow1.jpg" style="width:100%">
    </div>
    <div  class='mySlides hide'>
    <img  src="http://localhost:3000/images/slideShow2.jpg" style="width:100% ">
    </div>
    <div  class='mySlides hide'>
    <img  src="http://localhost:3000/images/slideShow3.jpg" style="width:100%">
    </div>
    <div  class='mySlides hide'>
    <img src="http://localhost:3000/images/slideShow4.jpg" style="width:100% ">
    </div>

    <button class="previous_button" @click="${this.moinsDivs}">&#10094;</button>
    <button class="next_button" @click="${this.plusDivs}">&#10095;</button>
  
    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" @click="${this.selected_slide1}"></span> 
      <span class="dot" @click="${this.selected_slide2}""></span> 
      <span class="dot" @click="${this.selected_slide3}""></span> 
      <span class="dot" @click="${this.selected_slide4}""></span>
    </div>
    
    
  </div>
      `;
  }
  
  constructor() {
    super();
    this.slideIndex = 1;
    
  }
  test(){
    this.showDivs(1);
  }
  plusDivs() {
    this.showDivs(this.slideIndex += 1);
  }
  moinsDivs() {
    this.showDivs(this.slideIndex += -1);
  }
  selected_slide1(){this.showDivs(this.slideIndex=1);}
  selected_slide2(){this.showDivs(this.slideIndex=2);}
  selected_slide3(){this.showDivs(this.slideIndex=3);}
  selected_slide4(){this.showDivs(this.slideIndex=4);}
  showDivs(n) {
    var i;
    var x= this.shadowRoot.querySelectorAll('.mySlides');
    console.log(this.slideIndex);
    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex-1].style.display = "block";  
  }
  connectedCallback() {
    super.connectedCallback();
    this.showDivs(this.slideIndex);
  }
}

window.customElements.define('my-view1', MyView1);
//controls = 1 : video display ; controls = 0 : video not display 