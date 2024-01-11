<script lang="ts">
	import { tweened } from "svelte/motion"

	const { time } = $props<{
		time: number
	} & any>()

	let timeLeft = tweened(time, {
		duration: time * 1000,
	})

	$effect(() => {
		timeLeft.set(0)
	})
</script>

<div
	class="size-20 rounded-full"
	style="--angle: {(1 - $timeLeft / time) * 360}deg">
</div>

<style lang="stylus">
	div
		background conic-gradient(
			transparent 0deg,
			transparent var(--angle),
			black var(--angle),
			black 360deg
		)
</style>
