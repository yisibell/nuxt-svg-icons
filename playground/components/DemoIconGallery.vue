<template>
  <section class="section">
    <div class="section-head">
      <h2 class="section-title">🗂️ Icon Gallery</h2>
      <p class="section-sub">
        All <strong>{{ allIconNames.length }}</strong> icons in <code>assets/icons/</code> — hover to see the name, click to copy it.
      </p>
    </div>

    <!-- Search + Tab filter -->
    <div class="gallery-toolbar">
      <input
        v-model="searchQuery"
        type="text"
        class="gallery-search"
        placeholder="Search icons… (e.g. 'fire', 'badge', 'v_neck')"
      >
      <div class="gallery-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="['gallery-tab', { active: activeTab === tab.key }]"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
          <span class="tab-count">{{ tab.count }}</span>
        </button>
      </div>
    </div>

    <!-- Icons -->
    <div v-if="filteredIcons.length === 0" class="gallery-empty">
      <p>No icons match <code>"{{ searchQuery }}"</code></p>
    </div>
    <div v-else class="gallery-grid">
      <button
        v-for="icon in filteredIcons"
        :key="icon"
        class="gallery-item"
        :title="`${icon} — click to copy`"
        @click="copy(icon)"
      >
        <span class="gallery-icon">
          <NuxtSvgIcon :name="icon" size="50px" />
        </span>
        <span class="gallery-name">{{ displayName(icon) }}</span>
      </button>
    </div>

    <!-- Toast -->
    <div v-if="copiedName" class="gallery-toast">
      Copied <code>{{ copiedName }}</code>!
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  allIconNames: string[]
}>()

// ── Tabs ──────────────────────────────────────────────────────
function groupKey(name: string): string {
  const slash = name.indexOf('/')
  return slash === -1 ? 'root' : name.slice(0, slash)
}

const tabs = computed(() => {
  const groups: Record<string, number> = {}
  for (const n of props.allIconNames) {
    const k = groupKey(n)
    groups[k] = (groups[k] || 0) + 1
  }
  const list = [{ key: 'all', label: 'All', count: props.allIconNames.length }]
  const sorted = Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]))
  for (const [key, count] of sorted) {
    list.push({ key, label: key, count })
  }
  return list
})

// ── Search + filter ───────────────────────────────────────────
const searchQuery = ref('')
const activeTab = ref('all')
const copiedName = ref('')

const filteredIcons = computed(() => {
  let list = props.allIconNames
  if (activeTab.value !== 'all') {
    const prefix = activeTab.value + '/'
    list = list.filter((n) => n === activeTab.value || n.startsWith(prefix))
  }
  const q = searchQuery.value.trim().toLowerCase()
  if (q) {
    list = list.filter((n) => n.toLowerCase().includes(q))
  }
  return list
})

function displayName(full: string): string {
  const last = full.lastIndexOf('/')
  return last === -1 ? full : full.slice(last + 1)
}

async function copy(name: string) {
  copiedName.value = name
  try { await navigator.clipboard.writeText(name) } catch { /* ignore */ }
  setTimeout(() => { copiedName.value = '' }, 2000)
}
</script>

<style scoped>
.gallery-toolbar {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
  position: sticky;
  top: 12px;
  z-index: 10;
  background: #f8fafc;
  padding: 14px 0 10px;
}

.gallery-search {
  width: 100%;
  max-width: 420px;
  padding: 10px 16px;
  border: 1px solid #d4d8dd;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  background: #fff;
  color: #0f172a;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.gallery-search::placeholder {
  color: #94a3b8;
}

.gallery-search:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}

.gallery-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.gallery-tab {
  padding: 5px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 99px;
  background: #fff;
  color: #475569;
  font-size: 0.8rem;
  font-weight: 550;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;
  white-space: nowrap;
}

.gallery-tab:hover {
  border-color: #c7d2fe;
  color: #4338ca;
}

.gallery-tab.active {
  background: #4338ca;
  color: #fff;
  border-color: #4338ca;
}

.tab-count {
  margin-left: 4px;
  font-size: 0.7rem;
  opacity: 0.65;
  font-weight: 500;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 8px;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 14px 8px 10px;
  background: #fff;
  border: 1px solid #e8ecf1;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;
  color: inherit;
  min-height: 64px;
}

.gallery-item:hover {
  border-color: #a5b4fc;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.1);
  transform: translateY(-1px);
}

.gallery-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.gallery-name {
  font-size: 0.66rem;
  color: #94a3b8;
  text-align: center;
  line-height: 1.25;
  word-break: break-word;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
}

.gallery-item:hover .gallery-name {
  color: #475569;
}

.gallery-empty {
  text-align: center;
  padding: 48px 24px;
  color: #94a3b8;
  font-size: 0.95rem;
}

.gallery-empty code {
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 3px;
}

.gallery-toast {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  color: #e2e8f0;
  padding: 10px 22px;
  border-radius: 99px;
  font-size: 0.85rem;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
  z-index: 100;
  animation: toast-in 0.25s ease;
}

.gallery-toast code {
  background: rgba(255, 255, 255, 0.12);
  padding: 2px 6px;
  border-radius: 3px;
}

@keyframes toast-in {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}
</style>
