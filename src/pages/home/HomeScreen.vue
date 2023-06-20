<script setup>
import HomeData from "./home_data.json";
import ProjectStatistics from "./ProjectStatistics.vue";
import useBreakpoints from "../../utils/useBreakpoints";
import HomeModal from "./HomeModal.vue";
const { isMobile, isTablet, isDesktop, isWideScreen } = useBreakpoints();
</script>

<template>
  <!-- Contains the image and text on first row and footer on second row -->
  <div class="fullpage">
    <!-- Contains the text/contact section on one side and image on the other. -->
    <div :class="['horizontal', { 'flex': 'isWideScreen' }]">
      <!-- Contains the text and image with contact section below.-->
      <div class="intro">
        <div class="intro-top app-padding">
          <spacer-view :size=0.5 :min=1 />
          <h1>
            Hi! I Am <span class="highlight grotesk">UI/UX</span><br />
            {{ HomeData.name }}
          </h1>
          <p class="profile-description">{{ HomeData.description }}</p>
          <spacer-view :size=0.5 :min=2 />
          <div class="home-buttons">
            <RouterLink to="/hire_me">
              <app-button>Hire Me</app-button>
            </RouterLink>
            <RouterLink to="/projects">
              <app-button variant="flat">Projects
                <img class="app-button-icon" src="../../assets/arrow_outward.svg"
                  onerror="this.src='../../assets/arrow_outward.png'" />
              </app-button>
            </RouterLink>
          </div>
          <div class="img-section" v-if="isMobile" style="margin-top: 2rem">
            <img src="@/assets/profile.png" class="profile-img" />
          </div>
          <spacer-view :size=1 />
          <div class="contact-section">
            <h2>Contact</h2>
            <p :style="{ textAlign: isMobile ? 'center' : '' }">{{ HomeData.email }} | {{ HomeData.phoneNumber }}</p>
          </div>
        </div>
        <ProjectStatistics v-if="isDesktop" />
      </div>
      <div class="img-section full-width" v-if="isWideScreen">
        <img class="profile-img" src="@/assets/profile.png" />
      </div>
    </div>
    <div v-if="isMobile || isTablet" style="flex-grow: 1"></div>
    <ProjectStatistics v-if="isMobile || isTablet" />
    <HomeModal />
  </div>
</template>
<style scoped>
.horizontal {
  min-height: 100%;
}

.app-button-icon {
  margin: 0 0.5em;
  vertical-align: baseline;
  width: 0.75em;
  height: 0.75em;
}

@media (max-width: 599.99px) {
  .home-buttons {
    display: flex;
    justify-content: space-around;
  }
}

h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: var(--font-3xl);
  line-height: 152.9%;
}

h2 {
  font-weight: 600;
  font-size: var(--font-xl);
  line-height: 173.4%;
  margin: 0;
  margin-top: 1.5em;
}

h2+p,
h1+p {
  margin-top: 0;
}

.intro {
  display: flex;
  flex-direction: column;
  min-height: 50%;
  max-width: 100%;
}

.img-section {
  width: auto;
  max-width: 45%;
  min-width: 35%;
  position: relative;
  background: #00072c;
}

.intro-top>.img-section {
  min-width: 100vw;
  /* max-width: 100vw; */
  margin-left: calc(50% - 50vw);
  margin-top: 2rem;
}

.img-section::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #ff000033;
}

.profile-img {
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


.profile-description {
  font-size: var(--font-sm);
  line-height: 173.4%;
}

.contact-section {
  margin: 2rem 0;
}

.contact-section>h2 {
  margin-top: 0;
}

.contact-section>p {
  margin-bottom: 0;
}
</style>
