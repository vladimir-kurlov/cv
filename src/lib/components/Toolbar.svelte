<script lang="ts">
    const print = () => window.print();
</script>

<div>
    <button onclick={print}>🖨</button>
</div>

<style>
    div {
      position: fixed;
      top: 120px;
      left: 50%;
      margin-left: 105mm;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px 0;

      button {
        width: 48px;
        height: 48px;
        font-size: 24px;
        padding: 8px;
        background: none;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        cursor: pointer;
      }

      @media print {
        display: none;
      }
    }
</style>