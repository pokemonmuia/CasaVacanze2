<script>
    import '../app.css'; // Imports your global CSS
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
    <slot /> </main>

<Footer />