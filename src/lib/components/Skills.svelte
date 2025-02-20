<script lang="ts">
  type Props = {
    position: string;
    desired_salary: string;
    employment_type: string;
    skills: {
      frontend: string[];
      backend: string[];
      other: string[];
    }
  };

  const props: Props = $props();
</script>

<h2><strong>{props.position}</strong></h2>
<div><strong>Желаемая зарплата:</strong> {props.desired_salary}</div>
<div><strong>Формат работы:</strong> {props.employment_type}</div>
<h3>Ключевые навыки и технологии</h3>
<ul>
    <li>
        <strong>Frontend:</strong>
        {#each props.skills.frontend as item}
            <span class="tag">{item}</span>{" "}
        {/each}
    </li>
    <li>
        <strong>Backend:</strong>
        {#each props.skills.backend as item}
            <span class="tag">{item}</span>{" "}
        {/each}
    </li>
    <li>
        <strong>Прочее:</strong>
        {#each props.skills.other as item}
            <span class="tag">{item}</span>{" "}
        {/each}
    </li>
</ul>

<style>
    .tag {
      display: inline-block;
      padding: 0.15em 0.8em;
      margin: 0.2em 0 0.2em 0.2em;
      border: 2px solid rgba(255, 255, 255, 0.15);
      border-radius: 2em;
    }
</style>