<template>
  <footer class="footer">
    <p>
      <NuxtSvgIcon name="css3" :font-size="14" />
      nuxt-svg-icons playground ·
      <a href="https://github.com" target="_blank">GitHub</a>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 28px 0 0;
  color: #94a3b8;
  font-size: 0.86rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 16px;
}

.footer a {
  color: #6366f1;
  text-decoration: none;
  font-weight: 550;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
