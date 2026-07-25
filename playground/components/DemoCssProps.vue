<template>
  <section class="section">
    <div class="section-head">
      <h2 class="section-title">🎨 CSS Custom Properties</h2>
      <p class="section-sub"><code>vite-plugin-svg4vue</code> injects these into every SVG, giving you pixel-perfect control.</p>
    </div>
    <div class="cssprops-grid">
      <div class="cssprop-card">
        <div class="cssprop-name"><code>--svg-origin-width</code> / <code>--svg-origin-height</code></div>
        <div class="cssprop-desc">The SVG's original dimensions (unitless). Use with CSS <code>calc()</code>.</div>
        <div class="cssprop-demo">
          <FireIcon
            fill="#ef4444"
            fill-opacity=".7"
            style="width: var(--svg-origin-width); height: var(--svg-origin-height);"
          />
          <span class="cssprop-tag">width: var(--svg-origin-width)<br>height: var(--svg-origin-height)</span>
        </div>
      </div>
      <div class="cssprop-card">
        <div class="cssprop-name"><code>--svg-icon-fill</code> / <code>--svg-icon-stroke</code> / …</div>
        <div class="cssprop-desc">The <code>&lt;NuxtSvgIcon&gt;</code> component sets these from its props. You can override them with your own CSS.</div>
        <div class="cssprop-demo">
          <span
            class="nuxt-svg-icon custom-size custom-color custom-fill-opacity"
            style="--svg-icon-font-size:48px;--svg-icon-fill:#8b5cf6;--svg-icon-fill-opacity:.5;"
          />
          <span class="cssprop-tag">style="<br>  --svg-icon-fill: #8b5cf6;<br>  --svg-icon-fill-opacity: .5;<br>  --svg-icon-font-size: 48px;"</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FireIcon from '~/assets/icons/fire.svg?component'
</script>

<style scoped>
.cssprops-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 18px;
}

.cssprop-card {
  background: #fff;
  border-radius: 14px;
  padding: 22px 24px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e8ecf1;
}

.cssprop-name {
  font-weight: 700;
  font-size: 0.92rem;
  margin-bottom: 4px;
}

.cssprop-name code {
  background: #f1f5f9;
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 0.88em;
}

.cssprop-desc {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 14px;
}

.cssprop-demo {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px dashed #d4d8dd;
}

.cssprop-tag {
  font-size: 0.72rem;
  color: #64748b;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  line-height: 1.45;
}
</style>
