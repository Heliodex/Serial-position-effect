<script lang="ts">
	import Timer from "./Timer.svelte"

	const { go } = $props<{
		go: () => void
	}>()
	const time = 1
	let timeLeft = $state(time)

	$effect(() => {
		const interval = setInterval(() => {
			timeLeft--
			if (timeLeft <= 0) {
				clearInterval(interval)
				go()
			}
		}, 1000)
	})
</script>

<div class="text-3xl flex flex-col items-center">
	The test will begin in
	<b>{timeLeft}</b>

	<div class="pt-4">
		<Timer {time} />
	</div>
</div>
