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
        <span>{props.skills.frontend.join(", ")}</span>
    </li>
    <li>
        <strong>Backend:</strong>
        <span>{props.skills.backend.join(", ")}</span>
    </li>
    <li>
        <strong>Прочее:</strong>
        <span>{props.skills.other.join(", ")}</span>
    </li>
</ul>