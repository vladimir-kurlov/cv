<script lang="ts">
  type Props = {
    data: {
      year: number;
      institution: string;
      specialization: string;
    }[];
  };

  const props: Props = $props();
</script>

<h2><strong>Образование</strong></h2>
<ul>
    {#each props.data as edu}
        <li>
            <p>
                <span>
                    <strong>{edu.year}</strong>
                    <span> — {edu.institution}</span>
                </span>
                <br>
                <span>
                    <em>{edu.specialization}</em>
                </span>
            </p>
        </li>
    {/each}
</ul>