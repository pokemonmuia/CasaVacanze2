// src/lib/translations.js
import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const storedLang = browser ? localStorage.getItem('lang') : 'it';
export const lang = writable(storedLang || 'it');

lang.subscribe((value) => {
    if (browser) {
        localStorage.setItem('lang', value);
    }
});

const dict = {
    it: {
        // --- AGGIUNGI QUESTE RIGHE ---
        menu_label: "MENU",
        menu_houses: "LE CASE",
        menu_about: "CHI SIAMO",
        menu_contacts: "CONTATTI",
        // -----------------------------
        
        // (Qui dovresti avere anche gli altri testi della pagina)
        title: "Benvenuti...", 
        form_name: "Nome",
        form_send: "Invia"
    },
    en: {
        // --- AGGIUNGI QUESTE RIGHE ---
        menu_label: "MENU",
        menu_houses: "THE HOUSES",
        menu_about: "ABOUT US",
        menu_contacts: "CONTACTS",
        // -----------------------------

        title: "Welcome...",
        form_name: "Name",
        form_send: "Send"
    }
};

export const t = derived(lang, ($lang) => dict[$lang]);