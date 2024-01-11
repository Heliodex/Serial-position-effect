<script lang="ts">
	import Timer from "./Timer.svelte"

	const { go } = $props<{
		go: () => void
	}>()
</script>

<div>
	<p>info form go here</p>

	<button onclick={go}>Continue</button>
</div>
