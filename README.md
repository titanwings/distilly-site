# Distilly Website

Static marketing site for [Distilly](https://github.com/titanwings/distilly), built for GitHub Pages.

- Homepage: `index.html`
- Community catalog browser (215 public entries): `marketplace.html`
- `skills.json` — static snapshot of public YAML metadata from [colleague-skill-site](https://github.com/titanwings/colleague-skill-site/tree/main/website/src/content/skills)
- Read-only interactive profile demo: `demo.html`

Live: https://titanwings.github.io/distilly-site/

The site is dependency-free and can be opened locally with `python3 -m http.server`.

## Custom domain follow-up

When DNS is ready, configure GitHub Pages for `distilly.me` and add these records at the domain provider:

- `@` A → `185.199.108.153`
- `@` A → `185.199.109.153`
- `@` A → `185.199.110.153`
- `@` A → `185.199.111.153`
- optional `www` CNAME → `titanwings.github.io`

Then add a `CNAME` file containing `distilly.me` and enable HTTPS in the repository Pages settings.
