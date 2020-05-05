import { action } from '@storybook/addon-actions';

// As of right now, svelte does not have a slot option on componentes constructors
// So we need to use a wrapper
import Button from '../src/ButtonTestWrapper.svelte';

export default {
  title: 'Button',
  component: Button,
};

export const Secondary = () => ({
  Component: Button,
  on: { click: action('clicked') },
});

export const PrimaryRed = () => ({
  Component: Button,
  props: {
    buttonProps: { primary: true, primaryColor: 'red' },
    slot: 'My Button',
  },
  on: { click: action('clicked') },
});

export const Disabled = () => ({
  Component: Button,
  props: {
    buttonProps: { primary: false, primaryColor: 'red', disabled: true },
    slot: 'Disabled button',
  },
  on: { click: action('clicked') },
});

export const Rounded = () => ({
  Component: Button,
  props: {
    buttonProps: { rounded: true },
    slot: 'Round button',
  },
  on: { click: action('clicked') },
});
