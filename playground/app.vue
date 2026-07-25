<template>
  <div class="demo-app">
    <DemoHero :icon-count="iconCount" />
    <DemoQuickStart />
    <DemoProps />
    <DemoImportMethods />
    <DemoCssProps />
    <DemoIconGallery :all-icon-names="allIconNames" />
    <DemoFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// ── Shared icon discovery ──────────────────────────────────────
const iconModules = import.meta.glob('./assets/icons/**/*.svg', { query: '?raw' })

const allIconNames = computed<string[]>(() =>
  Object.keys(iconModules)
    .map((p) => p.replace('./assets/icons/', '').replace('.svg', ''))
    .sort(),
)

const iconCount = computed(() => allIconNames.value.length)
</script>

<style>
/* ═══════════════════════════════════════════════════════════════
   RESET & BASE
   ═══════════════════════════════════════════════════════════════ */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #f8fafc;
  color: #0f172a;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.demo-app {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 24px 72px;
}

/* ═══════════════════════════════════════════════════════════════
   SHARED SECTION STYLES
   ═══════════════════════════════════════════════════════════════ */
.section {
  margin-bottom: 52px;
}

.section-head {
  margin-bottom: 24px;
}

.section-title {
  font-size: 1.45rem;
  font-weight: 750;
  color: #0f172a;
  margin-bottom: 4px;
  letter-spacing: -0.02em;
}

.section-sub {
  color: #475569;
  font-size: 0.95rem;
}

.section-sub code {
  background: #e2e8f0;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>
