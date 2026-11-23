# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Moczilla12/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Moczilla12/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) — $250, top 50 paid.

## The entry

The entry is one post on X from [@worthless_npc](https://x.com/worthless_npc) that quotes
[make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646), with a
photo of its own attached. Its text carries the line
`Make your own bounty on @makefunai: https://make.fun/sponsor/new` and the play code
`makefun-mango-taco-pueblo`.

Places go by the post's score at the deadline reading:

```
score = replies + reposts + quotes
```

Views and likes move nothing. Engagement is never bought, botted, or made by the entrant's own
accounts — only genuine replies, reposts and quotes count.

## The post

The draft text and the photo live in this repository:

- `POST.json` — the post's address on X, as `{"url": "https://x.com/<handle>/status/<id>"}`.
  The placeholder is replaced with the real post address once the post is up.
- `assets/post-photo.png` — the photo attached to the post, made for this entry.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to
`/output/POST.json`. That is all it does — the house reads the post itself from X.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
