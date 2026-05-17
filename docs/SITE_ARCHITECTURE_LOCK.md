<!-- Source-of-truth document for Beauty Hub. Generated from project DOCX lock file. -->

# Beauty Hub SITE ARCHITECTURE LOCK

Geometry / Scroll / Motion / Rooms / Buttons / Mobile

## 0. Назначение документа
Этот документ фиксирует архитектуру сайта: как страницы устроены геометрически, как пользователь скроллит, как открываются комнаты, как работают карточки, кнопки, переходы и mobile-навигация.
Visual Lock уже определяет внешний характер: Dark Polished Beauty Editorial, matte graphite, ivory, aged copper, orange light, private editorial archive. Этот файл отвечает на другой вопрос: как именно это должно двигаться, раскладываться, открываться и вести пользователя к Telegram, курсу или личному разбору.
Главная задача архитектуры: сделать сайт не одностраничным лендингом, а premium route-system.

## 1. Главный архитектурный принцип
Beauty Hub — это не длинная простыня блоков. Это маршрутная система:
1. Главная страница — вход и объяснение проекта.
2. Route Hall — холл выбора маршрутов.
3. Route Rooms — четыре комнаты: Technique, Client Flow, Independence, Mentorship.
4. Telegram / Product Access — финальный шаг конверсии.

## 2. Навигация и scroll
- Smooth scroll с respect reduced-motion
- Route rooms должны открываться с плавным fade + translateY 16-32px
- Hover карточек — edge light, subtle, no bounce, no glitch
- Bottom dock (mobile) — доступ к Route Hall / Rooms / Telegram
