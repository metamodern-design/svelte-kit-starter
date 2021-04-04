<script>
  import Banner from '$lib/header/Banner.svelte';
  import Hero from '$lib/header/Hero.svelte';
  import Features from '$lib/content/Features.svelte';
  import CallToAction from '$lib/footer/CallToAction.svelte';
  
</script>

<header class="mb-32">
  <Banner />
  <Hero />
</header>

<main>
  <Features />
</main>

<footer class="mt-32">
  <CallToAction />
  <div class="w-full h-96 bg-gray-800"></div>
</footer>
