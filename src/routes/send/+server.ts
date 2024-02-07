import db from "$lib/server/db"

export async function POST({ request }) {
	const {
		words,
		recalled,
	}: {
		words: string[]
		recalled: string[]
	} = await request.json()

	console.log("SENDING")

	await db.query(
		`
			INSERT INTO results (words, recalled)
			VALUES ($1, $2)`,
		[words, recalled]
	)

	console.log("SENT!")

	return new Response("OK")
}
