<script setup>
  import {
    ref
  } from "vue";
  import HomeData from "./home_data.json";
  import BottomBlock from "./BottomBlock.vue";
  import useBreakpoints from "../../utils/useBreakpoints";
  const {
    isMobile,
    isTablet,
    isDesktop,
    isWideScreen
  } = useBreakpoints();
  console.log(useBreakpoints());
</script>
<template>
  <div :class="['fullpage', { 'flex-column': isMobile || isTablet }]">
    <div class="root">
      <div class="intro">
        <div class="intro-top app-padding">
          <div v-if='isWideScreen' style="flex-grow:0.5"></div>
          <h1>Hi! I Am <span class="highlight">UI/UX</span><br />{{HomeData.name}}</h1>
          <p class="profile-description">{{HomeData.description}}</p>
          <div v-if='isWideScreen' style="flex-grow:0.5"></div>
          <div>
            <app-button>Hire Me</app-button>
            <app-button variant="flat">Projects<img class="app-button-icon" src="../../assets/arrow_outward.svg" onerror="this.src='../../assets/arrow_outward.png'"></app-button>
          </div>
          <div class="img-section" v-if="isMobile">
            <img src="@/assets/profile.png" class="logo-image" />
          </div>
          <div style="flex-grow:1"></div>
          <div class='contact-section'>
            <h2>Contact</h2>
            <p>{{HomeData.email}} | {{HomeData.phoneNumber}}</p>
          </div>
        </div>
        <BottomBlock v-if="isDesktop" />

      </div>
      <div class="img-section full-width" v-if="isWideScreen">
        <img class="logo-image" src="@/assets/profile.png" />
      </div>
    </div>
    <div v-if="isMobile || isTablet" style="flex-grow:1"></div>
    <BottomBlock v-if="isMobile || isTablet" />
  </div>
</template>
<style scoped>
  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .root {
    display: flex;
  }

  .app-button-icon {
    margin: 0 0.5em;
    vertical-align: baseline;
    width: 0.75em;
    height: 0.75em;
  }

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 152.9%;
    /* or 98px */
  }


  h2 {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 173.4%;
    margin: 0;
    margin-top: 1.5rem;
    /* identical to box height, or 50px */
  }

  h2+p,
  h1+p {
    margin-top: 0;
  }

  .intro {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 50%;
    max-width: 100%;
  }

  .img-section {
    width: auto;
    max-width: 45%;
    min-width: 35%;
    position: relative;
    background: #00072C;
  }

  .intro-top>.img-section {
    width: 100vw;
    max-width: 100vw;
    margin-left: -32px;
    margin-top: 32px;
  }

  .img-section::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #FF000033;

  }

  .logo-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 0%;
    display: block;
  }



  .intro-top {
    flex-grow: 1;
    padding-bottom: 0;
    padding-top: 0;
    display: flex;
    flex-direction: column;
  }

  .highlight {
    display: inline-block;
    vertical-align: middle;
    padding: 0.25em 1em;
    background: #3D5CFA;
    border-radius: 55.36px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: normal;
    color: #FFFFFF;
    position: relative;
    top: -0.125em;

  }

  .profile-description {
    font-size: 0.95rem;
    line-height: 173.4%;
    /* or 42px */
  }
  
  .contact-section {
    margin: 32px 0;
  }
  .contact-section>h2{
    margin-top: 0;
  }
  .contact-section>p{
    margin-bottom: 0;
  }
</style>
