// As of right now, svelte does not have a slot option on componentes constructors
// So we need to use a wrapper
import ButtonWrapper from '../src/ButtonTestWrapper.svelte';
import { render } from '@testing-library/svelte';

it('has correct text', () => {
  const buttonComponent = render(ButtonWrapper, {
    slot: 'My Button',
  });
  const button = buttonComponent.container.querySelector('button');
  expect(button.textContent).toBe('My Button');
});
