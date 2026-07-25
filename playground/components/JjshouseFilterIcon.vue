<template>
  <div class="filter-demo">
    <div class="filter-card">
      <div class="filter-item">
        <span class="filter-label">?raw import</span>
        <span
          class="filter-icon"
          v-html="Icon"
        />
      </div>
      <div class="filter-item">
        <span class="filter-label">show-loading</span>
        <NuxtSvgIcon
          name="filter/strapssleeves/hover/long_sleeve"
          size="60px"
          show-loading
          @mounted="handleWhenAsyncIconMounted"
        >
          <template #loading>
            <img
              src="~/assets/images/loading/lazyload_240_240.png"
              alt="Loading"
              class="loading-img"
            >
          </template>
        </NuxtSvgIcon>
      </div>
      <div class="filter-item">
        <span class="filter-label">no loading</span>
        <NuxtSvgIcon
          name="filter/strapssleeves/selected/long_sleeve"
          size="60px"
          @mounted="handleWhenAsyncIconMounted"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/assets/icons/filter/strapssleeves/hover/long_sleeve.svg?raw'

const handleWhenAsyncIconMounted = () => {
  if (import.meta.client) {
    console.log('async svg icon mounted!!!')
  }
}
</script>

<style scoped>
.filter-demo {
  margin-bottom: 4px;
}

.filter-card {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  background: #fff;
  border-radius: 14px;
  padding: 28px 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border-left: 4px solid #667eea;
  align-items: center;
  justify-content: center;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.filter-card:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.filter-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  background: #f9fafb;
  border-radius: 10px;
  border: 1px dashed #e2e4e9;
  min-width: 100px;
}

.filter-icon {
  font-size: 60px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.filter-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #667eea;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
}

.loading-img {
  width: 100%;
  border-radius: 6px;
}
</style>
