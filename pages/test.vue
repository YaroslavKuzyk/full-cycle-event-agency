<template>
  <div class="page page-test">
    <div class="page-test__content">
      <h1 class="page-test__title">Test Page</h1>
      <p class="page-test__description">
        This is a test page to demonstrate page transitions.
      </p>
      <NuxtLink class="page-test__link" to="/">
        <span class="page-test__link-text">Back to Home</span>
        <span class="page-test__link-arrow">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-test {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;

  &__content {
    text-align: center;
    max-width: 600px;
  }

  &__title {
    font-size: 64px;
    font-weight: 700;
    line-height: 110%;
    text-transform: uppercase;
    margin-bottom: 24px;
    color: var(--dark-color);
  }

  &__description {
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
    color: var(--primary-color);
    margin-bottom: 40px;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: var(--dark-color);
    padding: 16px 32px;
    border: 1px solid var(--dark-color);
    border-radius: 40px;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--dark-color);
      color: var(--secondary-color);

      .page-test__link-arrow {
        transform: translateX(4px);
      }
    }
  }

  &__link-arrow {
    transition: transform 0.3s ease;
  }
}
</style>
