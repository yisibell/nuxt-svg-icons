<template>
  <section class="section">
    <div class="section-head">
      <h2 class="section-title">🚀 Quick Start</h2>
      <p class="section-sub">Just drop SVGs into <code>assets/icons/</code> and use them anywhere.</p>
    </div>
    <div class="quickstart-grid">
      <div class="qs-card">
        <div class="qs-code"><code>&lt;NuxtSvgIcon name="fire" size="64" fill="#ef4444" /&gt;</code></div>
        <div class="qs-preview">
          <NuxtSvgIcon name="fire" size="64" fill="#ef4444" />
        </div>
      </div>
      <div class="qs-card">
        <div class="qs-code"><code>&lt;NuxtSvgIcon name="javascript" :font-size="56" /&gt;</code></div>
        <div class="qs-preview">
          <NuxtSvgIcon name="javascript" :font-size="56" />
        </div>
      </div>
      <div class="qs-card">
        <div class="qs-code"><code>&lt;NuxtSvgIcon name="vue/vue-logo-filled" :size="48" /&gt;</code></div>
        <div class="qs-preview">
          <NuxtSvgIcon name="vue/vue-logo-filled" :size="48" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quickstart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 18px;
}

.qs-card {
  display: flex;
  align-items: center;
  gap: 18px;
  background: #fff;
  border-radius: 14px;
  padding: 18px 22px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e8ecf1;
}

.qs-code {
  flex: 1;
  min-width: 0;
}

.qs-code code {
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.82rem;
  color: #334155;
  word-break: break-all;
}

.qs-preview {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px dashed #d4d8dd;
}
</style>
