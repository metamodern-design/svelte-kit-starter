<script>
  import Banner from '$lib/header/Banner.svelte';
  import Hero from '$lib/header/Hero.svelte';
  import Features from '$lib/content/Features.svelte';
  import CallToAction from '$lib/content/CallToAction.svelte';
  
</script>

<header class="mb-32">
  <Banner />
  <Hero />
</header>

<main class="space-y-32">
  <Features />
  <CallToAction />
</main>
