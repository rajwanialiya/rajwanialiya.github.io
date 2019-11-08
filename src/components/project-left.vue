<template>
  <div class="view-wrap">
    <div class="view-content">
        <div class="project"> 
            <div class="image">
                <h2 class="textOverlay">Read More</h2>
                <a href="pages/flashfoodSite.html"><img src="assets/Website-Mockup.png"></a>
            </div>
            <div class="description1">
                <p class="category">Web Development & UI/UX</p>
                <h2 class="title">Flashfood.com</h2>
                <div id="description">
                <p class="blurb">As Flashfood grew to reach a wider audience, its brand evolved and features were added to the app. My task for this project was to work with the Head of Product & Design and the company's CTO to design and implement a scalable updated main website that reflected these changes.</p>
                <div class="next">
                    <a href="pages/flashfoodSite.html" class="visit"><img src="assets/casestudy.svg"></a>
                    <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="assets/globe.svg"></a>
                </div>
                </div>
                <ul class="skills">
                <slot name="skills"></slot>
                </ul>
                <div class="nextMobile">
                <a href="pages/flashfoodSite.html" class="visit"><img src="assets/casestudy.svg"></a>
                <a href="https://www.flashfood.com/" target="_blank" class="visit"><img src="assets/globe.svg"></a>
                </div>
                <!-- <div class="moreDiv"><button onclick="window.location.href='pages/flashfoodSite.html'" class="more">Read More →</button></div> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script> 
export default {
  name: 'project-left',
  data () {
    return {}
  }
}
</script>

<style>

.portfolios {
  position: relative; 
  top: 15vh; 
  padding-bottom: 10%; 
  overflow-x: hidden; 
}

.portfolio{
    margin-left: 10%; 
    justify-content: flex-end;  
    width: 80%; 
    padding: 50px; 
    padding-bottom: 0; 
    overflow-x: hidden; 
    height: 93vh; 
}

.project{
    display:flex; 
    flex-direction: row;  
}

.image{
    width: 100%; 
    z-index: 10; 
}

.image img:hover{ 
    opacity: 0.4; 
}

.image a{
    width: 100%; 
    height: 100%; 
}

.textOverlay{
    position: absolute; 
    top: 65vh; 
    left: 17%; 
    visibility: hidden;
    font-size: 2rem;  
    z-index: 20; 
}

.textOverlay2{
    position: absolute; 
    top: 158.4vh; 
    left: 72%; 
    visibility: hidden;
    font-size: 2rem; 
    z-index: 20;  
}

.textOverlay3{
    position: absolute; 
    top: 252.4vh; 
    left: 16%; 
    visibility: hidden;
    font-size: 2rem;  
    z-index: 20; 
}

.image:hover .textOverlay, .image:hover .textOverlay2, .image:hover .textOverlay3{
    visibility: visible; 
    color: white;
    z-index: 100; 
}


.description1, .description2, .description3{
    width: 60%; 
}

.image img{
    width: 100%; 
}

.category, .category2{
    margin-bottom: 5px; 
}

.blurb, .blurb2{
    z-index: 11; 
}

.category, .title, .blurb{
    text-align: right; 
}

.category2, .title2, .blurb2{
    text-align: left; 
}

.title, .title2{
    margin-top: -2%; 
}

#description{
    display: flex; 
    flex-direction: row; 
    margin-top: 30px; 
    margin-bottom: 30px;
}

.blurb{ 
    background-color: rgb(243, 247, 253);  
    opacity: 0.9; 
    color: black; 
    padding: 20px 30px; 
    position: relative;
    left: -14vh; 
    margin-bottom: 0; 
}

.blurb2{ 
    background-color: rgb(243, 247, 253);  
    opacity: 0.9; 
    color: black; 
    padding: 20px 30px;
    position: relative;
    left: 16vh; 
}

.visit{
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
    width: 4.8vh;
}

.visit img, .visit2 img{
    margin-bottom: 15px;
    width: 100%; 
}

.visit img:hover, .visit2 img:hover{
    opacity: 0.5;
}

.visit2{
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    width: 4.8vh; 
}


.next{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    margin-left: -7vw;
    height: 10%;
}

.nextMobile{
    display: none; 
}

.next2{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-right: -7vw;
    height: 10%;
}

.nextMobile2{
    display: none; 
}

.skills{
    display: flex; 
    flex-direction: row; 
    list-style-type: none;
    justify-content: flex-end; 
}

.skills2{
    display: flex; 
    flex-direction: row; 
    list-style-type: none;
    justify-content: flex-start; 
}

.skills li{
    margin-left: 10px; 
}

.skills2 li{
    margin-right: 10px; 
}

.moreDiv{
    height: 62%; 
    width: 100%; 
    display: flex; 
    justify-content: flex-end; 
}

.more, .more2{
    background-color: transparent; 
    border-color: transparent; 
    font-weight: 500;
    font-size: 20px; 
    text-align: left; 
    color: darkblue; 
}

.moreDiv2{
    height: 56%; 
    width: 100%; 
    display: flex; 
    justify-content: flex-start; 
}

.more:hover, .more2:hover{
    font-size: 22px; 
}

</style>