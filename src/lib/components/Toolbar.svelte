<script lang="ts">
    const print = () => window.print();
</script>

<div class="no-print">
    <button onclick={print}>🖨</button>
</div>

<style>
    div {
      position: fixed;
      top: 120px;
      left: 50%;
      margin-left: 105mm;
      display: flex;
      flex-direction: column;
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
      }

      @media (max-width: 992px) {
        margin-left: 75mm;
      }
    }
</style>