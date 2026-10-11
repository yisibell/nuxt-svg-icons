<template>
  <section class="section props-lab">
    <div class="section-head lab-heading">
      <div>
        <div class="eyebrow">INTERACTIVE PLAYGROUND</div>
        <h2 class="section-title">Component Props</h2>
        <p class="section-sub">Tune an icon, see the result instantly, and copy the exact Nuxt component code.</p>
      </div>
      <div class="lab-badge"><span class="status-dot" /> Live preview</div>
    </div>

    <div class="lab-shell">
      <div class="preview-panel">
        <div class="panel-kicker">LIVE PREVIEW</div>
        <div class="preview-stage">
          <div class="preview-glow" />
          <NuxtSvgIcon
            :name="draft.name"
            :size="draft.useOriginalSize ? undefined : draft.size"
            :use-original-size="draft.useOriginalSize"
            :fill="draft.fill"
            :stroke="draft.stroke || undefined"
            :fill-opacity="draft.fillOpacity"
            :stroke-width="draft.strokeWidth"
            :stroke-opacity="draft.strokeOpacity"
          />
        </div>
        <div class="preview-meta">
          <div>
            <strong>{{ draft.name }}</strong>
            <span>{{ draft.useOriginalSize ? 'original dimensions' : `${draft.size}px preview` }}</span>
          </div>
          <span class="preview-chip">SVG</span>
        </div>
        <div class="preview-actions">
          <button class="button button-secondary" type="button" @click="resetDraft">Reset</button>
          <button class="button button-primary" type="button" @click="copyCode">
            <span>{{ copied ? 'Copied!' : 'Copy code' }}</span>
          </button>
        </div>
      </div>

      <div class="inspector-panel">
        <div class="panel-title-row">
          <div>
            <div class="panel-kicker">PROPS INSPECTOR</div>
            <h3>Configure your icon</h3>
          </div>
          <span class="prop-count">{{ activeTab === 'events' ? '2 demos' : 'live' }}</span>
        </div>

        <div class="tab-list" role="tablist" aria-label="Icon property groups">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-button"
            :class="{ active: activeTab === tab.id }"
            type="button"
            role="tab"
            :aria-selected="activeTab === tab.id"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <div v-if="activeTab !== 'events'" class="control-stack">
          <label class="control-row">
            <span class="control-label">Icon name</span>
            <select v-model="draft.name" class="text-control">
              <option v-for="icon in iconOptions" :key="icon" :value="icon">{{ icon }}</option>
            </select>
          </label>

          <template v-if="activeTab === 'appearance'">
            <label class="control-row">
              <span class="control-label">Fill / color</span>
              <span class="color-control">
                <input v-model="draft.fill" type="color" aria-label="Fill color">
                <input v-model="draft.fill" class="text-control color-value" type="text">
              </span>
            </label>
            <label class="control-row range-row">
              <span class="control-label">Fill opacity <output>{{ draft.fillOpacity }}</output></span>
              <input v-model="draft.fillOpacity" type="range" min="0" max="1" step=".05">
            </label>
          </template>

          <template v-if="activeTab === 'size'">
            <label class="control-row">
              <span class="control-label">Size <small>px</small></span>
              <input v-model.number="draft.size" class="text-control" type="number" min="12" max="120" step="4">
            </label>
            <div class="quick-values">
              <button v-for="size in [24, 32, 48, 64]" :key="size" type="button" :class="{ selected: draft.size === size && !draft.useOriginalSize }" @click="setSize(size)">{{ size }}</button>
            </div>
            <label class="switch-row">
              <span><strong>useOriginalSize</strong><small>Respect the SVG's intrinsic dimensions</small></span>
              <input v-model="draft.useOriginalSize" type="checkbox">
              <i class="switch" />
            </label>
          </template>

          <template v-if="activeTab === 'stroke'">
            <label class="control-row">
              <span class="control-label">Stroke</span>
              <span class="color-control">
                <input v-model="draft.stroke" type="color" aria-label="Stroke color">
                <input v-model="draft.stroke" class="text-control color-value" type="text" placeholder="none">
              </span>
            </label>
            <label class="control-row range-row">
              <span class="control-label">Stroke width <output>{{ draft.strokeWidth }}</output></span>
              <input v-model="draft.strokeWidth" type="range" min="0" max="6" step="1">
            </label>
            <label class="control-row range-row">
              <span class="control-label">Stroke opacity <output>{{ draft.strokeOpacity }}</output></span>
              <input v-model="draft.strokeOpacity" type="range" min="0" max="1" step=".05">
            </label>
          </template>
        </div>

        <div v-else class="events-demo">
          <div class="event-demo-card">
            <div class="event-icon event-icon-teal"><NuxtSvgIcon name="admin/badge" size="40" fill="#14b8a6" @mounted="onMounted('admin/badge')" /></div>
            <div><strong>@mounted</strong><span>admin/badge loaded</span></div>
            <span class="event-check">✓</span>
          </div>
          <div class="event-demo-card">
            <div class="event-icon event-icon-amber"><NuxtSvgIcon name="user/badge" size="40" fill="#f59e0b" @mounted="onMounted('user/badge')" /></div>
            <div><strong>Async loading</strong><span>SVG inserted into DOM</span></div>
            <span class="event-check">✓</span>
          </div>
          <p class="event-note">Open the browser console to see the <code>mounted</code> event output.</p>
        </div>

        <div class="code-preview">
          <div class="code-head"><span>GENERATED CODE</span><button type="button" @click="copyCode">Copy</button></div>
          <pre><code>{{ generatedCode }}</code></pre>
        </div>
      </div>
    </div>

    <div class="recipes-section">
      <div class="recipes-heading">
        <div><div class="panel-kicker">STARTING POINTS</div><h3>Common recipes</h3></div>
        <span>Click a recipe to load it into the lab</span>
      </div>
      <div class="recipe-grid">
        <button v-for="recipe in recipes" :key="recipe.title" class="recipe-card" type="button" @click="applyRecipe(recipe.draft)">
          <span class="recipe-visual" :class="recipe.tone"><NuxtSvgIcon :name="recipe.draft.name" :size="recipe.draft.size" :fill="recipe.draft.fill" :stroke="recipe.draft.stroke || undefined" :stroke-width="recipe.draft.strokeWidth" /></span>
          <span class="recipe-copy"><strong>{{ recipe.title }}</strong><small>{{ recipe.description }}</small><code>{{ recipe.code }}</code></span>
          <span class="recipe-arrow">↗</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

