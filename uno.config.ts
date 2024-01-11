import {
	defineConfig,
	toEscapedSelector as e,
	presetAttributify,
	presetUno,
} from "unocss"
import presetTagify from "@unocss/preset-tagify"
import transformerDirectives from "@unocss/transformer-directives"
import transformerVariantGroup from "@unocss/transformer-variant-group"

export default defineConfig({
	presets: [presetTagify(), presetAttributify(), presetUno()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
})
