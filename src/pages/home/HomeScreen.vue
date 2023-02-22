<template>
  <div class="root">
    <div class="intro">
      <div class="intro-top app-padding">

        <div style="flex-grow:0.5"></div>
        <h1>Hi! I Am <span class="highlight">UI/UX</span><br />Johnson Ogbonna</h1>
        <p class="profile-description">Nigeria based UX designer with passion for creating
          enjoyable user centered products. Currently working
          as a freelancer.</p>

        <div style="flex-grow:0.5"></div>
        <div>
          <app-button>Hire Me</app-button>
          <app-button variant="flat">Projects<img class="app-button-icon" src="../../assets/arrow_outward.svg"
              onerror="this.src='../../assets/arrow_outward.png'"></app-button>
        </div>
        <div style="flex-grow:1"></div>
        <h2>Contact</h2>
        <p>artspire@gmail.com | +234 906 1697 773</p>
      </div>
      <div class="bottom-block app-padding">
        <h2>Projects Statistics 2023</h2>
        <ul class="stat-block">
          <li>Website Design <span class="stat-value">5</span></li>
          <li>Mobile App Design <span class="stat-value">2</span></li>
          <li>Branding <span class="stat-value">100</span></li>
        </ul>
      </div>
    </div>
    <div class="img-section">

      <img src="@/assets/profile.png" class="logo-image" />

    </div>
  </div>
</template>
<style scoped>
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
}

.img-section {
  width: auto;
  max-width: 50%;
  min-width: 35%;
  position: relative;
  background: #00072C;
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

.bottom-block {
  background: #00072C;
  color: #FFFFFF;
  display: flex;
  align-items: center;
}

.bottom-block>h2 {
  font-family: 'Montserrat';
  font-style: normal;
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 139.4%;
  padding-right: 32px;
  max-width: 9.5em;
  /* or 45px */
}

.stat-block {
  flex-grow: 1;
  flex-basis: 55%;
  border-left: 16px solid #ff9900;
}

.stat-value {
  float: right;
}

.stat-block>li {
  border-bottom: 1px solid white;
  list-style: none;
  font-size: 0.875rem;
  padding: 0.5rem 0 0.25rem;
  margin: -0.5rem 0 0.5rem;
}
</style>