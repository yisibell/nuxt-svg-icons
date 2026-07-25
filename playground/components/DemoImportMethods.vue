<template>
  <section class="section">
    <div class="section-head">
      <h2 class="section-title">📦 Import Methods</h2>
      <p class="section-sub">Three ways to consume SVGs beyond <code>&lt;NuxtSvgIcon&gt;</code> — all powered by <strong>vite-plugin-svg4vue</strong>.</p>
    </div>

    <div class="import-grid">
      <!-- ?component -->
      <div class="import-card">
        <div class="import-badge">?component</div>
        <p class="import-desc">Import an SVG as a <strong>Vue component</strong>. Accepts <code>fill</code>, <code>font-size</code>, <code>fill-opacity</code> as attributes.</p>
        <div class="import-preview">
          <FireIcon fill="#ef4444" fill-opacity=".6" font-size="48" />
          <VueLogo fill="#22c55e" font-size="36" />
          <VueLogoFilled font-size="44" />
        </div>
        <pre class="import-snippet"><code>import FooIcon from '~/assets/icons/foo.svg?component'
// use as: &lt;FooIcon fill="red" font-size="36" /&gt;</code></pre>
      </div>

      <!-- ?raw -->
      <div class="import-card">
        <div class="import-badge">?raw</div>
        <p class="import-desc">Import the raw SVG markup as a <strong>string</strong>. Render with <code>v-html</code> for full control.</p>
        <div class="import-preview">
          <span class="raw-demo" v-html="rawSvg" />
        </div>
        <pre class="import-snippet"><code>import rawStr from '~/assets/icons/foo.svg?raw'
// use as: &lt;span v-html="rawStr" /&gt;</code></pre>
      </div>

      <!-- ?url -->
      <div class="import-card">
        <div class="import-badge">?url</div>
        <p class="import-desc">Import the SVG as a <strong>public URL</strong>. Works with <code>&lt;img&gt;</code> tags, CSS backgrounds, etc.</p>
        <div class="import-preview">
          <img :src="svgUrl" alt="nodejs" class="url-demo-img">
        </div>
        <pre class="import-snippet"><code>import svgUrl from '~/assets/icons/foo.svg?url'
// use as: &lt;img :src="svgUrl" /&gt;</code></pre>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FireIcon from '~/assets/icons/fire.svg?component'
import VueLogo from '~/assets/icons/vue/vue-logo.svg?component'
import VueLogoFilled from '~/assets/icons/vue/vue-logo-filled.svg?component'
import rawSvg from '~/assets/icons/nodejs.svg?raw'
import svgUrl from '~/assets/icons/nodejs.svg?url'
</script>

<style scoped>
.import-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 18px;
}

.import-card {
  background: #fff;
  border-radius: 14px;
  padding: 22px 24px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e8ecf1;
}

.import-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  letter-spacing: 0.03em;
  background: #eef2ff;
  color: #4338ca;
  margin-bottom: 10px;
}

.import-desc {
  font-size: 0.88rem;
  color: #475569;
  margin-bottom: 14px;
}

.import-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px dashed #d4d8dd;
  margin-bottom: 14px;
  min-height: 60px;
}

.import-snippet {
  background: #1e293b;
  color: #e2e8f0;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.78rem;
  overflow-x: auto;
  line-height: 1.65;
}

.import-snippet code {
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
}

.raw-demo {
  font-size: 48px;
  display: inline-flex;
  color: #16a34a;
}

.url-demo-img {
  width: 52px;
  height: 52px;
}
</style>
