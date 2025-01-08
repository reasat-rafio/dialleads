<script lang="ts">
  import { formSchema, type FormSchema } from '$lib/formValidation';
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
  import type { TestCallProps } from '../../../../../types/landing.types';
  import * as Select from '$lib/components/ui/select/index.js';

  interface Props {
    props: TestCallProps;
    form: SuperValidated<Infer<FormSchema>>;
  }

  let { props, form }: Props = $props();

  const testCallForm = superForm(form, {
    validators: zodClient(formSchema),
  });

  const { form: formData, enhance } = testCallForm;

  const fruits = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
  ];

  const countryCodeToFlag: {
    [key: string]: string;
  } = {
    us: '🇺🇸', // United States
    ca: '🇨🇦', // Canada
    bd: '🇧🇩', // Bangladesh
  };

  const countryCodeToPhoneNum: {
    [key: string]: string;
  } = {
    us: '+12', // United States
    ca: '+1', // Canada
    bd: '+88', // Bangladesh
  };

  let value = $state('');

  const triggerContent = $derived(
    fruits.find((f) => f.value === value)?.label ?? '🍁',
  );

  const countries = [
    { code: 'us', flag: '🇺🇸', dialCode: '+1', label: 'United States' },
    { code: 'ca', flag: '🇨🇦', dialCode: '+1', label: 'Canada' },
    { code: 'bd', flag: '🇧🇩', dialCode: '+880', label: 'Bangladesh' },
  ];

  let selectedCountry = $state('us');

  // On each country change, prepend dial code if not present
  $effect(() => {
    const dialCode =
      countries.find((c) => c.code === selectedCountry)?.dialCode || '';
    if (dialCode && !$formData.phoneNumber.startsWith(dialCode)) {
      // strip out old code if user changed countries
      $formData.phoneNumber =
        dialCode + $formData.phoneNumber.replace(/^\+\d*/, '');
    }
  });
</script>

<div class="flex flex-col items-center justify-center">
  <div
    class="mb-[0.75rem] flex gap-x-[0.5rem] rounded-full border px-[1.52rem] py-[0.52rem] lg:mb-[1.5rem]">
    <SanityImage
      class="h-[1.25rem] w-[1.25rem] "
      src={props?.sectionIcon}
      sizes="05vw"
      imageUrlBuilder={imgBuilder} />
    <h1 class="text-[1rem] font-normal text-[#495568]">{props.sectionTitle}</h1>
  </div>

  <h2
    class="mb-[1.38rem] text-[1.625rem] font-semibold text-black lg:text-[3rem]">
    {props.title}
  </h2>
</div>

