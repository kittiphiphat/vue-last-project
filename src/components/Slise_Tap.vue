<template>
  <div id="myCarousel" class="carousel slide mb-7" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption text-start">
            <img src="https://media.discordapp.net/attachments/1006370035457064990/1162729065405485176/1.png?ex=653cfed3&is=652a89d3&hm=deb455da8a2241ab548030ddcfb41b460df876e6d18f411e1019d811e92d48ef&=&width=1439&height=512" alt="" srcset="" style="width:100%;height: 100%;  ">
            <h1>{{ text_title }}</h1>
            <p class="opacity-75"></p>

          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption">
            <img src="https://media.discordapp.net/attachments/1006370035457064990/1162729066680561804/2.png?ex=653cfed3&is=652a89d3&hm=78bb9aecc4632d94934d93281b0bec77b77cdc4ca2b5ed5cb4e2af2d5129d03c&=&width=1439&height=512" alt="" srcset="" style="width:100%;height: 100%; ">

          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <img src="https://media.discordapp.net/attachments/1006370035457064990/1162729071864713369/3.png?ex=653cfed5&is=652a89d5&hm=74c825b7fecded50a842b925c8d05d785a76b9a7b8b5b494d96a8ec16f50a5fe&=&width=1439&height=512" alt="" srcset="" style="width:100%;height: 100%; ">


          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <img src="https://media.discordapp.net/attachments/1006370035457064990/1162729072430940232/4.png?ex=653cfed5&is=652a89d5&hm=52424131140e0cdc0af9f9b34d2c7bd81fd10b316a859f2e59e91af5f501c555&=&width=1439&height=512" alt="" srcset="" style="width:100%;height: 100%; ">


          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <img src="https://media.discordapp.net/attachments/1006370035457064990/1162729072963629066/5.png?ex=653cfed5&is=652a89d5&hm=7403e92f3da8bf5a67089d748f14aaf4dd042f1b1a4cca025d9b19c886507ea9&=&width=1439&height=512" alt="" srcset="" style="width:100%;height: 100%; ">


          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  
</template>

<script setup>



</script>

<style>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  background-color: #276a87;
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 3rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 5;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 35rem;

}

.carousel-caption.text-start img{
  margin-top: 1rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */
.carousel-inner{
  background-color: #276a87;
}

</style>