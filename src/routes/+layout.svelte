<script lang="ts">
	import "../app.css";
	import { theme } from "$lib/theme.svelte";
	let { children } = $props();
	// let theme = $state("dark")
	$effect(() => {
		document.documentElement.classList.toggle(theme.getTheme());
	});
</script>

<div class="bg-primary dark:bg-primaryDark h-screen overflow-auto">
	{@render children()}
</div>
