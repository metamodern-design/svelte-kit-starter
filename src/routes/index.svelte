<script>
  import Banner from '$lib/header/Banner.svelte';
  import Hero from '$lib/header/Hero.svelte';
  import Features from '$lib/content/Features.svelte';
  import CallToAction from '$lib/footer/CallToAction.svelte';
  
</script>

<header class="mb-8">
  <Banner />
  <Hero />
</header>

<main>
  <Features />
</main>

<footer class="mt-8">
  <CallToAction />
</footer>
