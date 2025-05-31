# Engauge Docs

Documentation for Engauge.

Built with [Starlight](https://starlight.astro.build/).

## OpenAPI reference generation

When building docs, Starlight will try to hit the official
`https://engau.ge/swagger/v1/swagger.json` by default. You can specify the
environment variable `SWAGGER_URL` to override this (pass in a local
`swagger.json`, for example).
