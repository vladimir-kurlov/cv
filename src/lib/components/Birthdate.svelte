<script lang="ts">
  import dayjs from "@/lib/utils/dayjs";

  type Props = {
    date: string;
  };

  const props: Props = $props();

  const birthdate = dayjs(props.date, "DD.MM.YYYY");
  const years = dayjs().diff(birthdate, "years");
  const birthdateFormatted = birthdate.format("DD MMMM YYYY");
</script>

<div>
    Мужчина, {years} лет ({birthdateFormatted})
</div>

<style>
</style>