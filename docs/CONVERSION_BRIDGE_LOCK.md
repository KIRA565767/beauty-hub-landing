<!-- Source-of-truth document for Beauty Hub conversion logic, Telegram bridges, product pathways, and future payload/quiz architecture. Use before changing CTA, Telegram links, Start flow, product reveal, or application logic. -->

# Beauty Hub CONVERSION BRIDGE LOCK

Version: v1.0 / Conversion & Telegram Bridge Lock  
Date: 2026-05-18  
Status: active source of truth  
Owner: KIRA / project lead

---

## 0. Purpose

This document fixes how Beauty Hub converts users from site pages into the correct next step.

Beauty Hub does not convert by shouting, fake urgency, discount timers, or generic Telegram links.

Beauty Hub converts by:

1. naming the correct problem;
2. showing the route;
3. giving the first next step;
4. moving the user into Telegram or application flow without context loss.

Telegram is not a channel promo.
Telegram is the continuation layer of the route.

---

## 1. Conversion principle

The core conversion formula:

```text
Room diagnoses the problem.
Telegram gives the next step.
Product or application solves the route-specific need.
```

Wrong formula:

```text
Read page → subscribe to channel.
```

Correct formula:

```text
Read Technique Room → understand that lifting / speed / material logic is the node → continue Technique route in Telegram or open the technique product.
```

The site should make the user feel:

```text
I know what is breaking.
I know which route I need.
The next step is clear.
```

---

## 2. No unrealistic conversion claims

Do not use internal or external language like:

```text
near-100% CTR
100% subscription
inevitable purchase
guaranteed payment
conversion machine that forces purchase
```

Realistic language:

```text
increase Telegram transition rate through contextual continuity
reduce context loss between site and Telegram
improve qualified click-through
make the next step clear
```

Suggested measurement language:

```text
Telegram CTR from engaged users
Room CTA click rate
Route-to-Telegram click rate
Start-to-route completion rate
Mentorship application start rate
```

---

## 3. Context continuity

The main conversion loss happens when the user leaves a specific route and lands in a generic Telegram environment.

If the user reads about Client Flow and then opens Telegram where the first visible post is unrelated, the context breaks.

The bridge must keep continuity:

```text
Site route → route-specific CTA → Telegram / pinned route entry → matching first material
```

Every room must answer before the CTA:

```text
What will I get after I click?
Why is Telegram the correct next step?
How does this continue the room I just read?
```

---

## 4. Telegram role

Telegram is the live delivery layer.

It can contain:

- route materials;
- first fixes;
- post breakdowns;
- practice notes;
- profile / message examples;
- case notes;
- announcements of products;
- application paths;
- discussion / retention layer.

Telegram must not be positioned as:

```text
just a channel
random content feed
personal blog only
motivation feed
sales broadcast
```

Correct positioning:

```text
Telegram is the live space where Beauty Hub routes continue through materials, breakdowns and first steps.
```

---

## 5. Room-specific Telegram bridges

Each room needs its own Telegram bridge.

### 5.1 Technique bridge

User context:

```text
The master is concerned with lifting, unstable quality, speed, materials, bases, architecture or hard materials.
```

Bridge promise:

```text
Continue the Technique route: receive the first material about where lifting, lost speed and unstable result usually start.
```

CTA:

```text
ПРОДОЛЖИТЬ МАРШРУТ ПО ТЕХНИКЕ →
```

Do not say:

```text
Подписаться на Telegram
```

### 5.2 Client Flow bridge

User context:

```text
The master is concerned with Avito, profile, photos, offer, messages, booking conversion or client path.
```

Bridge promise:

```text
Continue the Client Flow route: understand where the chain profile → photo → offer → message → booking breaks.
```

CTA:

```text
РАЗОБРАТЬ ПУТЬ КЛИЕНТА ДО ЗАПИСИ →
```

### 5.3 Independence bridge

User context:

```text
The master wants independence, own price, own schedule, own cabinet, or safe exit from employment.
```

Bridge promise:

```text
Continue the Independence route: check what must be ready before leaving employment — booking, price, schedule and reserve.
```

CTA:

```text
ПОЛУЧИТЬ ПЕРВЫЙ ПЛАН ВЫХОДА →
```

### 5.4 Mentorship bridge

User context:

```text
The master does not know which node is holding growth or needs personal correction.
```

Bridge promise:

```text
Request a personal review: pass the situation into diagnosis if the problem does not fit one route.
```

CTA:

```text
ЗАПРОСИТЬ ЛИЧНЫЙ РАЗБОР →
```

---

## 6. Product pathways

Different products require different conversion logic.

### 6.1 Technique course — soft product reveal

Technique can sell a fixed product.

Correct path:

```text
problem → technical diagnosis → module structure → first fix → product reveal → Telegram / purchase path
```

Rules:

- do not reveal the course as a generic info product;
- show structure and value calmly;
- no fake urgency;
- no fake scarcity;
- no unverified promises;
- price must appear as system cost, not impulse discount.

### 6.2 Client Flow — Telegram-first / breakdown-first

Client Flow often requires seeing the user's profile, photos, offer or messages.

Correct path:

```text
client path diagnosis → first fix → Telegram continuation / breakdown path
```

Do not overpromise automatic clients.

Do not frame Avito as a magic tool.

Frame it as a route:

```text
profile → trust → message → dialogue → booking
```

