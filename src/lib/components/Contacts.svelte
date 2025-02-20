<script lang="ts">
  import Contact from "@/lib/components/Contact.svelte";
  import Birthdate from "@/lib/components/Birthdate.svelte";

  type Props = {
    name: string;
    birthdate: string;
    location: string;
    contacts: {
      email: string;
      phone: string;
      github: string;
      telegram: string;
    };
  };

  const props: Props = $props();

  const getLinkLabel = (link: string) => {
    return link.split("/").pop();
  };

  const parsePhone = (phone: string) => {
    return phone.replace(/\D/g, "");
  };
</script>

<h1>{props.name}</h1>
<p>
    <Birthdate date={props.birthdate} />
    <Contact text="📍 {props.location}" />
    <Contact text="📧 {props.contacts.email}" link="mailto:{props.contacts.email}" />
    <Contact text="📞 {props.contacts.phone}" link="tel:{parsePhone(props.contacts.phone)}" />
    <Contact label="GitHub" text="💼 {getLinkLabel(props.contacts.github)}" link={props.contacts.github} />
    <Contact label="Telegram" text="💬 {getLinkLabel(props.contacts.telegram)}" link={props.contacts.telegram} />
</p>

<style>
    h1 {
      margin-bottom: 1rem;
    }
</style>