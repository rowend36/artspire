<script setup>
import MyInfo from "../../logic/info";
</script>
<template>
  <div class="bottom-block app-padding">
    <h2>Projects Statistics 2023</h2>
    <ul class="stat-block">
      <li>Website Design <span class="stat-value">{{ MyInfo.numWebsiteDesigns }}</span></li>
      <li>Mobile App Design <span class="stat-value">{{ MyInfo.numMobileAppDesigns }}</span></li>
      <li>Branding <span class="stat-value">{{ MyInfo.numBrandingProjects }}</span></li>
      <li>Arts & Illustrations <span class="stat-value">{{ MyInfo.numArtsAndIllustrations }}</span></li>
    </ul>
  </div>
</template>
<style scoped>
.bottom-block {
  background: #00072C;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  padding-bottom: 3.5rem;
}

@media (max-width: 599.99px) {
  .bottom-block {
    flex-direction: column;
  }
}

.bottom-block>h2 {
  font-family: 'Montserrat';
  font-style: normal;
  margin: 0;
  font-weight: 500;
  font-size: var(--font-xl);
  line-height: 139.4%;
  padding-right: 2rem;
  max-width: 9.5em;
}

@media (max-width: 599.99px) {
  .bottom-block>h2 {
    max-width: none;
    margin-bottom: 1rem;
  }
}

.stat-block {
  flex-grow: 1;
  flex-basis: 100vw;

  padding-left: 1rem;
  border: 0.75rem none #ff9900;
  border-left-style: solid;
}

@media (max-width: 599.99px) {
  .stat-block {
    width: 100%;
    padding-left: 0;
    padding-top: 1rem;
    border-left-style: none;
    border-top-style: solid;
    flex-basis: auto;
  }
}

.stat-value {
  float: right;
  margin-left: 1em;
}

.stat-block>li::after {
  clear: both;
  display: table;
  content: "";
}

.stat-block>li {
  border-bottom: 1px solid white;
  list-style: none;
  font-size: var(--font-xs);
  padding: 0.5rem 0 0.25rem;
  margin: -0.5rem 0 0.5rem;
}
</style>