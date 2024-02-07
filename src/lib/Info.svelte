<script lang="ts">
	const { go, length } = $props<{
		go: () => void
		length: number
	}>()
</script>

<div class="max-w-screen px-2 w-200">
	<div>
		<h1 class="text-2xl">Information</h1>
		<p>
			The task you will complete is a word memorisation and recall task.
			You will be shown a countdown timer before the test begins.
		</p>
		<img
			src="/step1.png"
			alt="Screenshot of the countdown timer"
			class="w-90" />

		<p>
			Afterwards, you will be shown a slideshow of random words, one at a
			time, for 3 seconds each. Every word is 10 letters long. A counter
			will display which word you are on, and a timer will be displayed
			below the word.
		</p>
		<p>
			Your slideshow will contain <b>{length}</b>
			words.
		</p>

		<img src="/step2.png" alt="Screenshot of the words task" class="w-90" />

		<p>
			After the slideshow, you will be asked to recall as many words as
			you can
			<b>in the order they were shown.</b>
			You will be given as much time as you need to recall the words.
		</p>

		<img
			src="/step3.png"
			alt="Screenshot of the recall page"
			class="w-120" />

		<p>
			Once you have recalled all the words you can, you will be shown the
			results page, which will display the words you recalled correctly
			and incorrectly.
		</p>

		<img
			src="/step4.png"
			alt="Screenshot of the results page"
			class="w-150" />

		<p>
			This is <b>not</b>
			an intelligence test or a test of your abilities. You are not expected
			to recall every word, though you are encouraged to try your best.
		</p>

		<p>
			After this, the study will end and you will be shown the debrief
			page, which will explain the purpose of the study.
		</p>
	</div>

	<button onclick={go}>Begin the test</button>
</div>
