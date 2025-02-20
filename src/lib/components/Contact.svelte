<script lang="ts">
    type Props = {
      text: string;
      label?: string;
      link?: string
    };

    const props: Props = $props();
</script>

<div>
    {#if props.label}
        <span>{props.label}: </span>
    {/if}
    {#if props.link}
        <a href="{props.link}">
            <span>{props.text}</span>
        </a>
    {:else}
        <span>{props.text}</span>
    {/if}
</div>