<div class="relative">
  <div
    class="
    
     mx-[1.25rem] rounded-[1.875rem]
   
  bg-footer-gradient
 
 md:mx-auto lg:-top-[9rem]
 lg:bg-footer-gradient lg:pb-0
 xl:w-fit
 ">
    <!-- pb-[3.12rem]
 pt-[3.12rem] -->

    <!-- bg-violet-900 bg-gradient-to-t from-violet-500
  to-violet-800 -->
    <!-- w-[20rem] -->
    <!-- pl-[6.44rem] pr-[6.38rem] -->
    <!-- absolute
    -top-[14rem] -translate-x-1/2 left-1/2 -->

    <div
      class=" z-50 flex h-full w-full flex-col items-center justify-center py-[1.13rem] md:py-[3.13rem]">
      <div class="z-50 flex h-full flex-col justify-center py-0">
        <div
          class="z-50 flex w-auto justify-center gap-x-[1.12rem] md:gap-x-[0.88rem]">
          <div class="w-[3.875rem]">
            <SanityImage
              class="z-50 h-full w-full  md:h-[4.375rem] md:w-[4.375rem] "
              src={props?.personImage}
              sizes="60vw"
              imageUrlBuilder={imgBuilder} />
          </div>
          <div class="">
            <h1
              class=" z-50 mb-[0.62rem] text-[1rem] font-bold uppercase text-white md:text-[1.25rem]">
              {props.personName}
            </h1>
            <h2
              class="z-50 w-fit rounded-[3.13rem] bg-[#8B5CF6] px-[0.62rem] text-[0.75rem] font-bold text-white md:text-[0.875rem]">
              {props.status}
            </h2>
          </div>
        </div>
        <div class="mt-[1.5rem] h-full w-full md:mt-[2rem]">
          <form
            class=" flex flex-col items-center justify-center gap-y-[0.75rem] md:gap-y-[1.88rem]"
            method="POST"
            use:enhance>
            <div
              class=" mx-[1.78rem] grid grid-cols-1 justify-center gap-x-[1.25rem] gap-y-[0.75rem] md:grid-cols-3 lg:mx-[3.75rem]">
              <div class="col-span-1">
                <Form.Field form={testCallForm} name="name">
                  <Form.Control>
                    {#snippet children({ props })}
                      <div class="relative">
                        <Input
                          {...props}
                          bind:value={$formData.name}
                          placeholder="Your name"
                          class=" min-h-[3.5rem] max-w-[17.375rem] rounded-[0.75rem] pl-8 text-[1.25rem] md:min-h-[3.75rem] " />
                        <div class="absolute bottom-5 left-2">
                          <svg
                            class="size-[1.125rem] md:size-[1.375rem]"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="user 1">
                              <path
                                id="Vector"
                                d="M10.8419 10.5975C12.2978 10.5975 13.5583 10.0753 14.5885 9.04507C15.6185 8.015 16.1408 6.75464 16.1408 5.29857C16.1408 3.84301 15.6186 2.58248 14.5884 1.55208C13.5581 0.52217 12.2976 0 10.8419 0C9.38581 0 8.12545 0.52217 7.09538 1.55224C6.06531 2.58232 5.54297 3.84284 5.54297 5.29857C5.54297 6.75464 6.06531 8.01517 7.09538 9.04524C8.12579 10.0751 9.38631 10.5975 10.8419 10.5975ZM8.00712 2.46382C8.79751 1.67343 9.72469 1.28923 10.8419 1.28923C11.9589 1.28923 12.8862 1.67343 13.6768 2.46382C14.4672 3.25437 14.8516 4.18172 14.8516 5.29857C14.8516 6.41576 14.4672 7.34294 13.6768 8.1335C12.8862 8.92406 11.9589 9.30826 10.8419 9.30826C9.72503 9.30826 8.79785 8.92389 8.00712 8.1335C7.21656 7.34311 6.8322 6.41576 6.8322 5.29857C6.8322 4.18172 7.21656 3.25437 8.00712 2.46382Z"
                                fill="#495568" />
                              <path
                                id="Vector_2"
                                d="M20.1149 16.9169C20.0852 16.4882 20.0251 16.0206 19.9366 15.5268C19.8473 15.0293 19.7324 14.559 19.5947 14.1291C19.4524 13.6848 19.2592 13.2461 19.02 12.8256C18.7721 12.3892 18.4807 12.0092 18.1538 11.6965C17.8119 11.3694 17.3932 11.1064 16.9092 10.9145C16.4268 10.7237 15.8922 10.627 15.3203 10.627C15.0958 10.627 14.8786 10.7191 14.4591 10.9922C14.201 11.1606 13.899 11.3553 13.562 11.5706C13.2738 11.7543 12.8834 11.9263 12.4012 12.0821C11.9307 12.2343 11.453 12.3115 10.9814 12.3115C10.51 12.3115 10.0323 12.2343 9.56154 12.0821C9.07982 11.9265 8.68924 11.7544 8.40155 11.5708C8.06771 11.3575 7.76558 11.1628 7.50357 10.9921C7.08446 10.719 6.86727 10.6268 6.64269 10.6268C6.07067 10.6268 5.53625 10.7237 5.05402 10.9147C4.57029 11.1062 4.15152 11.3692 3.80928 11.6967C3.48231 12.0095 3.19093 12.3894 2.94319 12.8256C2.70434 13.2461 2.51098 13.6847 2.36865 14.1293C2.23119 14.5591 2.11621 15.0293 2.02692 15.5268C1.93829 16.0199 1.87837 16.4877 1.84866 16.9174C1.81946 17.3375 1.80469 17.7747 1.80469 18.2165C1.80469 19.3649 2.16975 20.2946 2.88965 20.9803C3.60064 21.6569 4.54125 21.9999 5.68546 21.9999H16.2786C17.4225 21.9999 18.3631 21.6569 19.0742 20.9803C19.7943 20.2951 20.1594 19.3651 20.1594 18.2163C20.1592 17.7731 20.1443 17.3358 20.1149 16.9169ZM18.1853 20.0462C17.7155 20.4933 17.0918 20.7107 16.2784 20.7107H5.68546C4.87191 20.7107 4.24819 20.4933 3.77856 20.0464C3.31782 19.6078 3.09392 19.0091 3.09392 18.2165C3.09392 17.8043 3.10751 17.3972 3.1347 17.0065C3.16122 16.6231 3.21544 16.202 3.29583 15.7545C3.37523 15.3126 3.47627 14.8978 3.59645 14.5224C3.71176 14.1623 3.86903 13.8058 4.06407 13.4624C4.25021 13.1351 4.46438 12.8543 4.70071 12.6281C4.92176 12.4164 5.20039 12.2432 5.52869 12.1133C5.83233 11.9931 6.17356 11.9273 6.544 11.9174C6.58915 11.9414 6.66955 11.9872 6.79979 12.0722C7.06482 12.2449 7.3703 12.4419 7.70801 12.6576C8.08869 12.9003 8.57913 13.1195 9.16509 13.3087C9.76413 13.5024 10.3751 13.6007 10.9815 13.6007C11.5879 13.6007 12.1991 13.5024 12.7978 13.3088C13.3842 13.1193 13.8745 12.9003 14.2557 12.6573C14.6013 12.4364 14.8982 12.245 15.1632 12.0722C15.2935 11.9874 15.3739 11.9414 15.419 11.9174C15.7896 11.9273 16.1309 11.9931 16.4347 12.1133C16.7628 12.2432 17.0414 12.4166 17.2625 12.6281C17.4988 12.8542 17.713 13.135 17.8991 13.4626C18.0943 13.8058 18.2518 14.1625 18.3669 14.5222C18.4873 14.8982 18.5885 15.3128 18.6677 15.7544C18.7479 16.2027 18.8023 16.624 18.8288 17.0067V17.007C18.8562 17.3962 18.87 17.8031 18.8701 18.2165C18.87 19.0092 18.6461 19.6078 18.1853 20.0462Z"
                                fill="#495568" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    {/snippet}
                  </Form.Control>
                </Form.Field>
              </div>
              <div class="col-span-1">
                <Form.Field form={testCallForm} name="email">
                  <Form.Control>
                    {#snippet children({ props })}
                      <div class="relative">
                        <Input
                          {...props}
                          bind:value={$formData.email}
                          placeholder="Your email"
                          class=" min-h-[3.5rem] max-w-[17.375rem] rounded-[0.75rem] pl-9 text-[1.25rem] md:min-h-[3.75rem]" />

                        <div class="absolute bottom-5 left-2">
                          <svg
                            class="size-[1.125rem] md:size-[1.5rem]"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="email 1">
                              <g id="Group">
                                <path
                                  id="Vector"
                                  d="M19.349 9.41256L19.3865 9.37506L19.4615 9.30006C19.5365 9.22506 19.6115 9.15006 19.724 9.07506C19.799 9.00006 19.874 8.92506 19.949 8.85006L20.549 8.28756C20.699 8.13756 20.774 7.91256 20.699 7.68756C20.6615 7.61256 20.624 7.53756 20.5865 7.46256C20.399 7.27506 20.099 7.23756 19.874 7.35006C19.8365 7.38756 19.799 7.38756 19.7615 7.42506L19.274 7.87506C17.774 9.22506 16.3115 10.5376 14.8115 11.8876C14.474 12.1876 14.1365 12.4876 13.799 12.7876C13.274 13.2376 12.6365 13.4626 11.999 13.4626C11.3615 13.4626 10.7615 13.2751 10.199 12.7876C9.86145 12.4876 9.52395 12.1876 9.18645 11.8876C7.68645 10.5376 6.22395 9.22506 4.72395 7.87506L4.23645 7.42506C4.19895 7.38756 4.16145 7.38756 4.12395 7.35006C3.89895 7.20006 3.59895 7.27506 3.41145 7.46256C3.33645 7.53756 3.29895 7.61256 3.29895 7.68756C3.22395 7.87506 3.29895 8.13756 3.44895 8.28756L4.04895 8.85006L4.27395 9.07506C4.34895 9.15006 4.42395 9.22506 4.53645 9.30006L4.61145 9.37506L4.64895 9.41256C5.36145 10.0876 6.11145 10.7251 6.82395 11.3626C7.08645 11.5876 7.34895 11.8501 7.64895 12.1126C7.61145 12.1501 7.57395 12.1876 7.53645 12.2251C6.37395 13.3876 5.21145 14.5126 4.04895 15.6751C4.01145 15.7126 3.93645 15.7876 3.89895 15.8251C3.74895 16.0126 3.74895 16.2751 3.86145 16.4626C4.01145 16.6501 4.23645 16.7626 4.46145 16.6501C4.57395 16.6126 4.68645 16.5376 4.76145 16.4251C5.92395 15.3001 7.08645 14.1376 8.24895 13.0126C8.32395 12.9376 8.36145 12.9001 8.43645 12.8251C8.77395 13.1251 9.07395 13.3876 9.37395 13.6501C9.97395 14.2126 10.724 14.5501 11.549 14.6251C11.699 14.6251 11.849 14.6626 11.999 14.6626C12.149 14.6626 12.299 14.6626 12.449 14.6251C13.274 14.5501 13.9865 14.1751 14.624 13.6501C14.924 13.3876 15.224 13.0876 15.5615 12.8251C15.6365 12.9001 15.7115 12.9376 15.749 13.0126C16.9115 14.1376 18.074 15.3001 19.2365 16.4251C19.3115 16.5001 19.424 16.6126 19.5365 16.6501C19.7615 16.7251 19.9865 16.6501 20.1365 16.4626C20.2865 16.2751 20.249 16.0126 20.099 15.8251C20.0615 15.7876 19.9865 15.7126 19.949 15.6751C18.7865 14.5126 17.624 13.3876 16.4615 12.2251C16.424 12.1876 16.3865 12.1501 16.349 12.1126C16.6115 11.8501 16.874 11.6251 17.174 11.3626C17.8865 10.7251 18.6365 10.0876 19.349 9.41256Z"
                                  fill="#495568" />
                                <path
                                  id="Vector_2"
                                  d="M20.1727 20.5502H3.82266C1.94766 20.5502 0.410156 19.0127 0.410156 17.1377V6.86269C0.410156 4.98769 1.94766 3.4502 3.82266 3.4502H20.2102C22.0852 3.4502 23.6227 4.98769 23.6227 6.86269V17.1377C23.5852 19.0127 22.0852 20.5502 20.1727 20.5502ZM3.82266 4.7252C2.62266 4.7252 1.68516 5.7002 1.68516 6.86269V17.1377C1.68516 18.3377 2.66016 19.2752 3.82266 19.2752H20.2102C21.4102 19.2752 22.3477 18.3002 22.3477 17.1377V6.86269C22.3477 5.66269 21.3727 4.7252 20.2102 4.7252H3.82266Z"
                                  fill="#495568" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    {/snippet}
                  </Form.Control>
                </Form.Field>
              </div>
              <div class="col-span-1">
                <div
                  class="relative h-full min-h-[3.5rem] w-full md:min-h-[3.75rem]">
                  <!-- min-h-[3.5rem] h-full md:min-h-[3.75rem] -->
                  <div
                    class=" flex h-full w-full items-center gap-x-2
                   ">
                    <div
                      class="flex h-full w-full min-w-[5.37rem] items-center gap-x-2 rounded-[0.75rem] bg-white px-2 sm:min-w-[15.37rem] md:min-w-[13.37rem] lg:min-w-[17.37rem]
                  ">
                      <svg
                        class="size-[1.125rem] md:size-[1.5rem]"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="phone 1">
                          <g id="Icon">
                            <path
                              id="Vector"
                              d="M17.6794 14.5197C17.2495 13.9313 16.6036 13.5377 15.8836 13.4252C15.1636 13.3127 14.4284 13.4905 13.8394 13.9197L12.7094 14.7397C11.084 13.269 9.7801 11.4782 8.87942 9.47972L9.99942 8.65972C10.59 8.22946 10.9859 7.58254 11.1003 6.86082C11.2146 6.1391 11.0381 5.40149 10.6094 4.80972L9.44942 3.19972C9.24012 2.90566 8.97378 2.65672 8.66626 2.46774C8.35874 2.27876 8.01633 2.1536 7.65942 2.09972C6.95436 1.99573 6.23657 2.17159 5.65942 2.58972L3.87942 3.84972C3.31399 4.2578 2.87391 4.81582 2.60885 5.46079C2.34379 6.10576 2.26433 6.81198 2.37942 7.49972C2.88752 10.4609 4.0723 13.2648 5.84148 15.6931C7.61067 18.1214 9.91651 20.1085 12.5794 21.4997C13.1147 21.7747 13.7076 21.9187 14.3094 21.9197C15.101 21.9219 15.8723 21.6695 16.5094 21.1997L18.2494 19.9997C18.8394 19.5713 19.2351 18.9261 19.3494 18.206C19.4638 17.4859 19.2876 16.7499 18.8594 16.1597L17.6794 14.5197ZM17.3694 18.7697L15.6294 19.9997C15.2911 20.245 14.8915 20.3916 14.4749 20.4234C14.0583 20.4551 13.641 20.3708 13.2694 20.1797C10.8022 18.8884 8.66828 17.0422 7.03545 14.7865C5.40263 12.5307 4.31544 9.92684 3.85942 7.17972C3.78989 6.76706 3.83735 6.34316 3.99642 5.95609C4.15549 5.56902 4.41981 5.23425 4.75942 4.98972L6.48942 3.79972C6.7061 3.64664 6.96415 3.56295 7.22942 3.55972H7.41942C7.58232 3.58489 7.73863 3.64202 7.87936 3.72783C8.02009 3.81364 8.14246 3.92643 8.23942 4.05972L9.41942 5.69972C9.61204 5.96793 9.6907 6.30146 9.63824 6.62746C9.58578 6.95347 9.40646 7.24548 9.13942 7.43972L7.51942 8.61972C7.38433 8.71883 7.28631 8.86032 7.241 9.02163C7.19569 9.18293 7.20569 9.35477 7.26942 9.50972C8.32778 12.1312 10.0138 14.4525 12.1794 16.2697C12.3103 16.3736 12.4724 16.4301 12.6394 16.4301C12.8065 16.4301 12.9686 16.3736 13.0994 16.2697L14.7194 15.0997C14.8526 15.0028 15.0035 14.9331 15.1637 14.8947C15.3238 14.8563 15.49 14.85 15.6526 14.876C15.8152 14.902 15.9711 14.9599 16.1113 15.0463C16.2515 15.1328 16.3732 15.2461 16.4694 15.3797L17.6394 16.9997C17.7387 17.1334 17.8105 17.2854 17.8507 17.4469C17.8909 17.6085 17.8986 17.7764 17.8735 17.941C17.8484 18.1056 17.7909 18.2636 17.7044 18.4058C17.6179 18.5481 17.504 18.6717 17.3694 18.7697ZM13.0894 5.90972C13.1223 5.81235 13.1752 5.7229 13.2446 5.64708C13.3139 5.57125 13.3984 5.51071 13.4924 5.46932C13.5865 5.42792 13.6882 5.40658 13.791 5.40665C13.8938 5.40672 13.9954 5.4282 14.0894 5.46972C15.2292 5.8912 16.218 6.64193 16.9302 7.62656C17.6424 8.61119 18.0459 9.78529 18.0894 10.9997C18.0948 11.197 18.0223 11.3884 17.8875 11.5326C17.7528 11.6767 17.5666 11.7619 17.3694 11.7697C17.1756 11.7699 16.9892 11.695 16.8494 11.5608C16.7096 11.4265 16.6272 11.2434 16.6194 11.0497C16.5875 10.1347 16.2857 9.24963 15.7519 8.50582C15.218 7.76202 14.4761 7.19277 13.6194 6.86972C13.5197 6.84463 13.4262 6.79929 13.3447 6.73653C13.2632 6.67376 13.1955 6.59492 13.1458 6.50488C13.0961 6.41485 13.0655 6.31555 13.0558 6.21317C13.0461 6.11078 13.0575 6.00749 13.0894 5.90972ZM21.6694 10.8097C21.6862 11.0083 21.6243 11.2054 21.4971 11.3588C21.37 11.5122 21.1876 11.6095 20.9894 11.6297H20.9194C20.7327 11.6283 20.553 11.5582 20.4147 11.4328C20.2764 11.3074 20.1891 11.1354 20.1694 10.9497C20.0245 9.33129 19.4441 7.78229 18.4898 6.4671C17.5356 5.15191 16.243 4.1196 14.7494 3.47972C14.5664 3.40148 14.422 3.25375 14.3479 3.06903C14.2738 2.88431 14.2762 2.67772 14.3544 2.49472C14.4327 2.31172 14.5804 2.1673 14.7651 2.09322C14.9498 2.01915 15.1564 2.02148 15.3394 2.09972C17.0857 2.84035 18.5974 4.0423 19.7126 5.57671C20.8277 7.11112 21.5042 8.92012 21.6694 10.8097Z"
                              fill="#495568" />
                          </g>
                        </g>
                      </svg>
                      <Select.Root
                        type="single"
                        name="country"
                        bind:value={selectedCountry}>
                        <Select.Trigger class="w-[40px] text-xl">
                          {#if selectedCountry}
                            {countries.find((c) => c.code === selectedCountry)
                              ?.flag}
                          {:else}
                            🌐
                          {/if}
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Group>
                            <Select.GroupHeading>Countries</Select.GroupHeading>
                            {#each countries as c}
                              <Select.Item value={c.code} label={c.label}>
                                {c.flag}
                                {c.label}
                              </Select.Item>
                            {/each}
                          </Select.Group>
                        </Select.Content>
                      </Select.Root>

                      <input
                        {...props}
                        bind:value={$formData.phoneNumber}
                        placeholder="Phone number"
                        class=" max-w-[150px] rounded-md border-input bg-background px-3 py-[0.2rem] text-[1.25rem] text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium
                      placeholder:text-muted-foreground
                      focus-visible:outline-none md:max-w-[150px] lg:max-w-[150px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Form.Button
              class=" min-h-[3.5rem] min-w-[17rem]   rounded-[0.75rem]  bg-[#8B5CF6]  md:min-h-[3.75rem] md:px-[4.25rem]">
              Call me now
            </Form.Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
