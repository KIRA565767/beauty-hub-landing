# Telegram Diagnostics Flow

The MVP Telegram diagnostic flow should work as an entry point into Beauty Hub, not as a replacement for the main Telegram channel.

## Core Flow

`site -> bot/start -> 5-7 questions -> route result -> channel/product/consultation`

## Entry Sources

The site should pass source labels into Telegram links so the first step can identify intent:

- `hero_primary`
- `sticky_cta`
- `route_technique`
- `route_client_flow`
- `route_independence`
- `route_mentorship`
- `telegram_terminal`
- `final_conversion`
- `footer`
- `header`

## Diagnostic Questions

The bot should ask 5-7 short questions that separate:

- technique and materials;
- client flow and booking;
- independence from employment or another person's system;
- need for personal correction and guided route work.

## Result

The result should give one primary route and one first step. It should avoid fake certainty, fake scoring, and inflated promises.

## Handoff

After the route result, the bot can send the user to:

- the main Telegram channel;
- a route-specific product waitlist or page;
- a consultation or personal diagnostic request.

## Guardrails

- The bot is a diagnostic entry point.
- The channel remains the main trust and content layer.
- Do not add fake subscriber counts, fake chat screenshots, or fabricated results.
