<template>
  <header class="hero">
    <div class="hero-badge">v3.x</div>
    <h1 class="hero-title">Nuxt SVG Icons</h1>
    <p class="hero-desc">
      A zero-config Nuxt module for effortless SVG icon management. Lazy-loading,
      runtime color/size control, <code>?component</code> / <code>?raw</code> /
      <code>?url</code> imports — all powered by
      <strong>vite-plugin-svg4vue</strong> + <strong>SVGO</strong>.
    </p>
    <div class="hero-actions">
      <span class="hero-kv">
        <span class="kv-label">auto-imported</span>
        <code>&lt;NuxtSvgIcon&gt;</code>
      </span>
      <span class="hero-kv">
        <span class="kv-label">icons</span>
        <strong>{{ iconCount }}</strong>
      </span>
      <span class="hero-kv">
        <span class="kv-label">lazy</span>
        on-demand
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ iconCount: number }>()
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 56px 32px 48px;
  margin-bottom: 48px;
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%);
  border-radius: 24px;
  color: #fff;
  box-shadow: 0 12px 48px rgba(67, 56, 202, 0.35);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 20% 50%, rgba(129, 140, 248, 0.3), transparent),
    radial-gradient(ellipse 60% 60% at 80% 30%, rgba(167, 139, 250, 0.2), transparent);
  pointer-events: none;
}

.hero > * {
  position: relative;
}

.hero-badge {
  display: inline-block;
  padding: 4px 14px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
  backdrop-filter: blur(4px);
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  line-height: 1.15;
}

.hero-desc {
  font-size: 1.05rem;
  opacity: 0.82;
  max-width: 680px;
  margin: 0 auto 28px;
  line-height: 1.65;
}

.hero-desc code {
  background: rgba(255, 255, 255, 0.13);
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 0.92em;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.hero-kv {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  font-size: 0.88rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
}

.hero-kv code {
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.85em;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
}

.hero-kv strong {
  font-size: 1.2em;
}

.kv-label {
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  opacity: 0.55;
}
</style>
