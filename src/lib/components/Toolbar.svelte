<script lang="ts">
    import DarkIcon from '@/lib/icons/Dark.svelte';
    import LightIcon from '@/lib/icons/Light.svelte';

    let isDark = true;
    let themeIcon = LightIcon;
    const onChangeTheme = () => {
      isDark = !isDark;
      window.document.body.classList.toggle('dark', isDark);
      window.document.body.classList.toggle('light', !isDark);
      themeIcon = isDark ? LightIcon : DarkIcon;
    };

    const print = () => window.print();
</script>

<div class="no-print actions">
    <button onclick={print}>
        <span>🖨</span>
    </button>
    <button onclick={onChangeTheme}>
        <svelte:component this={themeIcon} />
    </button>
</div>

<style>
    .actions {
      position: fixed;
      top: 120px;
      left: 50%;
      margin-left: 105mm;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      gap: 16px 0;

      button {
        width: 48px;
        height: 48px;
        padding: 8px;
        font-size: 24px;
        line-height: 32px;
        background: none;
        color: #fafafa;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        cursor: pointer;

        :global(svg) {
          display: block;
        }
      }

      @media (max-width: 992px) {
        margin-left: 75mm;
      }
    }
</style>