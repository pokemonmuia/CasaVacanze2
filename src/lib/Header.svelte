<script>
    // 1. IMPORT THE STORE
    import { lang, t } from '$lib/translations.js';

    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    // Helper to toggle language
    function switchLang() {
        $lang = $lang === 'it' ? 'en' : 'it';
    }
</script>

<nav class="nav-header" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; position: relative;">
    
    <div style="position: relative;">
        <button class="home-button" on:click={toggleMenu}>
            ☰ {$t.menu_label || 'MENU'} 
        </button>
        
        {#if isMenuOpen}
            <div class="dropdown-content" style="position: absolute; top: 50px; left: 0; background: rgb(8, 29, 34); border: 1px solid white; border-radius: 8px; z-index: 1000; min-width: 150px;">
                <a href="/rooms" on:click={closeMenu} style="display: block; padding: 12px; border-bottom: 1px solid #333;">
                    {$t.menu_houses}
                </a>
                <a href="/about" on:click={closeMenu} style="display: block; padding: 12px; border-bottom: 1px solid #333;">
                    {$t.menu_about}
                </a>
                <a href="/#contact" on:click={closeMenu} style="display: block; padding: 12px;">
                    {$t.menu_contacts}
                </a>
            </div>
        {/if}
    </div>

    <div>
        <a href="/" class="home-button" style="text-decoration: none; display: inline-block;">
            HOME
        </a>
    </div>

    <div>
        <button class="home-button" on:click={switchLang}>
            {$lang === 'it' ? '🇬🇧 EN' : '🇮🇹 IT'}
        </button>
    </div>
</nav>