type TabId = 'appearance' | 'size' | 'stroke' | 'events'
type Draft = {
  name: string
  size: number
  fill: string
  fillOpacity: string
  stroke: string
  strokeWidth: string
  strokeOpacity: string
  useOriginalSize: boolean
}

const tabs: { id: TabId, label: string }[] = [
  { id: 'appearance', label: 'Appearance' },
  { id: 'size', label: 'Size' },
  { id: 'stroke', label: 'Stroke' },
  { id: 'events', label: 'Loading & events' },
]

const iconOptions = ['fire', 'css3', 'javascript', 'vue/vue-logo-filled', 'admin/badge', 'user/badge']
const initialDraft: Draft = {
  name: 'fire',
  size: 48,
  fill: '#ef4444',
  fillOpacity: '1',
  stroke: '',
  strokeWidth: '0',
  strokeOpacity: '1',
  useOriginalSize: false,
}
const draft = reactive<Draft>({ ...initialDraft })
const activeTab = ref<TabId>('appearance')
const copied = ref(false)

const generatedCode = computed(() => {
  const attrs = [`name="${draft.name}"`, `size="${draft.size}"`]
  if (draft.fill) attrs.push(`fill="${draft.fill}"`)
  if (draft.fillOpacity !== '1') attrs.push(`fill-opacity="${draft.fillOpacity}"`)
  if (draft.stroke) attrs.push(`stroke="${draft.stroke}"`)
  if (draft.strokeWidth !== '0') attrs.push(`stroke-width="${draft.strokeWidth}"`)
  if (draft.strokeOpacity !== '1') attrs.push(`stroke-opacity="${draft.strokeOpacity}"`)
  if (draft.useOriginalSize) attrs.push('use-original-size')
  return `<NuxtSvgIcon\n  ${attrs.join('\n  ')}\n/>`
})

