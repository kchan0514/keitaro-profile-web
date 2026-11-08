"""Playful Habits 用の手描きスケッチ（取り組みカード用）。文字なし。"""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[5] / '06_code/scripts'))
from openai_ask import gen_image
out = pathlib.Path(__file__).parent / 'raw_ph.png'
gen_image(
    "A loose graphite pencil sketch on plain white paper, in the style of a designer's notebook. "
    "A tiny floating island with a few small houses and a tree, and three small simple figures "
    "(a family: two adults and a child) waving from the island. A small sun rising behind. "
    "Thin hand-drawn lines, light hatching, lots of empty white space, no color, no shading background, "
    "no text, no letters, no numbers, no frame. Centered, small in the frame.",
    out=str(out), size='1536x1024', quality='medium')
print(out)
