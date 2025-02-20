<script lang="ts">
  import data from "@/data.json";
  import Contacts from "@/lib/components/Contacts.svelte";
  import Skills from "@/lib/components/Skills.svelte";
  import Experience from "@/lib/components/Experience.svelte";
  import Education from "@/lib/components/Education.svelte";
  import OtherSkills from "@/lib/components/OtherSkills.svelte";
</script>

<div>
    <Contacts
        name={data.name}
        birthdate={data.birthdate}
        location={data.location}
        contacts={data.contacts}
    />
    <hr>
    <Skills
        position={data.position}
        desired_salary={data.desired_salary}
        employment_type={data.employment_type}
        skills={data.skills}
    />
    <hr>
    <Experience data={data.work_experience} />
    <Education data={data.education} />
    <hr>
    <OtherSkills languages={data.additional_info.languages} />
</div>

<style>
    div {
      max-width: 210mm;
      margin: 20px auto;
      padding: 20mm;
      box-sizing: border-box;
    }
</style>