const recipes = [
  { title: 'Brand color', description: 'A simple monochrome fill', code: 'fill="#6366f1"', tone: 'tone-indigo', draft: { ...initialDraft, name: 'css3', fill: '#6366f1', size: 48 } },
  { title: 'Size scale', description: 'Compare responsive sizes', code: 'size="64"', tone: 'tone-sky', draft: { ...initialDraft, name: 'javascript', fill: '#f59e0b', size: 64 } },
  { title: 'Outline style', description: 'Transparent fill + colored stroke', code: 'fill="transparent"', tone: 'tone-rose', draft: { ...initialDraft, name: 'admin/badge', fill: 'transparent', stroke: '#6366f1', strokeWidth: '2', size: 42 } },
  { title: 'Original dimensions', description: 'Keep the source aspect ratio', code: 'use-original-size', tone: 'tone-emerald', draft: { ...initialDraft, name: 'notused', fill: '#10b981', useOriginalSize: true } },
]

function setSize(size: number) {
  draft.size = size
  draft.useOriginalSize = false
}

function resetDraft() {
  Object.assign(draft, initialDraft)
  activeTab.value = 'appearance'
}

function applyRecipe(recipe: Partial<Draft>) {
  Object.assign(draft, recipe)
  activeTab.value = recipe.stroke ? 'stroke' : recipe.useOriginalSize ? 'size' : 'appearance'
}

async function copyCode() {
  if (import.meta.client && navigator.clipboard) {
    await navigator.clipboard.writeText(generatedCode.value)
    copied.value = true
    window.setTimeout(() => copied.value = false, 1600)
  }
}

function onMounted(name: string) {
  if (import.meta.client) console.log(`[nuxt-svg-icons] ✅ icon "${name}" mounted!`)
}
</script>

