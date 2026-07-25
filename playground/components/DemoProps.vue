<template>
  <section class="section">
    <div class="section-head">
      <h2 class="section-title">🎛️ Component Props</h2>
      <p class="section-sub">Every prop <code>&lt;NuxtSvgIcon&gt;</code> accepts, demonstrated in isolation.</p>
    </div>

    <div class="props-grid">
      <!-- size / fontSize -->
      <div class="prop-card accent-sky">
        <div class="prop-label">size / fontSize</div>
        <div class="prop-desc">Control icon dimensions. <code>size</code> is an alias of <code>fontSize</code>.</div>
        <div class="prop-row">
          <div class="prop-item">
            <NuxtSvgIcon name="css3" size="28" />
            <span>size=28</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="css3" size="40" />
            <span>size=40</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="css3" :font-size="52" />
            <span>fontSize=52</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="css3" size="3rem" />
            <span>size="3rem"</span>
          </div>
        </div>
      </div>

      <!-- fill / color -->
      <div class="prop-card accent-rose">
        <div class="prop-label">fill / color</div>
        <div class="prop-desc">Override the icon's fill colour. <code>color</code> is an alias of <code>fill</code>.</div>
        <div class="prop-row">
          <div class="prop-item">
            <NuxtSvgIcon name="notused" fill="#ef4444" size="36" />
            <span>fill="#ef4444"</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="notused" fill="#22c55e" size="36" />
            <span>fill="#22c55e"</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="notused" color="#3b82f6" size="36" />
            <span>color="#3b82f6"</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="notused" color="#a855f7" size="36" />
            <span>color="#a855f7"</span>
          </div>
        </div>
      </div>

      <!-- fillOpacity / strokeOpacity -->
      <div class="prop-card accent-amber">
        <div class="prop-label">fillOpacity / strokeOpacity</div>
        <div class="prop-desc">Control transparency independently of colour.</div>
        <div class="prop-row">
          <div class="prop-item">
            <NuxtSvgIcon name="fire" fill="#ef4444" fill-opacity="1" size="36" />
            <span>opacity=1</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="fire" fill="#ef4444" fill-opacity=".7" size="36" />
            <span>fillOpacity=.7</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="fire" fill="#ef4444" fill-opacity=".35" size="36" />
            <span>fillOpacity=.35</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="fire" fill="#ef4444" fill-opacity=".1" size="36" />
            <span>fillOpacity=.1</span>
          </div>
        </div>
      </div>

      <!-- stroke / strokeWidth / strokeOpacity -->
      <div class="prop-card accent-indigo">
        <div class="prop-label">stroke / strokeWidth / strokeOpacity</div>
        <div class="prop-desc">Add and control outlines on any icon.</div>
        <div class="prop-row">
          <div class="prop-item">
            <NuxtSvgIcon name="line" use-original-size fill="transparent" stroke="#ef4444" stroke-width="1" />
            <span>strokeWidth=1</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="line" use-original-size fill="transparent" stroke="#3b82f6" stroke-width="3" />
            <span>strokeWidth=3</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="line" use-original-size fill="#a855f7" stroke="#7c3aed" stroke-width="2" fill-opacity=".4" />
            <span>stroke+fill</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="line" use-original-size fill="transparent" stroke="#f59e0b" stroke-width="2" stroke-opacity=".4" />
            <span>strokeOpacity=.4</span>
          </div>
        </div>
      </div>

      <!-- useOriginalSize -->
      <div class="prop-card accent-emerald">
        <div class="prop-label">useOriginalSize</div>
        <div class="prop-desc">Respect the SVG's intrinsic dimensions — perfect for mixed-size icon sets.</div>
        <div class="prop-row">
          <div class="prop-item">
            <NuxtSvgIcon name="line" use-original-size fill="#6366f1" />
            <span>original</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="line" size="48" fill="#6366f1" />
            <span>size=48</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="notused" use-original-size fill="#6366f1" />
            <span>original</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon name="notused" size="48" fill="#6366f1" />
            <span>size=48</span>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div class="prop-card accent-violet">
        <div class="prop-label">showLoading + loadingClass + #loading slot</div>
        <div class="prop-desc">Show a placeholder while the icon is fetched asynchronously. Prevents layout shift.</div>
        <div class="prop-row">
          <div class="prop-item wide">
            <JjshouseFilterIcon />
            <span>?raw vs show-loading vs default</span>
          </div>
        </div>
      </div>

      <!-- @mounted event -->
      <div class="prop-card accent-teal">
        <div class="prop-label">@mounted event</div>
        <div class="prop-desc">Emits after the SVG has loaded and been inserted into the DOM. Check your console!</div>
        <div class="prop-row">
          <div class="prop-item">
            <NuxtSvgIcon
              name="admin/badge"
              size="40"
              fill="#14b8a6"
              @mounted="() => onMounted('admin/badge')"
            />
            <span>admin/badge</span>
          </div>
          <div class="prop-item">
            <NuxtSvgIcon
              name="user/badge"
              size="40"
              fill="#f59e0b"
              @mounted="() => onMounted('user/badge')"
            />
            <span>user/badge</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function onMounted(name: string) {
  if (import.meta.client) {
    console.log(`[nuxt-svg-icons] ✅ icon "${name}" mounted!`)
  }
}
</script>

<style scoped>
.props-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}

.prop-card {
  background: #fff;
  border-radius: 14px;
  padding: 22px 24px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  border-left: 4px solid;
  border-top: 1px solid #e8ecf1;
  border-right: 1px solid #e8ecf1;
  border-bottom: 1px solid #e8ecf1;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.prop-card:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.09);
  transform: translateY(-2px);
}

.prop-label {
  font-size: 0.8rem;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.prop-desc {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 14px;
}

.prop-desc code {
  background: #f1f5f9;
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 0.9em;
}

.prop-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
}

.prop-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px dashed #e2e4e9;
  min-width: 72px;
}

.prop-item.wide {
  min-width: 100%;
  border: none;
  background: transparent;
  padding: 0;
}

.prop-item span {
  font-size: 0.72rem;
  color: #64748b;
  text-align: center;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  line-height: 1.35;
}

/* accent colours */
.accent-sky     { border-left-color: #0ea5e9; } .accent-sky     .prop-label { color: #0284c7; }
.accent-rose    { border-left-color: #f43f5e; } .accent-rose    .prop-label { color: #e11d48; }
.accent-amber   { border-left-color: #f59e0b; } .accent-amber   .prop-label { color: #d97706; }
.accent-indigo  { border-left-color: #6366f1; } .accent-indigo  .prop-label { color: #4f46e5; }
.accent-emerald { border-left-color: #10b981; } .accent-emerald .prop-label { color: #059669; }
.accent-violet  { border-left-color: #8b5cf6; } .accent-violet  .prop-label { color: #7c3aed; }
.accent-teal    { border-left-color: #14b8a6; } .accent-teal    .prop-label { color: #0d9488; }
</style>
