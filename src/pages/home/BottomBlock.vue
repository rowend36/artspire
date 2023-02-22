<template>
  <div class="bottom-block app-padding">
    <h2>Projects Statistics 2023</h2>
    <ul class="stat-block">
      <li>Website Design <span class="stat-value">5</span></li>
      <li>Mobile App Design <span class="stat-value">2</span></li>
      <li>Branding <span class="stat-value">100</span></li>
    </ul>
  </div>
</template>
<style scoped>
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
  flex-basis: 100vw;

  padding-left: 16px;
  border-left: 16px solid #ff9900;
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
  font-size: 0.875rem;
  padding: 0.5rem 0 0.25rem;
  margin: -0.5rem 0 0.5rem;
}
</style>