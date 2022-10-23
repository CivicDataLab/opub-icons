# Opub Icons

- [Opub Icons](#opub-icons)

  - [What is it?](#what-is-it)
  - [Why this and not official one?](#why-this-and-not-official-one)
  - [Is it tree shakable?](#is-it-tree-shakable)
  - [How many icons?](#how-many-icons)
  - [Licening](#licening)
  - [Build](#build)
  - [Create your Icon pack](#create-your-icon-pack)

<br>
<br>

## What is it?

React Icon pack based on the [spectrum icons](https://spectrum.adobe.com/page/icons/) by Adobe.

<br>

## Why this and not official one?

There is already a [react wrapper](https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html) provided by Adobe team. But it doesn't work with Next.js. Atleast, not without adding the theme and other stuff from spectrum as well. [Read More](https://react-spectrum.adobe.com/react-spectrum/ssr.html).

<br>

## Is it tree shakable?

Yes! The SVG to JS tranformation flow is inspired by amazing folks at [Luicde](https://github.com/lucide-icons/lucide). After testing their icon library, we decided to do whatever they we doing.

<br>

## How many icons?

There are 901 workflow icons and 64 UI icons. [Read more about them](https://spectrum.adobe.com/page/iconography/)

`npm install @opub-icons/workflow` - for workflow icons

`npm install @opub-icons/ui` - for ui icons 

<br>

## Licening

The repo is under Apache License 2.0. But, please go through both [Spectrum Licence](https://github.com/adobe/react-spectrum/blob/main/LICENSE) and [Lucide License](https://github.com/lucide-icons/lucide/blob/main/LICENSE) before deciding on anything.

<br>

## Build

`npm run build` on root of the repo will generate react components of both workflow and ui icons and also preapare them for publishing to npm.

<br>

## Create your Icon pack

Repalce `ui` and `workflow` directories from `/icons` in root directory. Do the same for `/packages`.

You would want to change the values in files under `/src` and `/scripts`.

Run `npm run build` from root.
