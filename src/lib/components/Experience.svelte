<script lang="ts">
  import dayjs from "@/lib/utils/dayjs";
  import getNoun from "@/lib/utils/getNoun";

  type Props = {
    data: {
      company: string;
      location: string;
      period: string;
      position: string;
      summary: string[];
      projects: {
        name: string;
        responsibilities: string[];
      }[]
    }[];
  };

  const props: Props = $props();

  const getYearNoun = (year: number) => {
    return getNoun(year, 'год', 'года', 'лет');
  }

  const getMonthNoun = (month: number) => {
    return getNoun(month, 'месяц', 'месяца', 'месяцев');
  };

  const getExpDuration = (workPeriod: string) => {
    const [start, end] = workPeriod.split(" — ");
    const startDate = dayjs(start.toLowerCase(), "MMMM YYYY");
    const endDate = dayjs(end.toLowerCase(), "MMMM YYYY");
    let totalMonths = dayjs(endDate).diff(startDate, "months");
    totalMonths = totalMonths ? totalMonths + 1 : 0;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    if (totalMonths === 0) {
      return "";
    }
    return `(${years > 0 ? `${years} ${getYearNoun(years)} ` : ""}${months} ${getMonthNoun(months)})`;
  };
</script>

<h2>Опыт работы</h2>
{#each props.data as work}
    <h3>
        <span><strong>{work.company}</strong></span>
        <span> ({work.location})</span>
    </h3>
    <p>
        <span>📅 {work.period} {getExpDuration(work.period)}</span>
        <br>
        <span><strong>{work.position}</strong></span>
    </p>
    <p>
        <span>{work.summary[0]}</span>
        <strong>{work.summary[1]}</strong>
    </p>
    <h4><strong>Ключевые проекты:</strong></h4>
    <ul>
        {#each work.projects as project}
            <li>
                <p><strong>{project.name}:</strong></p>
                <ul>
                    {#each project.responsibilities as resp}
                        <li>{resp}</li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
    <hr>
{/each}