<style scoped>
.lab-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; }
.eyebrow, .panel-kicker { color: #6366f1; font-size: .68rem; font-weight: 800; letter-spacing: .14em; }
.eyebrow { margin-bottom: 8px; }
.lab-badge { display: flex; align-items: center; gap: 8px; padding: 8px 12px; color: #475569; background: #fff; border: 1px solid #e2e8f0; border-radius: 999px; font-size: .75rem; font-weight: 700; white-space: nowrap; }
.status-dot { width: 7px; height: 7px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 0 4px #dcfce7; }
.lab-shell { display: grid; grid-template-columns: minmax(280px, .85fr) minmax(420px, 1.15fr); overflow: hidden; background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; box-shadow: 0 14px 35px rgba(15, 23, 42, .06); }
.preview-panel { display: flex; flex-direction: column; padding: 28px; background: linear-gradient(145deg, #111827, #1e293b); color: #fff; }
.preview-panel .panel-kicker { color: #a5b4fc; }
.preview-stage { position: relative; display: grid; place-items: center; min-height: 280px; margin: 18px 0; overflow: hidden; border: 1px solid rgba(255,255,255,.1); border-radius: 14px; background-color: #172033; background-image: linear-gradient(45deg, rgba(255,255,255,.035) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,.035) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,.035) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,.035) 75%); background-size: 28px 28px; background-position: 0 0, 0 14px, 14px -14px, -14px 0; }
.preview-glow { position: absolute; width: 150px; height: 150px; border-radius: 50%; background: #6366f1; opacity: .2; filter: blur(42px); }
.preview-stage :deep(.nuxt-svg-icon) { position: relative; z-index: 1; filter: drop-shadow(0 10px 18px rgba(0,0,0,.25)); }
.preview-meta { display: flex; justify-content: space-between; align-items: center; }
.preview-meta strong, .preview-meta span { display: block; }
.preview-meta strong { font-size: 1rem; }
.preview-meta span { margin-top: 3px; color: #94a3b8; font: .72rem 'SF Mono', monospace; }
.preview-chip { padding: 4px 7px; color: #c7d2fe !important; background: rgba(99,102,241,.2); border: 1px solid rgba(165,180,252,.2); border-radius: 5px; font-size: .65rem !important; }
.preview-actions { display: flex; gap: 10px; margin-top: 24px; }
.button { flex: 1; padding: 10px 14px; border: 0; border-radius: 8px; font-size: .78rem; font-weight: 750; cursor: pointer; transition: transform .2s, background .2s; }
.button:hover { transform: translateY(-1px); }
.button-secondary { color: #cbd5e1; background: rgba(255,255,255,.08); }
.button-secondary:hover { background: rgba(255,255,255,.14); }
.button-primary { color: #fff; background: #6366f1; }
.button-primary:hover { background: #4f46e5; }
.inspector-panel { padding: 28px; }
.panel-title-row, .recipes-heading { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; }
.panel-title-row h3, .recipes-heading h3 { margin: 5px 0 0; color: #0f172a; font-size: 1.08rem; letter-spacing: -.02em; }
.prop-count { padding: 4px 8px; color: #6366f1; background: #eef2ff; border-radius: 5px; font: .65rem 'SF Mono', monospace; }
.tab-list { display: flex; gap: 4px; margin: 22px 0 20px; padding: 4px; background: #f1f5f9; border-radius: 8px; }
.tab-button { flex: 1; padding: 8px 5px; color: #64748b; background: transparent; border: 0; border-radius: 6px; font-size: .7rem; font-weight: 700; cursor: pointer; }
.tab-button.active { color: #4338ca; background: #fff; box-shadow: 0 1px 4px rgba(15,23,42,.1); }
.control-stack { min-height: 228px; }
.control-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 14px; }
.control-label { color: #334155; font-size: .78rem; font-weight: 700; }
.control-label small { color: #94a3b8; font-weight: 500; }
.text-control { width: 176px; padding: 9px 10px; color: #334155; background: #f8fafc; border: 1px solid #dbe3ed; border-radius: 7px; outline: none; font: .76rem 'SF Mono', monospace; }
.text-control:focus { border-color: #818cf8; box-shadow: 0 0 0 3px #eef2ff; }
.color-control { display: flex; align-items: center; gap: 7px; }
.color-control input[type='color'] { width: 32px; height: 32px; padding: 3px; border: 1px solid #dbe3ed; border-radius: 7px; background: #fff; cursor: pointer; }
.color-value { width: 137px; }
.range-row { display: block; }
.range-row .control-label { display: flex; justify-content: space-between; margin-bottom: 8px; }
.range-row output { color: #6366f1; font: .72rem 'SF Mono', monospace; }
input[type='range'] { width: 100%; accent-color: #6366f1; cursor: pointer; }
.quick-values { display: flex; gap: 6px; margin: -3px 0 18px 92px; }
.quick-values button { padding: 5px 10px; color: #64748b; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 5px; font: .68rem 'SF Mono', monospace; cursor: pointer; }
.quick-values button.selected { color: #4338ca; background: #eef2ff; border-color: #a5b4fc; }
.switch-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 14px; border-top: 1px solid #eef2f7; cursor: pointer; }
.switch-row span { display: grid; gap: 3px; }
.switch-row strong { color: #334155; font-size: .78rem; }
.switch-row small { color: #94a3b8; font-size: .68rem; }
.switch-row input { position: absolute; opacity: 0; }
.switch { position: relative; width: 36px; height: 20px; background: #cbd5e1; border-radius: 20px; transition: background .2s; }
.switch::after { position: absolute; top: 3px; left: 3px; width: 14px; height: 14px; background: #fff; border-radius: 50%; content: ''; transition: transform .2s; }
.switch-row input:checked + .switch { background: #6366f1; }
.switch-row input:checked + .switch::after { transform: translateX(16px); }
.code-preview { margin-top: 20px; overflow: hidden; background: #111827; border-radius: 9px; }
.code-head { display: flex; justify-content: space-between; padding: 9px 12px; color: #94a3b8; border-bottom: 1px solid #273449; font-size: .62rem; font-weight: 800; letter-spacing: .1em; }
.code-head button { color: #a5b4fc; background: transparent; border: 0; font-size: .68rem; cursor: pointer; }
.code-preview pre { min-height: 82px; margin: 0; padding: 12px; color: #c7d2fe; font: .7rem/1.55 'SF Mono', monospace; white-space: pre-wrap; }
.events-demo { min-height: 228px; }
.event-demo-card { display: flex; align-items: center; gap: 12px; padding: 10px; margin-bottom: 9px; border: 1px solid #e2e8f0; border-radius: 9px; }
.event-icon { display: grid; place-items: center; width: 54px; height: 54px; border-radius: 8px; }
.event-icon-teal { background: #ecfeff; } .event-icon-amber { background: #fffbeb; }
.event-demo-card div:nth-child(2) { display: grid; gap: 3px; flex: 1; }
.event-demo-card strong { color: #334155; font-size: .76rem; } .event-demo-card span { color: #94a3b8; font-size: .68rem; }
.event-check { color: #10b981 !important; font-size: 1rem !important; }
.event-note { color: #64748b; font-size: .72rem; } .event-note code { padding: 2px 4px; color: #4338ca; background: #eef2ff; border-radius: 3px; font-family: monospace; }
.recipes-section { margin-top: 28px; }
.recipes-heading { align-items: flex-end; margin-bottom: 14px; }
.recipes-heading > span { color: #94a3b8; font-size: .72rem; }
.recipe-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.recipe-card { position: relative; display: flex; align-items: center; gap: 12px; min-width: 0; overflow: hidden; padding: 14px; text-align: left; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; cursor: pointer; transition: border-color .2s, transform .2s, box-shadow .2s; }
.recipe-card:hover { border-color: #a5b4fc; box-shadow: 0 8px 20px rgba(99,102,241,.1); transform: translateY(-2px); }
.recipe-visual { display: grid; flex: 0 0 56px; place-items: center; width: 56px; height: 56px; overflow: hidden; border-radius: 10px; }
.recipe-visual :deep(.nuxt-svg-icon) { display: grid; place-items: center; width: 100%; height: 100%; overflow: hidden; }
.recipe-visual :deep(svg) { display: block; width: auto !important; max-width: 100%; height: auto !important; max-height: 100%; }
.tone-indigo { background: #eef2ff; } .tone-sky { background: #f0f9ff; } .tone-rose { background: #fff1f2; } .tone-emerald { background: #ecfdf5; }
.recipe-copy { display: grid; min-width: 0; gap: 3px; }
.recipe-copy strong { overflow: hidden; color: #334155; font-size: .76rem; text-overflow: ellipsis; white-space: nowrap; }
.recipe-copy small { overflow: hidden; color: #94a3b8; font-size: .65rem; text-overflow: ellipsis; white-space: nowrap; }
.recipe-copy code { overflow: hidden; color: #6366f1; font: .62rem 'SF Mono', monospace; text-overflow: ellipsis; white-space: nowrap; }
.recipe-arrow { position: absolute; top: 10px; right: 10px; color: #cbd5e1; font-size: .9rem; }
@media (max-width: 900px) { .lab-shell { grid-template-columns: 1fr; } .recipe-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .lab-heading, .recipes-heading { display: block; } .lab-badge, .recipes-heading > span { display: inline-flex; margin-top: 14px; } .inspector-panel, .preview-panel { padding: 20px; } .recipe-grid { grid-template-columns: 1fr; } .tab-button { font-size: .63rem; } }
</style>
