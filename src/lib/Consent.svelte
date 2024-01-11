<script lang="ts">
	const { go } = $props<{
		go: () => void
	}>()
</script>

<div>
	<p>consent form go here</p>

	<button onclick={go}>Continue</button>
</div>
