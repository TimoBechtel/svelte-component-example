# Svelte Component Example

This is a small example for creating reusable components with Svelte.
It's a pretty basic example, but it includes Storybook, Testing with Jest and Variable Colors.

In a real scenario, you probably have the components in separat repositories or in a component library. For this example, I've thrown everything in this repo.

## Contents

### button/

This is the main example component. It includes storybook stories and tests using jest.

For simplifying this example, I just exported the Svelte source files in the package.json, however when you want to use it in a project without svelte, you may want to add a bundler configuration (e.g. rollup).

- install with npm `cd example/ && npm i`
- run storybook `npm run storybook`
- run tests `npm run test`

**Note:**
The button component uses a slot. Because, as of right now (PR4296), we cannot render slots with the component constructor. So I added a `ButtonTestWrapper.svelte` component that is used to render the button's slot.

### example/

This is an example project that uses the button component and bundles it into a web page.

- install `cd button/ && npm i`
- serve website `npm run dev`
