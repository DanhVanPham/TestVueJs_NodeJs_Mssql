<template>
  <div class="header__container">
    <div class="header__logo"><span class="logo__text">Play</span>ground</div>
    <nav class="header__navigation">
      <ul class="header__list">
        <li class="header__item">
          <router-link to="/" class="header__item__link">Hello</router-link>
        </li>
        <li class="header__item">
          <router-link to="/home" class="header__item__link">
            Products</router-link
          >
        </li>
        <li class="header__item">
          <router-link to="/create-product" class="header__item__link"
            >Create Product</router-link
          >
        </li>
        <li class="header__item">
          <router-link to="/about" class="header__item__link"
            >About</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.header__container {
  width: 80%;
  display: flex;
  /* justify-content: flex-start; */
  margin: 0 auto;
  border-bottom: 2px solid #000;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 6rem;
  align-items: stretch;
}

.header__list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: nowrap;
}

.header__navigation {
  margin-left: auto;
}

.header__logo {
  cursor: pointer;
  font-size: 2.4rem;
  padding: 4px;
  align-items: center;
}

.header__item__link {
  text-decoration: none;
  color: rgb(1, 196, 255);
  transition: color 0.5s linear;
}

.header__item__link:hover {
  color: greenyellow;
}

.logo__text {
  color: rgb(245, 245, 18);
}

.header__item {
  cursor: pointer;
  text-decoration: none;
  margin-right: 2rem;
  font-size: 1.2rem;
}
</style>