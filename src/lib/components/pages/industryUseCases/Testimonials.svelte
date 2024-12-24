<script>
  let data = $props();
  let data2 = [
    {
      review: `
        I’ve used Synthflow extensively since first engaging with voice AI tech about three months ago. I like their platform and how easy it is to set a voice agent and get it working. I was able to create an inbound agent that answers calls at a law firm, sets appointments, and live-transfers calls upon request. There is inline integration with Zapier so you can build zaps directly within the Synthflow ecosystem, which is convenient.
      `,
      reviewerImage:
        'https://synthflow.ai/wp-content/w3-webp/uploads/2024/09/Mike-Margol.jpegw3.webp',
      name: 'Mike Margol',
      position: 'CTO & VP ',
      companyName: 'James Publishing',
    },
    {
      review: `
        We’ve tried many AI platforms, and Synthflow AI is by far the best. The quality is outstanding, with low latency and reliable performance that makes a huge difference. It’s easy to use and consistently helps us deliver top results. Plus, the integration with HubSpot makes it even easier to manage and optimize our workflows.`,
      reviewerImage:
        'https://synthflow.ai/wp-content/w3-webp/uploads/2024/09/Mike-Margol.jpegw3.webp',
      name: 'Mike Margol',
      position: 'CTO & VP ',
      companyName: 'James Publishing',
    },

    {
      review: `
       This is the NUMBER ONE software you want to be using when creating your AI Callers. The amount of time and effort they put into these builds is just incredible. They have changed the game and will continue to do so!`,
      reviewerImage:
        'https://synthflow.ai/wp-content/w3-webp/uploads/2024/09/Mike-Margol.jpegw3.webp',
      name: 'Mike Margol',
      position: 'CTO & VP ',
      companyName: 'James Publishing',
    },
    {
      review: `
      I have tried a number of Voice AI services and Synthflow is miles apart from anyone else. Their platform is more extensive and easier to use than any other product out there. The agents are easy toast up and connect to what ever system you want them to. They have really thought of amazing features that are on point for being productive and a bunch of agents working day one!`,
      reviewerImage:
        'https://synthflow.ai/wp-content/w3-webp/uploads/2024/09/Mike-Margol.jpegw3.webp',
      name: 'Mike Margol',
      position: 'CTO & VP ',
      companyName: 'James Publishing',
    },

    {
      review: `
     I found Synthflow through its Hubspot integration and was really impressed. The set up was easy and the quality is great. The onboarding team is quick to respond and helpful.`,
      reviewerImage:
        'https://synthflow.ai/wp-content/w3-webp/uploads/2024/09/Mike-Margol.jpegw3.webp',
      name: 'Mike Margol',
      position: 'CTO & VP ',
      companyName: 'James Publishing',
    },

    {
      review: `
     I absolutely love Synthflow. We have tried 4 different Voice AI providers and Synthflow is by far the best on the market. They are actively developing and improving the platform and always focused on feedback they get to improve.`,
      reviewerImage:
        'https://synthflow.ai/wp-content/w3-webp/uploads/2024/09/Mike-Margol.jpegw3.webp',
      name: 'Mike Margol',
      position: 'CTO & VP ',
      companyName: 'James Publishing',
    },
  ];
</script>

<!-- <div>Testimonials</div> -->

<div class="container mx-auto px-4">
  <div class="columns-1 gap-4 md:columns-2 lg:columns-3">
    {#each data2 as testimonial}
      <div class="mb-4 break-inside-avoid rounded-lg bg-white p-4 shadow-lg">
        <!-- <img
          class="mb-4 h-auto w-full rounded"
          src={testimonial.reviewerImage}
          alt={`Photo of ${testimonial.name}`} /> -->
        <p class="text-sm text-gray-600">{testimonial.review}</p>
        <h4 class="mt-2 text-sm font-semibold">
          {testimonial.name}, {testimonial.position} at {testimonial.companyName}
        </h4>
      </div>
    {/each}
  </div>
</div>
