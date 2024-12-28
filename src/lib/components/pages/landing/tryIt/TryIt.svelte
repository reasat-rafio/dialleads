<script lang="ts">
  import {
    formSchema,
    type ContactSuperFormType,
    type FormSchema,
  } from '$lib/formValidation';
  import { imgBuilder } from '$lib/sanity/sanity-client';
  import * as Form from '$lib/components/ui/form/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import SanityImage from '$lib/sanity/sanity-image/sanity-image.svelte';
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  interface Props {
    props: any;
    form: ContactSuperFormType;
  }

  let { props, form }: Props = $props();

  let contactForm = superForm(form, {
    validators: zodClient(formSchema), // front -end validation 🟢🟢
    onSubmit: () => {},
    onResult: ({ result }) => {
      if (result.type === 'success') {
      }
      console.log('form result', result);
    },
  });

  const { form: formData, enhance } = contactForm;
</script>

<div class="flex flex-col items-center justify-center">
  <div
    class="mb-[1.5rem] flex gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem]">
    <SanityImage
      class="h-[1.25rem] w-[1.25rem] "
      src={props?.sectionIcon}
      sizes="05vw"
      imageUrlBuilder={imgBuilder} />
    <h1>{props.sectionTitle}</h1>
  </div>

  <h2 class="mb-[3.12rem] text-[3rem] font-semibold">{props.title}</h2>
</div>
<div
  class="relative mb-[200px] h-auto w-auto flex-col overflow-hidden md:h-[21.75rem] md:w-[62.125rem]">
  <SanityImage
    class="h-auto w-auto rounded-2xl bg-cover  bg-center bg-no-repeat object-cover md:h-full md:w-full"
    src={props?.backgroundImage}
    imageUrlBuilder={imgBuilder} />
  <div
    class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col">
    <div class=" flex justify-center border border-blue-700">
      <div class="flex w-auto gap-x-[0.88rem]">
        <SanityImage
          class="h-[4.375rem] w-[4.375rem] "
          src={props?.personImage}
          sizes="05vw"
          imageUrlBuilder={imgBuilder} />
        <div>
          <h1
            class="mb-[0.62rem] text-[1.25rem] font-bold uppercase text-white">
            {props.personName}
          </h1>
          <h2
            class="w-fit rounded-[3.13rem] bg-[#8B5CF6] px-[0.62rem] text-[0.875rem] font-bold text-white">
            {props.status}
          </h2>
        </div>
      </div>
    </div>
    <div class="h-[100px] w-[500px] border border-rose-600">
      <!-- <form method="POST" use:enhance>
        <Form.Field {form} name="username">
          <Form.Control>
            {#snippet children({ props })}
              <Form.Label>Username</Form.Label>
              <Input {...props} bind:value={$formData.username} />
            {/snippet}
          </Form.Control>
          <Form.Description>This is your public display name.</Form.Description>
          <Form.FieldErrors />
        </Form.Field>
        <Form.Button>Submit</Form.Button>
      </form> -->
    </div>
  </div>
</div>
