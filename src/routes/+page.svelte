<script>
    import { fade, slide } from 'svelte/transition';
    
    // Importiamo i componenti che hai creato
    import AboutSection from '$lib/components/AboutSection.svelte';
    import HistorySection from '$lib/components/HistorySection.svelte';
    import RoomsSection from '$lib/components/RoomsSection.svelte';
    import ContactSection from '$lib/components/ContactSection.svelte';

    // Questa variabile tiene traccia di cosa stiamo guardando
    let activeSection = null; // All'inizio è vuoto

    // Configurazione delle 6 finestre (Indici: 0=TopSx, 1=TopDx, 2=MidSx, 3=MidDx, 4=BotSx, 5=BotDx)
    const windows = [
        { id: 'about', label: 'ABOUT US', component: AboutSection },      // Top Left
        { id: 'history', label: 'CITY HISTORY', component: HistorySection }, // Top Right
        { id: 'rooms', label: 'THE ROOMS', component: RoomsSection },     // Mid Left
        { id: null, label: '', component: null },                         // Mid Right (Vuoto per ora)
        { id: 'contact', label: 'CONTACTS', component: ContactSection },  // Bot Left
        { id: null, label: '', component: null }                          // Bot Right (Vuoto per ora)
    ];

    function selectSection(windowItem) {
        if (windowItem.component) {
            activeSection = windowItem.id;
            // Scorre gentilmente verso il contenuto
            setTimeout(() => {
                document.getElementById('content-area').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
</script>

<main>
    <h1>Benvenuti a Casa</h1>

    <div class="grid-container">
        <img src="/windows-grid.png" alt="Menu Finestre" class="bg-image">

        <div class="overlay-grid">
            {#each windows as window}
                <div 
                    class="grid-item" 
                    class:active={activeSection === window.id}
                    class:disabled={!window.component}
                    on:click={() => selectSection(window)}
                >
                    <span class="label">{window.label}</span>
                </div>
            {/each}
        </div>
    </div>

    <div id="content-area">
        {#if activeSection === 'about'}
            <div in:slide><AboutSection /></div>
        {:else if activeSection === 'history'}
            <div in:slide><HistorySection /></div>
        {:else if activeSection === 'rooms'}
            <div in:slide><RoomsSection /></div>
        {:else if activeSection === 'contact'}
            <div in:slide><ContactSection /></div>
        {/if}
    </div>
</main>

<style>
    main {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }

    /* Container principale */
    .grid-container {
        position: relative;
        width: 100%;
        max-width: 600px; /* Larghezza del tuo disegno */
        margin: 0 auto;
    }

    /* L'immagine sta sotto */
    .bg-image {
        width: 100%;
        display: block;
    }

    /* La griglia sta sopra, perfettamente allineata */
    .overlay-grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr; /* 2 Colonne */
        grid-template-rows: 1fr 1fr 1fr; /* 3 Righe */
    }

    /* Le singole "celle" invisibili sopra le finestre */
    .grid-item {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0); /* Invisibile di base */
    }

    /* EFFETTO HOVER: Sfondo bianco semi-trasparente + Testo */
    .grid-item:hover:not(.disabled), .grid-item.active {
        background: rgba(255, 255, 255, 0.85); /* "Fade" effect */
    }

    /* Il testo (nascosco di default) */
    .label {
        opacity: 0;
        font-weight: bold;
        font-size: 1.2rem;
        color: #333;
        text-transform: uppercase;
        transition: opacity 0.3s ease;
    }

    /* Mostra il testo solo all'hover */
    .grid-item:hover:not(.disabled) .label, 
    .grid-item.active .label {
        opacity: 1;
    }

    .disabled {
        cursor: default;
    }

    #content-area {
        margin-top: 40px;
        padding: 20px;
        border-top: 1px solid #ccc;
        min-height: 300px; /* Evita che la pagina salti */
    }
</style>