### 6.3 Independence — plan-first

Independence should not be sold through motivation.

Correct path:

```text
salon dependence → calculation → safe transition plan → first step → Telegram / review
```

Avoid:

```text
just leave the salon
stop working for others
freedom lifestyle promises
```

Use:

```text
booking
price
schedule
reserve
route
safe transition
```

### 6.4 Mentorship — application-first

High-ticket personal work should not be sold through a simple buy button.

Correct path:

```text
mixed problem → personal diagnosis → application / request → review fit → next step
```

The CTA must feel like a controlled request, not a checkout.

Allowed labels:

```text
ЗАПРОСИТЬ ЛИЧНЫЙ РАЗБОР →
ПЕРЕДАТЬ СИТУАЦИЮ НА РАЗБОР →
ПОНЯТЬ, С КАКОГО УЗЛА НАЧАТЬ →
```

Forbidden labels:

```text
Купить наставничество
Занять место
Успеть попасть
```

---

## 7. Start flow

### 7.1 Current stage — Start-lite

Current Start should be simple.

It helps the user choose the correct route.

It should not yet be a full data-capturing quiz.

Suggested structure:

```text
Не знаешь, с чего начать?
Выбери симптом.

1. Отслойки / нестабильное качество / медленная работа → Technique
2. Нет клиентов / профиль не ведёт к записи / переписка глохнет → Client Flow
3. Хочу уйти из найма / боюсь цены / нет плана → Independence
4. Всё смешалось / не понимаю, где проблема → Mentorship
```

### 7.2 Future stage — quiz

Only after first real user signal, Start can become a small quiz.

Future quiz may include:

- current master level;
- main bottleneck;
- current traffic source;
- price / schedule readiness;
- preferred next step.

Do not implement full quiz now unless explicitly requested.

### 7.3 Future stage — localStorage / resume path

Future functionality:

```text
save last selected route
show “continue route” block on return
carry selected route into Telegram payload
```

Do not implement now unless explicitly requested.

---

## 8. Future Telegram payload matrix

Payloads are future architecture notes.

Do not implement bot payload handling now.

Potential payloads:

```text
home
routes
technique
client_flow
independence
mentorship
quiz_technique
quiz_client_flow
quiz_independence
quiz_mentorship
product_technique
product_mentorship
```

Suggested mapping:

```text
Technique Room content bridge → technique
Technique product bridge → product_technique
Client Flow bridge → client_flow or quiz_client_flow
Independence bridge → independence or quiz_independence
Mentorship bridge → product_mentorship or mentorship
Start result Technique → quiz_technique
Start result Client Flow → quiz_client_flow
Start result Independence → quiz_independence
Start result Mentorship → quiz_mentorship
```

Current implementation may use ordinary Telegram links while copy already prepares route-specific continuation.

---

## 9. Telegram profile / channel requirements

The site can only convert well if Telegram matches the promise.

Telegram must not look like a random personal feed.

Minimum Telegram structure:

1. Name:

```text
Юлия Кюнеберг — Beauty Hub
```

2. Description:

```text
Маршруты для beauty-мастеров: техника, клиентский поток, самостоятельность и личный разбор.
```

3. Pinned post:

```text
С чего начать в Beauty Hub
```

4. Pinned post structure:

```text
01 Technique — техника, материалы, скорость, чистота
02 Client Flow — Avito, профиль, фото, переписка, запись
03 Independence — выход из найма, цена, график, свой кабинет
04 Mentorship — личный разбор, если проблема смешанная
```

5. Each route must have at least one matching material/post.

If Telegram does not match the site promise, conversion will break after click.

---

## 10. Cases and proof conversion

Cases support conversion only if they feel real and relevant.

Use cases as archive extracts.

Do not use fake testimonials.

Correct format:

```text
CASE 01 / CLIENT FLOW
Starting blind zone: profile created views but did not convert into booking.
Correction: first screen, offer and reply structure were rebuilt.
System result: client path became shorter and clearer.
```

Avoid:

```text
She earned 10x in a week.
She was shocked.
Only after Julia's method.
```

Cases can appear:

- as previews on homepage;
- as relevant proof inside route rooms;
- as deeper breakdowns in Telegram.

---

## 11. Conversion metrics

Do not frame success as 100% subscription or guaranteed sale.

Measure:

```text
homepage_to_routes_click
route_hall_to_room_click
room_to_telegram_click
room_to_product_click
start_to_route_click
mentorship_application_click
telegram_profile_subscription_rate
```

Future analytics can use Yandex Metrica / PostHog, but this is not current stage unless explicitly requested.

---

## 12. Do not do now

Do not implement now:

- Telegram bot;
- payload handling;
- full quiz;
- localStorage resume path;
- analytics;
- product checkout;
- CRM;
- application form backend;
- fake scarcity;
- fake numbers;
- fake testimonials.

---

## 13. Acceptance checklist

Before approving CTA / conversion logic, check:

```text
Does this CTA sell a next step, not a subscription?
Does the next step match the room context?
Does the page explain what happens after the click?
Does Telegram continue the route?
Is there any fake urgency?
Is there any unrealistic promise?
Is mentorship framed as application-first?
Is Technique framed as soft product reveal?
Is Client Flow framed as path diagnosis?
Is Independence framed as safe transition plan?
```

If any answer is no, rewrite the bridge.
