import React,{useState} from "react";


export default function About() {
    const[btstate, setBtState]=useState('Dark Mode');
    const[mystyle, setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
  });
  const changeMyStyle=()=>
  {
      if(mystyle.backgroundColor=='white')
      {
        setMyStyle({color:'green',backgroundColor:'black'});
        setBtState('Dark Mode');
      }
      else{
        setMyStyle({color:'black',backgroundColor:'white'});}
        setBtState('Light Mode');
  }
  
return (
    <div className="about_container">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              lowercase
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                Lowercase letters are the shorter, smaller versions of letters
                (like w), as opposed to the bigger, taller versions (like W),
                which are called uppercase letters or capital letters. The
                adjective lowercase can also be used as a noun meaning the same
                thing as lowercase letter, though this is much less commonly
                used.
              </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              UPPERCASE
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              CLEAR
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third feature.</strong>Uppercase means the
              same thing as capital in capital letter—the bigger, taller version
              of a letter (like W), as opposed to the smaller version, which is
              called a lowercase letter (like w). Uppercase letters can also be
              called capitals.
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="button_style" onClick={changeMyStyle}>
        {btstate}
      </button>
    </div>
  );
}
