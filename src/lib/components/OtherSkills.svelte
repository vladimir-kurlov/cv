<script lang="ts">
  type Props = {
    languages: {
      name: string;
      level: string;
    }[];
  };

  const props: Props = $props();
</script>

<h2><strong>Дополнительно</strong></h2>
<ul>
    <li>
        <p><strong>Языки:</strong></p>
        <ul>
            {#each props.languages as language}
                <li>{language.name} — {language.level}</li>
            {/each}
        </ul>
    </li>
</ul>